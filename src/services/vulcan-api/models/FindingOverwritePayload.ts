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
 * @interface FindingOverwritePayload
 */
export interface FindingOverwritePayload {
    /**
     * Notes
     * @type {string}
     * @memberof FindingOverwritePayload
     */
    notes: string;
    /**
     * Status
     * @type {string}
     * @memberof FindingOverwritePayload
     */
    status: string;
}

export function FindingOverwritePayloadFromJSON(json: any): FindingOverwritePayload {
    return FindingOverwritePayloadFromJSONTyped(json, false);
}

export function FindingOverwritePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindingOverwritePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'notes': json['notes'],
        'status': json['status'],
    };
}

export function FindingOverwritePayloadToJSON(value?: FindingOverwritePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'notes': value.notes,
        'status': value.status,
    };
}

