import { ArrowLeft, Building2, CreditCard, Mail, Phone, ReceiptText, TrendingUp } from 'lucide-react';
import { PageHeader, StatusBadge } from '@/components/ui';

const customerData: Record<string, {
  name: string;
  type: string;
  status: 'Active' | 'Watch' | 'At risk';
  contact: string;
  email: string;
  phone: string;
  totalBilled: string;
  outstanding: string;
  openQuotes: number;
  lastPayment: string;
  invoices: Array<{ id: string; total: string; status: string; date: string }>;
  quotes: Array<{ id: string; total: string; status: string; date: string }>;
}> = {
  'cust-101': {
    name: 'Northwind Labs',
    type: 'SaaS',
    status: 'Active',
    contact: 'Amelia Ross',
    email: 'amelia@northwindlabs.com',
    phone: '+1 (415) 320-4412',
    totalBilled: '$124,800',
    outstanding: '$8,740',
    openQuotes: 2,
    lastPayment: 'May 18, 2026',
    invoices: [
      { id: 'INV-1042', total: '$4,250', status: 'Paid', date: 'May 18, 2026' },
      { id: 'INV-1039', total: '$7,980', status: 'Paid', date: 'May 05, 2026' },
      { id: 'INV-1027', total: '$5,300', status: 'Paid', date: 'Apr 24, 2026' },
    ],
    quotes: [
      { id: 'Q-2841', total: '$11,400', status: 'Approved', date: 'May 22, 2026' },
      { id: 'Q-2798', total: '$2,750', status: 'Draft', date: 'May 10, 2026' },
    ],
  },
  'cust-102': {
    name: 'Solstice Build',
    type: 'Construction',
    status: 'Watch',
    contact: 'Marcus Lee',
    email: 'marcus@solsticebuild.com',
    phone: '+1 (415) 255-9192',
    totalBilled: '$92,500',
    outstanding: '$16,200',
    openQuotes: 3,
    lastPayment: 'May 06, 2026',
    invoices: [
      { id: 'INV-1041', total: '$2,980', status: 'Due in 3 days', date: 'May 15, 2026' },
      { id: 'INV-1035', total: '$6,310', status: 'Paid', date: 'Apr 28, 2026' },
      { id: 'INV-1018', total: '$3,950', status: 'Paid', date: 'Apr 06, 2026' },
    ],
    quotes: [
      { id: 'Q-2819', total: '$9,120', status: 'Pending', date: 'May 09, 2026' },
      { id: 'Q-2785', total: '$5,460', status: 'Approved', date: 'Apr 27, 2026' },
    ],
  },
  'cust-103': {
    name: 'Aster & Co',
    type: 'Professional Services',
    status: 'At risk',
    contact: 'Rachel Kim',
    email: 'rachel@asterco.com',
    phone: '+1 (415) 512-6710',
    totalBilled: '$236,300',
    outstanding: '$42,700',
    openQuotes: 4,
    lastPayment: 'Apr 14, 2026',
    invoices: [
      { id: 'INV-1038', total: '$8,900', status: 'Overdue', date: 'Apr 30, 2026' },
      { id: 'INV-1029', total: '$13,200', status: 'Overdue', date: 'Apr 05, 2026' },
      { id: 'INV-1012', total: '$10,650', status: 'Paid', date: 'Mar 21, 2026' },
    ],
    quotes: [
      { id: 'Q-2862', total: '$18,950', status: 'Pending', date: 'May 24, 2026' },
      { id: 'Q-2792', total: '$7,820', status: 'Approved', date: 'May 05, 2026' },
    ],
  },
  'cust-104': {
    name: 'Harbor Retail',
    type: 'Retail',
    status: 'Active',
    contact: 'Derek Shaw',
    email: 'derek@harborretail.io',
    phone: '+1 (415) 680-1410',
    totalBilled: '$48,750',
    outstanding: '$1,640',
    openQuotes: 1,
    lastPayment: 'May 20, 2026',
    invoices: [
      { id: 'INV-1036', total: '$1,640', status: 'Paid', date: 'May 20, 2026' },
      { id: 'INV-1026', total: '$2,310', status: 'Paid', date: 'Apr 14, 2026' },
      { id: 'INV-1014', total: '$6,900', status: 'Paid', date: 'Mar 29, 2026' },
    ],
    quotes: [
      { id: 'Q-2820', total: '$3,500', status: 'Approved', date: 'May 18, 2026' },
    ],
  },
  'cust-105': {
    name: 'BluePeak Ventures',
    type: 'Finance',
    status: 'Active',
    contact: 'Nina Patel',
    email: 'nina@bluepeak.vc',
    phone: '+1 (415) 844-3207',
    totalBilled: '$180,600',
    outstanding: '$9,240',
    openQuotes: 2,
    lastPayment: 'May 17, 2026',
    invoices: [
      { id: 'INV-1040', total: '$5,520', status: 'Paid', date: 'May 17, 2026' },
      { id: 'INV-1028', total: '$11,420', status: 'Paid', date: 'Apr 19, 2026' },
      { id: 'INV-1015', total: '$8,970', status: 'Paid', date: 'Mar 26, 2026' },
    ],
    quotes: [
      { id: 'Q-2854', total: '$15,700', status: 'Approved', date: 'May 21, 2026' },
      { id: 'Q-2807', total: '$4,650', status: 'Draft', date: 'May 06, 2026' },
    ],
  },
};

