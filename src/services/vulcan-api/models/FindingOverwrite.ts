/* tslint:disable */
/* eslint-disable */
/**
 * Vulcan API
 * Public API for Vulcan Vulnerability Scan Engine
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Finding Overwrite (default view)
 * @export
 * @interface FindingOverwrite
 */
export interface FindingOverwrite {
    /**
     * Creation time
     * @type {Date}
     * @memberof FindingOverwrite
     */
    createdAt?: Date;
    /**
     * Finding ID
     * @type {string}
     * @memberof FindingOverwrite
     */
    findingId?: string;
    /**
     * Finding Overwrite ID
     * @type {string}
     * @memberof FindingOverwrite
     */
    id?: string;
    /**
     * Complementary information
     * @type {string}
     * @memberof FindingOverwrite
     */
    notes?: string;
    /**
     * The status requested for the finding referenced by the finding_id field
     * @type {string}
     * @memberof FindingOverwrite
     */
    status?: string;
    /**
     * The previous status for the finding referenced by the finding_id field
     * @type {string}
     * @memberof FindingOverwrite
     */
    statusPrevious?: string;
    /**
     * The tag associated to the user/team who requested this overwrite
     * @type {string}
     * @memberof FindingOverwrite
     */
    tag?: string;
    /**
     * User who requested the finding overwrite
     * @type {string}
     * @memberof FindingOverwrite
     */
    user?: string;
}

export function FindingOverwriteFromJSON(json: any): FindingOverwrite {
    return FindingOverwriteFromJSONTyped(json, false);
}

export function FindingOverwriteFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindingOverwrite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'findingId': !exists(json, 'finding_id') ? undefined : json['finding_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'statusPrevious': !exists(json, 'status_previous') ? undefined : json['status_previous'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function FindingOverwriteToJSON(value?: FindingOverwrite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'finding_id': value.findingId,
        'id': value.id,
        'notes': value.notes,
        'status': value.status,
        'status_previous': value.statusPrevious,
        'tag': value.tag,
        'user': value.user,
    };
}

