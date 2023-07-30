/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ExtendedMultivalue' schema.
 */
export type ExtendedMultivalue =
  | {
      type?: string;
      value?: string;
      display?: string;
      primary?: boolean;
      verified?: boolean;
      /**
       * Format: "date-time".
       */
      verifiedTime?: string;
    }
  | Record<string, any>;
