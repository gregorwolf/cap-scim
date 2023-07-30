/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'PasswordDetails' schema.
 */
export type PasswordDetails =
  | {
      /**
       * Format: "date-time".
       */
      loginTime?: string;
      failedLoginAttempts?: number;
      /**
       * Format: "date-time".
       */
      setTime?: string;
      status?: string;
      /**
       * Format: "date-time".
       */
      passwordLockedTime?: string;
      policy?: string;
    }
  | Record<string, any>;
