/* tslint:disable */
/* eslint-disable */
/**
 * OasisExplorer API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
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
 * @interface ValidatorInfo
 */
export interface ValidatorInfo {
    /**
    *
    * @type {string}
    * @memberof ValidatorInfo
    */
    status?: string;
    /**
    *
    * @type {string}
    * @memberof ValidatorInfo
    */
    node_address?: string;
    /**
    *
    * @type {string}
    * @memberof ValidatorInfo
    */
    consensus_address?: string;
    /**
    *
    * @type {number}
    * @memberof ValidatorInfo
    */
    depositors_count?: number;
    /**
    *
    * @type {number}
    * @memberof ValidatorInfo
    */
    blocks_count?: number;
    /**
    *
    * @type {number}
    * @memberof ValidatorInfo
    */
    signatures_count?: number;
    /**
    *
    * @type {number}
    * @memberof ValidatorInfo
    */
    rate_change_interval?: number;
    /**
    *
    * @type {number}
    * @memberof ValidatorInfo
    */
    rate_bound_lead?: number;
    /**
    *
    * @type {number}
    * @memberof ValidatorInfo
    */
    max_rate_steps?: number;
    /**
    *
    * @type {number}
    * @memberof ValidatorInfo
    */
    max_bound_steps?: number;
}

export function ValidatorInfoFromJSON(json: any): ValidatorInfo {
    return ValidatorInfoFromJSONTyped(json, false);
}

export function ValidatorInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'status': !exists(json, 'status') ? undefined : json['status'],
        'node_address': !exists(json, 'node_address') ? undefined : json['node_address'],
        'consensus_address': !exists(json, 'consensus_address') ? undefined : json['consensus_address'],
        'depositors_count': !exists(json, 'depositors_count') ? undefined : json['depositors_count'],
        'blocks_count': !exists(json, 'blocks_count') ? undefined : json['blocks_count'],
        'signatures_count': !exists(json, 'signatures_count') ? undefined : json['signatures_count'],
        'rate_change_interval': !exists(json, 'rate_change_interval') ? undefined : json['rate_change_interval'],
        'rate_bound_lead': !exists(json, 'rate_bound_lead') ? undefined : json['rate_bound_lead'],
        'max_rate_steps': !exists(json, 'max_rate_steps') ? undefined : json['max_rate_steps'],
        'max_bound_steps': !exists(json, 'max_bound_steps') ? undefined : json['max_bound_steps'],
    };
}

export function ValidatorInfoToJSON(value?: ValidatorInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'status': value.status,
        'node_address': value.node_address,
        'consensus_address': value.consensus_address,
        'depositors_count': value.depositors_count,
        'blocks_count': value.blocks_count,
        'signatures_count': value.signatures_count,
        'rate_change_interval': value.rate_change_interval,
        'rate_bound_lead': value.rate_bound_lead,
        'max_rate_steps': value.max_rate_steps,
        'max_bound_steps': value.max_bound_steps,
    };
}
