/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PatchOperationValue } from './patch-operation-value';
/**
 * Representation of the 'PatchOperation' schema.
 */
export type PatchOperation =
  | {
      /**
       * Indicates the operation to perform.
       */
      op: 'add' | 'remove' | 'replace';
      /**
       * An attribute path describing the target of the operation.
       * @example "name.familyName"
       */
      path?: string;
      value?: PatchOperationValue;
    }
  | Record<string, any>;
