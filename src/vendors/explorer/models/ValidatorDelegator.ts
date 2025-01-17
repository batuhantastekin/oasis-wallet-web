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
 * @interface ValidatorDelegator
 */
export interface ValidatorDelegator {
    /**
    *
    * @type {string}
    * @memberof ValidatorDelegator
    */
    account_id?: string;
    /**
    *
    * @type {number}
    * @memberof ValidatorDelegator
    */
    escrow_amount?: number;
    /**
    *
    * @type {number}
    * @memberof ValidatorDelegator
    */
    delegate_since?: number;
}

export function ValidatorDelegatorFromJSON(json: any): ValidatorDelegator {
    return ValidatorDelegatorFromJSONTyped(json, false);
}

export function ValidatorDelegatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorDelegator {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'account_id': !exists(json, 'account_id') ? undefined : json['account_id'],
        'escrow_amount': !exists(json, 'escrow_amount') ? undefined : json['escrow_amount'],
        'delegate_since': !exists(json, 'delegate_since') ? undefined : json['delegate_since'],
    };
}

export function ValidatorDelegatorToJSON(value?: ValidatorDelegator | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'account_id': value.account_id,
        'escrow_amount': value.escrow_amount,
        'delegate_since': value.delegate_since,
    };
}
