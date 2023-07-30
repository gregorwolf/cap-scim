/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'GroupMember' schema.
 */
export type GroupMember =
  | {
      value?: string;
      type?: 'User' | 'Group';
      /**
       * @example "<path to access member>"
       */
      $ref?: string;
    }
  | Record<string, any>;
