/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'PhoneNumber' schema.
 */
export type PhoneNumber =
  | {
      type: 'work' | 'mobile' | 'other';
      value: string;
      display?: string;
      primary?: boolean;
    }
  | Record<string, any>;
