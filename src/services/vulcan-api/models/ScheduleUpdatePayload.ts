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
 * 
 * @export
 * @interface ScheduleUpdatePayload
 */
export interface ScheduleUpdatePayload {
    /**
     * Cron Expression
     * @type {string}
     * @memberof ScheduleUpdatePayload
     */
    cron?: string;
}

export function ScheduleUpdatePayloadFromJSON(json: any): ScheduleUpdatePayload {
    return ScheduleUpdatePayloadFromJSONTyped(json, false);
}

export function ScheduleUpdatePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleUpdatePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cron': !exists(json, 'cron') ? undefined : json['cron'],
    };
}

export function ScheduleUpdatePayloadToJSON(value?: ScheduleUpdatePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cron': value.cron,
    };
}

