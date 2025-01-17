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
 * User (default view)
 * @export
 * @interface User
 */
export interface User {
    /**
     * Active
     * @type {boolean}
     * @memberof User
     */
    active?: boolean;
    /**
     * Admin
     * @type {boolean}
     * @memberof User
     */
    admin?: boolean;
    /**
     * Email
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * First name
     * @type {string}
     * @memberof User
     */
    firstname?: string;
    /**
     * User ID
     * @type {string}
     * @memberof User
     */
    id?: string;
    /**
     * last_login
     * @type {Date}
     * @memberof User
     */
    lastLogin?: Date;
    /**
     * Last name
     * @type {string}
     * @memberof User
     */
    lastname?: string;
    /**
     * Observer
     * @type {boolean}
     * @memberof User
     */
    observer?: boolean;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'admin': !exists(json, 'admin') ? undefined : json['admin'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastLogin': !exists(json, 'last_login') ? undefined : (new Date(json['last_login'])),
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'observer': !exists(json, 'observer') ? undefined : json['observer'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'admin': value.admin,
        'email': value.email,
        'firstname': value.firstname,
        'id': value.id,
        'last_login': value.lastLogin === undefined ? undefined : (value.lastLogin.toISOString()),
        'lastname': value.lastname,
        'observer': value.observer,
    };
}

