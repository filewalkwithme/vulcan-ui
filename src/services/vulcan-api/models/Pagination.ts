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
 * Pagination info (default view)
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * Limit of results for the list
     * @type {number}
     * @memberof Pagination
     */
    limit?: number;
    /**
     * Indicates if there are more results to query for the list
     * @type {boolean}
     * @memberof Pagination
     */
    more?: boolean;
    /**
     * Results list offset
     * @type {number}
     * @memberof Pagination
     */
    offset?: number;
    /**
     * Total number of results for the list
     * @type {number}
     * @memberof Pagination
     */
    total?: number;
}

export function PaginationFromJSON(json: any): Pagination {
    return PaginationFromJSONTyped(json, false);
}

export function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'more': !exists(json, 'more') ? undefined : json['more'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function PaginationToJSON(value?: Pagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'more': value.more,
        'offset': value.offset,
        'total': value.total,
    };
}

