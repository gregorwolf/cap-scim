/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'BulkApi'.
 * This API is part of the 'IdDS_SCIM' service.
 */
export const BulkApi = {
  /**
   * Executes multiple create, update and delete operations for users and groups in single request.
   * ## Limitations:
   *   - `failsOnErrors` attribute is not supported.
   *   - Maximum number of bulk operation per request is `100`
   *   - Cross-references of new resources in and across operations is not allowed.
   *     Each bulk operation should be independent
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  bulk: (body: any | undefined) =>
    new OpenApiRequestBuilder<any>('post', '/Bulk', {
      body
    })
};
