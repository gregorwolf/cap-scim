/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Meta } from './meta';
import type { Attribute } from './attribute';
/**
 * Representation of the 'Schema' schema.
 */
export type Schema =
  | {
      id?: string;
      name?: string;
      description?: string;
      meta?: Meta;
      /**
       * @example [
       *   "urn:ietf:params:scim:schemas:core:2.0:Schema"
       * ]
       */
      schemas?: string[];
      /**
       * Unique and global identifier for the given schema.
       */
      externalId?: string;
      attributes?: Attribute[];
    }
  | Record<string, any>;
