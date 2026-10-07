import { ArrowRight, Building2, CreditCard, Mail, Phone, Search, UserPlus } from 'lucide-react';
import { PageHeader, StatusBadge } from '@/components/ui';

const customers = [
  { id: 'cust-101', name: 'Northwind Labs', type: 'SaaS', status: 'Active', value: '$28.4k', contact: 'Amelia Ross', email: 'amelia@northwindlabs.com', phone: '+1 (415) 320-4412' },
  { id: 'cust-102', name: 'Solstice Build', type: 'Construction', status: 'Watch', value: '$16.2k', contact: 'Marcus Lee', email: 'marcus@solsticebuild.com', phone: '+1 (415) 255-9192' },
  { id: 'cust-103', name: 'Aster & Co', type: 'Professional Services', status: 'At risk', value: '$42.7k', contact: 'Rachel Kim', email: 'rachel@asterco.com', phone: '+1 (415) 512-6710' },
  { id: 'cust-104', name: 'Harbor Retail', type: 'Retail', status: 'Active', value: '$9.8k', contact: 'Derek Shaw', email: 'derek@harborretail.io', phone: '+1 (415) 680-1410' },
  { id: 'cust-105', name: 'BluePeak Ventures', type: 'Finance', status: 'Active', value: '$33.9k', contact: 'Nina Patel', email: 'nina@bluepeak.vc', phone: '+1 (415) 844-3207' },
];

const toneMap: Record<string, string> = {
  Active: 'green',
  Watch: 'amber',
  'At risk': 'red',
};

export function CustomersPage({ onViewCustomer }: { onViewCustomer: (id: string) => void }) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Customers"
        subtitle="Manage active clients, upcoming renewals, and account health"
        actions={
          <button className="btn-primary inline-flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add customer
          </button>
        }
      />

      <div className="card p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-300"
              placeholder="Search customers"
            />
          </div>
          <div className="text-sm text-slate-500">{customers.length} active accounts</div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.08em] text-slate-500">
              <tr>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Value</th>
                <th className="px-5 py-3 font-medium">Last contact</th>
                <th className="px-5 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-t border-slate-200 text-sm text-slate-700">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-700">
                        {customer.name
                          .split(' ')
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{customer.name}</div>
                        <div className="text-xs text-slate-500">{customer.contact}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">{customer.type}</td>
                  <td className="px-5 py-4">
                    <StatusBadge tone={toneMap[customer.status] || 'slate'}>{customer.status}</StatusBadge>
                  </td>
                  <td className="px-5 py-4 font-medium text-slate-900">{customer.value}</td>
                  <td className="px-5 py-4">{customer.email}</td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => onViewCustomer(customer.id)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      View profile
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
