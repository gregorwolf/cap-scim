/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ContactPreferences } from './contact-preferences';
import type { SocialIdentities } from './social-identities';
import type { PasswordDetails } from './password-details';
import type { ExtendedMultivalue } from './extended-multivalue';
import type { CorporateGroup } from './corporate-group';
import type { PhoneNumber } from './phone-number';
/**
 * Representation of the 'SAPExtension' schema.
 */
export type SAPExtension =
  | {
      /**
       * Format: "date-time".
       */
      loginTime?: string;
      sourceSystem?: number;
      sourceSystemId?: string;
      /**
       * Specifies the id of the application from which the email template set is going to be chosen.
       */
      applicationId?: string;
      /**
       * Specifies the id of the email template set which is going to be used to create an activation mail message.
       */
      emailTemplateSetId?: string;
      /**
       * Specifies if an activation mail should be sent.
       */
      sendMail?: boolean;
      /**
       * Specifies an application link to which an user will be redirected after account activation.
       */
      targetUrl?: string;
      /**
       * Specifies if the primary e-mail is verified.
       */
      mailVerified?: boolean;
      userUuid?: string;
      userId?: string;
      sapUserName?: string;
      /**
       * Specifies if the user is created as active, inactive or new.
       */
      status?: string;
      /**
       * Specifies if time-based one-time password authentication is enabled.
       */
      totpEnabled?: boolean;
      /**
       * Specifies if web authentication is enabled.
       */
      webAuthEnabled?: boolean;
      industry?: string;
      /**
       * Specifies if multi-factor authentication is enabled.
       */
      mfaEnabled?: boolean;
      contactPreferences?: ContactPreferences;
      socialIdentities?: SocialIdentities;
      passwordDetails?: PasswordDetails;
      /**
       * Values should be equal to the values of the emails attribute in the user core schema when creating or updating user.
       */
      emails?: ExtendedMultivalue[];
      /**
       * List of all corporate groups which the User is a member of.
       */
      corporateGroups?: CorporateGroup[];
      /**
       * Values should be equal to the values of the phoneNumbers attribute in the user core schema when creating or updating user.
       */
      phoneNumbers?: PhoneNumber[];
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
