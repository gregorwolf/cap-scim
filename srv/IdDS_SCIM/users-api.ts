/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'UsersApi'.
 * This API is part of the 'IdDS_SCIM' service.
 */
export const UsersApi = {
  /**
   * Retrieves a list of users. Filter and paging parameters can be combined.
   * @param queryParameters - Object containing the following keys: filter, startId, startIndex, count, attributes, excludedAttributes.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getUsers: (queryParameters?: {
    filter?: string;
    startId?: string;
    startIndex?: string;
    count?: number;
    attributes?: string;
    excludedAttributes?: string;
  }) =>
    new OpenApiRequestBuilder<any>('get', '/Users', {
      queryParameters
    }),
  /**
   * When creating a user, `schemas`, `userName` and `emails` attributes are required. A user must have a unique userName and primary email address. Depending on the Logon Alias configuration, the emails.value, userName and displayName attributes can be required or optional, and unique or non-unique. When you create a user, if one or more of these attributes are configured required and unique, the request payload must contain the respective attributes. <br><br> `Note :` If you want to assign group to a user then you should use groups end point. <br><br> `Note :` The status attribute in the SAP extension schema is consistent with the attribute active in the core schema. It supports the following values: "new", "active", "inactive". When you create  a user with attribute status, you should know that it needs to be synchronized with the attribute active. For example, if you create a user with status "new" or "inactive", the active attribute in the core schema must be false. Similarly, if the user will be with status "active", the active attribute must be true. <br><br> `Note :` When you create a user and the `sendMail` attribute from the extension schema is provided to the request body with value true, it means that you will receive an activation e-mail for the user. Also, if `targetUrl` is provided, but `sendMail` is false, the `targetUrl` value is ignored. <br><br> `Note :` The following attributes: salutations , functions , departments , relationships , industries , languages , countries are called master data attributes and have canonical values. The specific values for these attributes can be found on `<tenantUrl>/service/md/<attribute>` <br><br> `Note :` The `emails.value` subAttribute supports the following characters:
   *   * uppercase and lowercase Latin letters
   *   * digits from 0 to 9
   *   * special characters !#$%&'*+-/=?^_`{|}~
   *   * . - cannot be first or last character, or two or more consecutively, unless surrounded by quotation marks.
   *   * space and the "(),:;<>@[\] characters can be used only if surrounded by quotation marks. The \ or " must be preceded by \
   *
   * <br><br> `Note :` The following characters: <, >, : are not allowed for `name.givenName`, `name.familyName` and displayName
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createUser: (body: any | undefined) =>
    new OpenApiRequestBuilder<any>('post', '/Users', {
      body
    }),
  /**
   * Retrieves a specific user by id.
   * @param id - The ID of the user to be retrieved.
   * @param queryParameters - Object containing the following keys: attributes, excludedAttributes.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getUser: (
    id: string,
    queryParameters?: { attributes?: string; excludedAttributes?: string }
  ) =>
    new OpenApiRequestBuilder<any>('get', '/Users/{id}', {
      pathParameters: { id },
      queryParameters
    }),
  /**
   * Updates a user by **replacing** its attributes. In case not provided - all non mandatory attributes will be **erased**. <br><br> `Note :` If you want to update user groups then you should use groups end point
   * @param id - The ID of the user to be updated.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateUser: (id: string, body: any | undefined) =>
    new OpenApiRequestBuilder<any>('put', '/Users/{id}', {
      pathParameters: { id },
      body
    }),
  /**
   * Updates one or more attributes of a user. Depending on the Logon Alias configuration, the e-mail, loginName and displayName attributes can be required or optional and unique or non-unique. When you update a user, if one or more of these attributes are configured as required and unique, the request payload must contains the respective attributes. If you want to execute a patch request, including replace operation for the emails, the choice of the email's primary field value which is passed to the patchbody, is significant. In case that you are passing an email with missing primary value through the replace operation or it is false, it will be set automatically to true. Also, if the emails in the patchbody are more than one and for each of them the primary value is missing or it is false, the last email's primary will be set to true and the others will be set to false. However, if you set one of the emails primary to true, all other emails primary value will be set automatically to false. For the phone attribute, only unique field can be changed. If it is enabled, we can't create or edit a user with phone number that already exists.
   * @param id - The ID of the user to be patched.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  patchUser: (id: string, body: any | undefined) =>
    new OpenApiRequestBuilder<any>('patch', '/Users/{id}', {
      pathParameters: { id },
      body
    }),
  /**
   * Deletes a specific user by id and all his membership assignments.
   * @param id - The ID of the user to be deleted.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteUser: (id: string) =>
    new OpenApiRequestBuilder<any>('delete', '/Users/{id}', {
      pathParameters: { id }
    })
};
