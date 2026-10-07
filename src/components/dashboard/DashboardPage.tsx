import { ArrowDownRight, ArrowUpRight, DollarSign, FileText, TrendingUp, Wallet } from 'lucide-react';
import { PageHeader, StatusBadge } from '@/components/ui';

const stats = [
  {
    label: 'Revenue this month',
    value: '$48,250',
    change: '+12.4%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    label: 'Outstanding',
    value: '$18,740',
    change: '+3.1%',
    trend: 'up',
    icon: Wallet,
  },
  {
    label: 'Paid this quarter',
    value: '$93,420',
    change: '-2.8%',
    trend: 'down',
    icon: TrendingUp,
  },
  {
    label: 'Open quotes',
    value: '28',
    change: '+6',
    trend: 'up',
    icon: FileText,
  },
];

const recentInvoices = [
  { id: 'INV-1042', customer: 'Northwind Labs', amount: '$4,250', status: 'Paid', tone: 'green' },
  { id: 'INV-1041', customer: 'Solstice Build', amount: '$2,980', status: 'Due in 3 days', tone: 'amber' },
  { id: 'INV-1038', customer: 'Aster & Co', amount: '$8,900', status: 'Overdue', tone: 'red' },
  { id: 'INV-1036', customer: 'Harbor Retail', amount: '$1,640', status: 'Paid', tone: 'green' },
];

const health = [
  { client: 'BluePeak', value: 74, label: 'Healthy' },
  { client: 'Horizon Foods', value: 58, label: 'Watch' },
  { client: 'Lumen Works', value: 31, label: 'Risk' },
];

export function DashboardPage({ onViewInvoice }: { onViewInvoice: (id: string) => void }) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        subtitle="Overview of cash flow, invoices, and customer performance"
        actions={
          <button className="btn-primary" onClick={() => onViewInvoice('INV-1042')}>
            View latest invoice
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, change, trend, icon: Icon }) => (
          <div key={label} className="card p-4">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-slate-100 p-2 text-slate-700">
                <Icon className="h-5 w-5" />
              </div>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                  trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}
              >
                {trend === 'up' ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                {change}
              </span>
            </div>
            <div className="mt-5 text-sm text-slate-500">{label}</div>
            <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Cash flow</h3>
            <StatusBadge tone="blue">Updated today</StatusBadge>
          </div>

          <div className="flex h-56 items-end gap-3 rounded-2xl bg-gradient-to-b from-blue-50 to-white p-4">
            {[38, 52, 44, 68, 62, 74, 86, 71, 94, 82, 100, 90].map((bar, index) => (
              <div key={index} className="flex-1">
                <div
                  className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400"
                  style={{ height: `${bar}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h3 className="text-lg font-semibold text-slate-900">Customer health</h3>
          <div className="mt-5 space-y-4">
            {health.map((entry) => (
              <div key={entry.client}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{entry.client}</span>
                  <span className="text-slate-500">{entry.value}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${
                      entry.value > 60 ? 'bg-emerald-500' : entry.value > 40 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${entry.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h3 className="text-lg font-semibold text-slate-900">Recent invoices</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View all</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.08em] text-slate-500">
              <tr>
                <th className="px-5 py-3 font-medium">Invoice</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-t border-slate-200 text-sm text-slate-700">
                  <td className="px-5 py-3 font-medium text-slate-900">{invoice.id}</td>
                  <td className="px-5 py-3">{invoice.customer}</td>
                  <td className="px-5 py-3">{invoice.amount}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        invoice.tone === 'green'
                          ? 'bg-emerald-100 text-emerald-700'
                          : invoice.tone === 'amber'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {invoice.status}
                    </span>
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
