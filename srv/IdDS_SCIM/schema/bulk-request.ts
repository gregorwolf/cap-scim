/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BulkRequestOperation } from './bulk-request-operation';
/**
 * Representation of the 'BulkRequest' schema.
 */
export type BulkRequest =
  | {
      /**
       * The body of each request MUST contain the "schemas" attribute with the URI value of "urn:ietf:params:scim:api:messages:2.0:BulkRequest"
       */
      schemas: 'urn:ietf:params:scim:api:messages:2.0:BulkRequest'[];
      /**
       * Sequence of operations that create, modify or delete resource
       */
      Operations: BulkRequestOperation[];
    }
  | Record<string, any>;
