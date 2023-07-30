/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ErrorResponse' schema.
 */
export type ErrorResponse =
  | {
      /**
       * detail error message
       */
      detail?: string;
      schemas?: 'urn:ietf:params:scim:api:messages:2.0:Error'[];
      /**
       * Error Code
       * Format: "int32".
       */
      status?: number;
    }
  | Record<string, any>;
