/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Attribute' schema.
 * @example {
 *   "name": "CustomDecimal",
 *   "type": "decimal",
 *   "multiValued": false,
 *   "description": "Super-secret internal system ID",
 *   "required": false,
 *   "caseExact": true,
 *   "mutability": "readWrite",
 *   "returned": "default",
 *   "uniqueness": "server"
 * }
 */
export type Attribute =
  | {
      /**
       * The attribute name. Should not exceed 20 characters (alphanumeric and underscore).
       */
      name?: string;
      /**
       * The attribute data type.
       */
      type?:
        | 'string'
        | 'boolean'
        | 'decimal'
        | 'integer'
        | 'dateTime'
        | 'binary'
        | 'reference'
        | 'complex';
      multivalued?: boolean;
      description?: string;
      required?: boolean;
      /**
       * A collection of suggested canonical values that MAY be used.
       */
      canonicalValues?: string[];
      caseExact?: boolean;
      mutability?: 'readOnly' | 'readWrite' | 'writeOnly' | 'immutable';
      returned?: 'always' | 'never' | 'default' | 'request';
      uniqueness?: 'none' | 'server' | 'global';
      /**
       * This attribute is only applicable for attributes that are of type "reference".
       */
      referenceTypes?: string[];
      subAttributes?: Attribute[];
    }
  | Record<string, any>;
