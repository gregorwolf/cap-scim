/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { User } from './user';
import type { Group } from './group';
import type { Schema } from './schema';
/**
 * Representation of the 'SearchResult' schema.
 */
export type SearchResult =
  | {
      Resources?: User | Group | Schema[];
      /**
       * A list of one or more URIs which are used to indicate the SCIM schemas that define the allowed attributes for a resource.
       * @example [
       *   "urn:ietf:params:scim:api:messages:2.0:ListResponse"
       * ]
       */
      schemas?: string[];
      /**
       * Specifies the total number of results matching the query.
       * @example 100
       */
      totalResults?: number;
      /**
       * Specifies the number of query results returned in a query response. page
       * @example 3
       */
      itemsPerPage?: number;
      /**
       * The 1-based index of the first result in the current set of query results (only if parameter startIndex is used).
       * @example 1
       */
      startIndex?: number;
      /**
       * Specifies the first entry of the query result (only if parameter startId is used).
       * @example "initial"
       */
      startId?: string;
      /**
       * Specifies the next user ID (that is, the ID of the first user on the next page). For example `<user id>` or `<end>`. The `<end>` value indicates that the last user of the total number of users matching the query is returned  (only if parameter startId is used).
       * @example "x567890"
       */
      nextId?: string;
    }
  | Record<string, any>;
