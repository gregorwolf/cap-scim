/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ErrorResponse } from './error-response';
/**
 * Representation of the 'BulkResponseOperation' schema.
 */
export type BulkResponseOperation =
  | {
      /**
       * The HTTP method of the current operation.
       */
      method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
      /**
       * The id of the processed bulk operation
       */
      bulkId: string;
      /**
       * The resource endpoint URL. REQUIRED except in the event of a `POST` failure.
       */
      location?: string;
      /**
       * the version of the resource
       */
      version?: string;
      response?: ErrorResponse;
    }
  | Record<string, any>;
