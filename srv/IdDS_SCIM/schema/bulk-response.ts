/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BulkResponseOperation } from './bulk-response-operation';
/**
 * Representation of the 'BulkResponse' schema.
 */
export type BulkResponse =
  | {
      /**
       * The body of each request MUST contain the "schemas" attribute with the URI value of "urn:ietf:params:scim:api:messages:2.0:BulkResponse"
       */
      schemas: 'urn:ietf:params:scim:api:messages:2.0:BulkResponse'[];
      /**
       * Sequence of operations that create, modify or delete resource
       */
      Operations: BulkResponseOperation[];
    }
  | Record<string, any>;
