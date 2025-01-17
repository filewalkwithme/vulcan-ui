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
 * Group (default view)
 * @export
 * @interface Group
 */
export interface Group {
    /**
     * Assets Count
     * @type {number}
     * @memberof Group
     */
    assetsCount?: number;
    /**
     * Description
     * @type {string}
     * @memberof Group
     */
    description?: string;
    /**
     * Group ID
     * @type {string}
     * @memberof Group
     */
    id?: string;
    /**
     * Name
     * @type {string}
     * @memberof Group
     */
    name?: string;
    /**
     * Options
     * @type {string}
     * @memberof Group
     */
    options?: string;
}

export function GroupFromJSON(json: any): Group {
    return GroupFromJSONTyped(json, false);
}

export function GroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): Group {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assetsCount': !exists(json, 'assets_count') ? undefined : json['assets_count'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'options': !exists(json, 'options') ? undefined : json['options'],
    };
}

export function GroupToJSON(value?: Group | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assets_count': value.assetsCount,
        'description': value.description,
        'id': value.id,
        'name': value.name,
        'options': value.options,
    };
}

