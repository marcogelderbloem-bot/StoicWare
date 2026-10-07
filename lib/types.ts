export type UserRole = 'owner' | 'admin' | 'sales' | 'accounts' | 'delivery';

export type Customer = {
  id: string;
  customer_code?: string;
  company_name: string;
  contact_person?: string;
  email?: string;
  telephone?: string;
  mobile?: string;
  physical_address?: string;
  postal_address?: string;
  vat_number?: string;
  registration_number?: string;
  payment_terms?: number;
  notes?: string;
  is_active?: boolean;
};

export type Quote = Record<string, unknown>;
export type Invoice = Record<string, unknown>;
export type Payment = Record<string, unknown>;
export type DeliveryNote = Record<string, unknown>;
export type AuditLog = Record<string, unknown>;

export const emptyCustomer = {} as Customer;
