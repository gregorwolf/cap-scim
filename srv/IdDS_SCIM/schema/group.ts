/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Meta } from './meta';
import type { GroupMember } from './group-member';
import type { GroupExtension } from './group-extension';
/**
 * Representation of the 'Group' schema.
 */
export type Group =
  | {
      id?: string;
      meta?: Meta;
      /**
       * @example [
       *   "urn:ietf:params:scim:schemas:core:2.0:Group"
       * ]
       */
      schemas?: string[];
      /**
       * @example "Administrators"
       */
      displayName?: string;
      members?: GroupMember[];
      /**
       * Unique and global identifier for the given group, see also RFC 7643, chapter 3.1 and Technology Guideline 16, requirement 3.
       */
      externalId?: string;
      'urn:sap:cloud:scim:schemas:extension:custom:2.0:Group'?: GroupExtension;
    }
  | Record<string, any>;
