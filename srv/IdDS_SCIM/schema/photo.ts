/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Photo' schema.
 */
export type Photo =
  | {
      type: 'photo' | 'thumbnail';
      value: string;
      display?: string;
      primary?: boolean;
    }
  | Record<string, any>;
