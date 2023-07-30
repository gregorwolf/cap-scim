/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * resource metadata
 */
export type Meta =
  | {
      /**
       * Format: "date-time".
       */
      created?: string;
      /**
       * Format: "date-time".
       */
      lastModified?: string;
      /**
       * resource location URI
       */
      location?: string;
      resourceType?: 'User' | 'Group' | 'Schema';
      version?: string;
    }
  | Record<string, any>;
