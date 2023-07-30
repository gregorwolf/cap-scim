/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'CreateUser' schema.
 */
export type CreateUser =
  | {
      /**
       * external unique resource ID defined by provisioning client
       */
      externalId?: '34F578JK';
      /**
       * @example [
       *   "urn:ietf:params:scim:schemas:core:2.0:User",
       *   "urn:ietf:params:scim:schemas:extension:sap:2.0:User",
       *   "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"
       * ]
       */
      schemas: string[];
      userName: 'John';
      password?: 'Abcd1234';
      name:
        | {
            familyName: 'Smith';
            givenName: 'Johny';
            formatted?: 'Mr. John Smith I';
            middleName?: 'Gilbert';
            honorificPrefix?: 'Mr.';
            honorificSuffix?: 'II';
          }
        | Record<string, any>;
      displayName?: 'Mr. John';
      nickName?: 'Johny10';
      profileUrl?: 'https://www.google.com/john.smith';
      title?: 'Software Developer';
      /**
       * Specifies the type of the user. The allowed values are "public",  "partner", "customer", "external", "onboardee" or "employee".
       */
      userType?: 'Employee';
      preferredLanguage?: 'English';
      locale?: 'EN';
      timezone?: 'Europe/Sofia';
      active?: boolean;
      emails:
        | {
            type: 'work' | 'home' | 'other';
            value: 'john.smith@sap-test.de';
            display?: 'john.smith';
            primary?: boolean;
          }
        | Record<string, any>[];
      phoneNumbers?:
        | {
            type: 'work' | 'mobile' | 'other';
            value: '555-555-5555';
            display?: "John's phone";
            primary?: boolean;
          }
        | Record<string, any>[];
      photos?:
        | {
            type: 'photo' | 'thumbnail';
            value: 'https://www.facebook.com/john.smith';
            display?: 'J.Smith';
            primary?: boolean;
          }
        | Record<string, any>[];
      addresses?:
        | {
            formatted?: '8 Europa Str.';
            primary?: boolean;
            country?: 'BG';
            locality?: 'Sofia';
            postalCode?: '1000';
            region?: 'SA';
            streetAddress?: 'Europa Str.';
            type: 'work' | 'home' | 'other';
          }
        | Record<string, any>[];
      entitlements?:
        | {
            type: 'work';
            value: 'random';
            primary?: boolean;
          }
        | Record<string, any>[];
      roles?:
        | {
            type: 'Read Users';
            value: 'random';
            primary?: boolean;
          }
        | Record<string, any>[];
      'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'?:
        | {
            division?: 'IDS';
            costCenter?: '4130';
            organization?: 'IDStore';
            department?: 'Administration';
            employeeNumber?: '701984';
            manager?:
              | {
                  displayName?: 'Manager';
                  value?: '30ac69fe-5155-4d7f-8830-e9af6bf3e573';
                  $ref?: 'http://localhost:8080/idds/scim/v2/Users/<manager>';
                }
              | Record<string, any>;
          }
        | Record<string, any>;
      'urn:ietf:params:scim:schemas:extension:sap:2.0:User'?:
        | {
            /**
             * Format: "date-time".
             */
            loginTime?: string;
            sourceSystem?: number;
            sourceSystemId?: '000T41F12';
            /**
             * Specifies the id of the application from which the email template set is going to be chosen.
             */
            applicationId?: '74P13R08';
            /**
             * Specifies the id of the email template set which is going to be used to create an activation mail message.
             */
            emailTemplateSetId?: 'emailTemplateSetId';
            /**
             * Specifies if an activation mail should be sent.
             */
            sendMail?: boolean;
            /**
             * Specifies an application link to which an user will be redirected after account activation.
             */
            targetUrl?: 'https://google.com';
            /**
             * Specifies if the primary e-mail is verified.
             */
            mailVerified?: boolean;
            userUuid?: '30ac69fe-5155-4d7f-8830-e9af6bf3e401';
            userId?: 'P000008';
            sapUserName?: 'Random';
            /**
             * Specifies if the user is created as active, inactive or new.
             */
            status?: 'active';
            /**
             * Specifies if time-based one-time password authentication is enabled.
             */
            totpEnabled?: boolean;
            /**
             * Specifies if web authentication is enabled.
             */
            webAuthEnabled?: boolean;
            industry?: 'Banking';
            /**
             * Specifies if multi-factor authentication is enabled.
             */
            mfaEnabled?: boolean;
            contactPreferences?:
              | {
                  email?: 'true';
                  /**
                   * Specifies the contact preferences of the user. The allowed values for each preference is "yes", "no" or "unknown".
                   */
                  telephone?: 'true';
                }
              | Record<string, any>;
            socialIdentities?:
              | {
                  socialId?: '777K815BM';
                  socialProvider?: 'LINKEDIN';
                  /**
                   * Format: "date-time".
                   */
                  dateOfLinking?: string;
                }
              | Record<string, any>[];
            passwordDetails?:
              | {
                  /**
                   * Format: "date-time".
                   */
                  loginTime?: string;
                  failedLoginAttempts?: number;
                  /**
                   * Format: "date-time".
                   */
                  setTime?: string;
                  status?: 'enabled';
                  /**
                   * Format: "date-time".
                   */
                  passwordLockedTime?: string;
                  policy?: 'policy';
                }
              | Record<string, any>;
            emails?:
              | {
                  type?: 'work';
                  value?: 'john.smith@sap-test.de';
                  display?: 'john.smith';
                  primary?: boolean;
                  verified?: boolean;
                  /**
                   * Format: "date-time".
                   */
                  verifiedTime?: string;
                }
              | Record<string, any>[];
            /**
             * List of all corporate groups which the User is a member of.
             */
            corporateGroups?:
              | {
                  value?: 'admin';
                }
              | Record<string, any>[];
            /**
             * Values should be equal to the values of the phoneNumbers attribute in the user core schema when creating or updating user.
             */
            phoneNumbers?:
              | {
                  type: 'work' | 'mobile' | 'other';
                  value: '555-555-5555';
                  display?: "John's phone";
                  primary?: boolean;
                }
              | Record<string, any>[];
            /**
             * Specifies the time and date from which the user is valid.
             * Format: "date-time".
             */
            validFrom?: string;
            /**
             * Specifies the time and date to which the user is valid.
             * Format: "date-time".
             */
            validTo?: string;
          }
        | Record<string, any>;
    }
  | Record<string, any>;