const toneMap: Record<string, string> = {
  Active: 'green',
  Watch: 'amber',
  'At risk': 'red',
};

export function CustomerProfile({
  customerId,
  onBack,
  onViewInvoice,
  onViewQuote,
}: {
  customerId: string;
  onBack: () => void;
  onViewInvoice: (id: string) => void;
  onViewQuote: (id: string) => void;
}) {
  const customer = customerData[customerId] ?? customerData['cust-101'];

  return (
    <div className="space-y-6">
      <PageHeader
        title={customer.name}
        subtitle={`${customer.type} • ${customer.contact}`}
        actions={
          <button className="btn-secondary inline-flex items-center gap-2" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        }
      />

      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge tone={toneMap[customer.status] || 'slate'}>{customer.status}</StatusBadge>
        <span className="text-sm text-slate-500">Customer ID: {customerId}</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">Total billed</div>
            <CreditCard className="h-4 w-4 text-slate-400" />
          </div>
          <div className="mt-3 text-2xl font-bold text-slate-900">{customer.totalBilled}</div>
        </div>

        <div className="card p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">Outstanding</div>
            <TrendingUp className="h-4 w-4 text-slate-400" />
          </div>
          <div className="mt-3 text-2xl font-bold text-slate-900">{customer.outstanding}</div>
        </div>

        <div className="card p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">Open quotes</div>
            <ReceiptText className="h-4 w-4 text-slate-400" />
          </div>
          <div className="mt-3 text-2xl font-bold text-slate-900">{customer.openQuotes}</div>
        </div>

        <div className="card p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">Last payment</div>
            <Building2 className="h-4 w-4 text-slate-400" />
          </div>
          <div className="mt-3 text-2xl font-bold text-slate-900">{customer.lastPayment}</div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr_1.1fr]">
        <div className="card p-5">
          <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
          <div className="mt-4 space-y-4 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-4 w-4 text-slate-400" />
              <span>{customer.name}</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-slate-400" />
              <span>{customer.email}</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-slate-400" />
              <span>{customer.phone}</span>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Invoices</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700" onClick={() => onViewInvoice(customerId)}>
              View all
            </button>
          </div>
          <div className="space-y-3">
            {customer.invoices.map((invoice) => (
              <button
                key={invoice.id}
                onClick={() => onViewInvoice(invoice.id)}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left transition hover:border-blue-200 hover:bg-blue-50"
              >
                <div>
                  <div className="font-medium text-slate-800">{invoice.id}</div>
                  <div className="text-xs text-slate-500">{invoice.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-slate-900">{invoice.total}</div>
                  <div className="text-xs text-slate-500">{invoice.status}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Quotes</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700" onClick={() => onViewQuote(customerId)}>
              View all
            </button>
          </div>
          <div className="space-y-3">
            {customer.quotes.map((quote) => (
              <button
                key={quote.id}
                onClick={() => onViewQuote(quote.id)}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left transition hover:border-blue-200 hover:bg-blue-50"
              >
                <div>
                  <div className="font-medium text-slate-800">{quote.id}</div>
                  <div className="text-xs text-slate-500">{quote.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-slate-900">{quote.total}</div>
                  <div className="text-xs text-slate-500">{quote.status}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
