/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PatchOperation } from './patch-operation';
/**
 * Representation of the 'PatchBody' schema.
 * @example {
 *   "schemas": [
 *     "urn:ietf:params:scim:api:messages:2.0:PatchOp"
 *   ],
 *   "Operations": [
 *     {
 *       "op": "add",
 *       "value": {
 *         "emails": [
 *           {
 *             "value": "john.smith@sap.com",
 *             "type": "home"
 *           }
 *         ]
 *       }
 *     }
 *   ]
 * }
 */
export type PatchBody =
  | {
      /**
       * The body of each request MUST contain the "schemas" attribute with the URI value of "urn:ietf:params:scim:api:messages:2.0:PatchOp"
       */
      schemas: 'urn:ietf:params:scim:api:messages:2.0:PatchOp'[];
      Operations: PatchOperation[];
    }
  | Record<string, any>;
