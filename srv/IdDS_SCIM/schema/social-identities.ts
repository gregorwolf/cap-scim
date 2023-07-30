/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'SocialIdentities' schema.
 */
export type SocialIdentities =
  | {
      socialId?: string;
      socialProvider?: string;
      /**
       * Format: "date-time".
       */
      dateOfLinking?: string;
    }
  | Record<string, any>;
