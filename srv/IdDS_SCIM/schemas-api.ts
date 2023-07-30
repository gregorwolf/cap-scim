/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'SchemasApi'.
 * This API is part of the 'IdDS_SCIM' service.
 */
export const SchemasApi = {
  /**
   * Retrieves a list of all schemas with all permitted attributes and their characteristics.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSchemas: () => new OpenApiRequestBuilder<any>('get', '/Schemas'),
  /**
   * When creating a schema, `id`, `name`, `attributes` and `schemas` attributes are required.
   * You can create up to 20 custom schemas, each of it containing a maximum number of 20 custom attributes
   * based on the supported data types.
   * The ID of the custom schema and the name of the custom attributes should not exceed 20 characters
   * (alphanumeric and underscore) without counting the prefix of the custom schema.
   *
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSchema: (body: any | undefined) =>
    new OpenApiRequestBuilder<any>('post', '/Schemas', {
      body
    }),
  /**
   * Retrieves a specific schema by schema URN.
   * @param id - The ID of the schema to be retrieved.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSchema: (id: string) =>
    new OpenApiRequestBuilder<any>('get', '/Schemas/{id}', {
      pathParameters: { id }
    }),
  /**
   * Deletes a specific schema by schema URN.
   * @param id - The ID of the custom schema to be deleted.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteSchema: (id: string) =>
    new OpenApiRequestBuilder<any>('delete', '/Schemas/{id}', {
      pathParameters: { id }
    })
};
