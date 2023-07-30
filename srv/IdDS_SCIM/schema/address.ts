/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Address' schema.
 */
export type Address =
  | {
      formatted?: string;
      primary?: boolean;
      country?: string;
      locality?: string;
      postalCode?: string;
      region?: string;
      streetAddress?: string;
      type: 'work' | 'home' | 'other';
    }
  | Record<string, any>;
