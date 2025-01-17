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


import * as runtime from '../runtime';
import {
    Healthcheck,
    HealthcheckFromJSON,
    HealthcheckToJSON,
} from '../models';

/**
 * 
 */
export class HealthcheckApi extends runtime.BaseAPI {

    /**
     * A simple HTTP healthcheck.
     * show healthcheck
     */
    async healthcheckShowRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Healthcheck>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/healthcheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HealthcheckFromJSON(jsonValue));
    }

    /**
     * A simple HTTP healthcheck.
     * show healthcheck
     */
    async healthcheckShow(initOverrides?: RequestInit): Promise<Healthcheck> {
        const response = await this.healthcheckShowRaw(initOverrides);
        return await response.value();
    }

}
