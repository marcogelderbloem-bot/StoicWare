import { ArrowRight, Copy, FileText, Pencil, Plus, Printer, Search, Sparkles, TrendingUp } from 'lucide-react';
import { PageHeader, StatusBadge } from '@/components/ui';

const quotes = [
  { id: 'Q-2841', customer: 'Northwind Labs', date: 'May 22, 2026', total: '$11,400', status: 'Approved', tone: 'green' },
  { id: 'Q-2819', customer: 'Solstice Build', date: 'May 09, 2026', total: '$9,120', status: 'Pending', tone: 'amber' },
  { id: 'Q-2862', customer: 'Aster & Co', date: 'May 24, 2026', total: '$18,950', status: 'Pending', tone: 'amber' },
  { id: 'Q-2820', customer: 'Harbor Retail', date: 'May 18, 2026', total: '$3,500', status: 'Approved', tone: 'green' },
  { id: 'Q-2854', customer: 'BluePeak Ventures', date: 'May 21, 2026', total: '$15,700', status: 'Approved', tone: 'green' },
  { id: 'Q-2798', customer: 'Northwind Labs', date: 'May 10, 2026', total: '$2,750', status: 'Draft', tone: 'slate' },
];

export function QuotesPage({
  onNewQuote,
  onEditQuote,
  onViewQuote,
  onDuplicateQuote,
}: {
  onNewQuote: () => void;
  onEditQuote: (id: string) => void;
  onViewQuote: (id: string) => void;
  onDuplicateQuote: (id: string) => void;
}) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Quotes"
        subtitle="Track proposals, approvals, and conversion opportunities"
        actions={
          <button className="btn-primary inline-flex items-center gap-2" onClick={onNewQuote}>
            <Plus className="h-4 w-4" />
            New quote
          </button>
        }
      />

      <div className="card p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-300"
              placeholder="Search quotes"
            />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            <TrendingUp className="h-4 w-4" />
            6 active proposals
          </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.08em] text-slate-500">
              <tr>
                <th className="px-5 py-3 font-medium">Quote</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id} className="border-t border-slate-200 text-sm text-slate-700">
                  <td className="px-5 py-4 font-semibold text-slate-900">{quote.id}</td>
                  <td className="px-5 py-4">{quote.customer}</td>
                  <td className="px-5 py-4">{quote.date}</td>
                  <td className="px-5 py-4 font-medium text-slate-900">{quote.total}</td>
                  <td className="px-5 py-4">
                    <StatusBadge tone={quote.tone}>{quote.status}</StatusBadge>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900" onClick={() => onViewQuote(quote.id)}>
                        <FileText className="h-4 w-4" />
                        View
                      </button>
                      <button className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700" onClick={() => onEditQuote(quote.id)}>
                        <Pencil className="h-4 w-4" />
                        Edit
                      </button>
                      <button className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900" onClick={() => onDuplicateQuote(quote.id)}>
                        <Copy className="h-4 w-4" />
                        Duplicate
                      </button>
                    </div>
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
