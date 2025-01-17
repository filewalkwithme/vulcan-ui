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
 * Result of the job operation
 * @export
 * @interface JobResult
 */
export interface JobResult {
    /**
     * Optionally populated field when the job finishes correctly, that returns execution related data. The format of the data is defined per operation type
     * @type {object}
     * @memberof JobResult
     */
    data?: object;
    /**
     * When not empty indicates that the job failed
     * @type {string}
     * @memberof JobResult
     */
    error?: string;
}

export function JobResultFromJSON(json: any): JobResult {
    return JobResultFromJSONTyped(json, false);
}

export function JobResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : json['data'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function JobResultToJSON(value?: JobResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
        'error': value.error,
    };
}

