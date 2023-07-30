/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Meta } from './meta';
import type { Name } from './name';
import type { Email } from './email';
import type { PhoneNumber } from './phone-number';
import type { Im } from './im';
import type { Photo } from './photo';
import type { Address } from './address';
import type { Entitlement } from './entitlement';
import type { Role } from './role';
import type { X509Certificate } from './x-509-certificate';
import type { EnterpriseUser } from './enterprise-user';
import type { SAPExtension } from './sap-extension';
/**
 * Representation of the 'User' schema.
 */
export type User =
  | {
      /**
       * unique resource ID
       */
      id?: string;
      /**
       * external unique resource ID defined by provisioning client
       */
      externalId?: string;
      meta?: Meta;
      schemas: string[];
      userName: string;
      password?: string;
      name: Name;
      displayName?: string;
      nickName?: string;
      profileUrl?: string;
      title?: string;
      /**
       * Specifies the type of the user. The allowed values are "public",  "partner", "customer", "external", "onboardee" or "employee".
       */
      userType?: string;
      preferredLanguage?: string;
      locale?: string;
      timezone?: string;
      active?: boolean;
      emails: Email[];
      phoneNumbers?: PhoneNumber[];
      ims?: Im[];
      photos?: Photo[];
      addresses?: Address[];
      entitlements?: Entitlement[];
      roles?: Role[];
      x509Certificates?: X509Certificate[];
      'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'?: EnterpriseUser;
      'urn:ietf:params:scim:schemas:extension:sap:2.0:User'?: SAPExtension;
    }
  | Record<string, any>;
