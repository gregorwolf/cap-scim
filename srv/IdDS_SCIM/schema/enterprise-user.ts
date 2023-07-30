/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Manager } from './manager';
/**
 * Representation of the 'EnterpriseUser' schema.
 */
export type EnterpriseUser =
  | {
      division?: string;
      costCenter?: string;
      organization?: string;
      department?: string;
      employeeNumber?: string;
      manager?: Manager;
    }
  | Record<string, any>;
