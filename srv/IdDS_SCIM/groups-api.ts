/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'GroupsApi'.
 * This API is part of the 'IdDS_SCIM' service.
 */
export const GroupsApi = {
  /**
   * Retrieves a list of groups. Paging parameters are supported.
   * @param queryParameters - Object containing the following keys: filter, startId, startIndex, count, attributes, excludedAttributes.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getGroups: (queryParameters?: {
    filter?: string;
    startId?: string;
    startIndex?: string;
    count?: number;
    attributes?: string;
    excludedAttributes?: string;
  }) =>
    new OpenApiRequestBuilder<any>('get', '/Groups', {
      queryParameters
    }),
  /**
   * A group can contain users or other groups. When creating a group, `schemas` and `displayName` attributes are required. If you add members to the group, the value (UUID) attribute of the member is required, while all other attributes of the member are optional.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createGroup: (body: any | undefined) =>
    new OpenApiRequestBuilder<any>('post', '/Groups', {
      body
    }),
  /**
   * Retrieves a group by id.
   * @param id - The ID of the group to be retrieved.
   * @param queryParameters - Object containing the following keys: attributes, excludedAttributes.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getGroup: (
    id: string,
    queryParameters?: { attributes?: string; excludedAttributes?: string }
  ) =>
    new OpenApiRequestBuilder<any>('get', '/Groups/{id}', {
      pathParameters: { id },
      queryParameters
    }),
  /**
   * Updates a group by replacing its existing attributes.
   * @param id - The ID of the group to be updated.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateGroup: (id: string, body: any | undefined) =>
    new OpenApiRequestBuilder<any>('put', '/Groups/{id}', {
      pathParameters: { id },
      body
    }),
  /**
   * Updates one or more attributes of a group. If attribute, provided in path is non-qualified, then it will be qualified only with Group resource core schema urn:ietf:params:scim:schemas:core:2.0:Group. In case you want to add a group member through add operation, you need to provide the id of the user as a value of the relevant field in the patchbody.
   * @param id - The ID of the group to be patched.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  patchGroup: (id: string, body: any | undefined) =>
    new OpenApiRequestBuilder<any>('patch', '/Groups/{id}', {
      pathParameters: { id },
      body
    }),
  /**
   * Deletes a group by id and revoke all its member assignments.
   * @param id - The ID of the group to be deleted.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteGroup: (id: string) =>
    new OpenApiRequestBuilder<any>('delete', '/Groups/{id}', {
      pathParameters: { id }
    })
};
