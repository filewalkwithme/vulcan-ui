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
 * @interface RecipientsPayload
 */
export interface RecipientsPayload {
    /**
     * Emails
     * @type {Array<string>}
     * @memberof RecipientsPayload
     */
    emails: Array<string>;
}

export function RecipientsPayloadFromJSON(json: any): RecipientsPayload {
    return RecipientsPayloadFromJSONTyped(json, false);
}

export function RecipientsPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipientsPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emails': json['emails'],
    };
}

export function RecipientsPayloadToJSON(value?: RecipientsPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emails': value.emails,
    };
}

