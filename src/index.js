/*
Copyright 2021 Adevinta
*/

import * as api from './vulcan-api'
import "./import-jquery"
import * as common from './common'


let config;
let rootElement;
let selectedTeam;
let selectedTeamTag;

$(document).ready(async () => {
    init();
    // Load config.
    try {
        config = await common.config()
        setupFeatures(config);
    } catch (err) {
        handleError(err);
        return;
    }
    // Create vulcan-api client and load data.
    const client = new api.vulcanAPI(config.api_url, () => api.token(config.ask_credentials));
    loadData(client);
})

function setupFeatures(config) {
    if (config.teams_crud === true) {
        $('.createTeamLink').show();
        $('.editTeamLink').show();
    }
}

function init() {
    rootElement = $(document.body);
    // Attach events.
    $("#teamsList").on('change', function () {
        onSelectedTeamChanged()
    });
    $('.editAssetsLink').on('click', function () {
        window.open(`assets/edit-assets.html?team_id=${selectedTeam}`);
    })
    $('.createTeamLink').on('click', function () {
        window.open(`teams/teams.html`);
    })
    $('.editTeamLink').on('click', function () {
        window.open(`teams/teams.html?team_id=${selectedTeam}`);
    })
    $('.manageMembersLink').on('click', function () {
        window.open(`manage-members.html?team_id=${selectedTeam}`);
    })
    $('.dashboardLink').on('click', function () {
        let redirectURL;
        if (config.dashboard_link == "" || config.dashboard_link == "/") {
            redirectURL = `dashboard.html?team_id=${selectedTeam}`;
        } else {
            redirectURL = `${config.dashboard_link}?team=${selectedTeamTag}`;
        }
        window.open(redirectURL);
    })
    $('.reportsLink').on('click', function () {
        window.open(`scans.html?team_id=${selectedTeam}`);
    })
    $('.rolfpLink').on('click', function () {
        window.open(`rolfp/rolfp.html?team_id=${selectedTeam}`);
    });
    $('.liveReportLink').on('click', function () {
        window.open(`report/report.html?team_id=${selectedTeam}`);
    });
    $('.apiTokenLink').on('click', function () {
        window.open(`api/v1/home`);
    });
}

function onSelectedTeamChanged() {
    selectedTeam = $("#teamsList").val();
    selectedTeamTag = $("#teamsList option:selected").attr("data-tag");
}

async function loadData(client, config) {
    $("#main").css("display", "none")
    common.showLoading(rootElement);
    try {

        const profile = await client.profile();
        const userID = profile.id
        let teams;
        if (profile.admin || profile.observer) {
            teams = await client.teams();
        } else {
            teams = await client.userTeams(userID);
        }

        if (teams.length < 1) {
            $('#body').html(`
                <h2 class="title" style="margin-top:50px;line-height:2em;">Welcome to Vulcan, the security platform by Adevinta.</h2>
                <h2 class="subtitle" style="line-height:2em;"><b>You have not been added as a member of any team in Vulcan.</b><br>Teams use Vulcan to automatically scan their assets for security vulnerabilities and learn how to improve their security.<br>You can ask a colleague to add you as a member of an existing team or request the creation of a new team.</h2>
            `);
        } else {
            showTeams(teams);
        }

    } catch (err) {
        handleError(err);
    } finally {
        common.hideLoading();
        $("#main").css("display", "")
    }
}

function showTeams(teams) {
    teams = teams.sort((t1, t2) => t1.name.localeCompare(t2.name))
    teams.forEach(team => {
        $('#teamsList').append(`<option value="${team.id}" data-tag="${team.tag}"> 
                                       ${team.name} 
                                  </option>`);
    });
    // Set default selected team.
    onSelectedTeamChanged();
}

function handleError(err, cb) {
    if (!err.indexOf) {
        common.showError(rootElement, err, cb);
        return
    }
    if (err.indexOf(api.unauthorizedError) >= 0) {
        common.showSessionExpired(rootElement, config);
        $("#main").remove();
        return
    }
    if (err.indexOf(api.forbiddenError) >= 0) {
        common.showSessionExpired(rootElement, config);
        $("#main").remove();
        return
    }
    common.showError(rootElement, err, cb);
    return
}
