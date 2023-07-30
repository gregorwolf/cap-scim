/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'BulkRequestOperation' schema.
 */
export type BulkRequestOperation =
  | {
      /**
       * The HTTP method of the current operation.
       */
      method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
      /**
       * The transient identifier of a newly created resource, unique within a bulk request and created by the client.  The bulkId serves as a surrogate resource id enabling clients to uniquely identify newly created resources in the response.
       */
      bulkId: string;
      /**
       * The resource's relative path to the SCIM root If "method" is `POST`, the value must specify a resource type endpoint, e.g., *\*\/Users** or *\*\/Groups**, whereas all other `method` values must specify the path to a specific resource, e.g., *\*\/Users/2819c223-7f76-453a-919d-413861904646**.
       */
      path: string;
      /**
       * the version of the resource
       */
      version?: string;
      /**
       * The resource data as it would appear for a single `POST`, `PUT`, or `PATCH` operation.  REQUIRED in a request when "method" is `POST`, `PUT`, or `PATCH`
       */
      data?: Record<string, any>;
    }
  | Record<string, any>;
