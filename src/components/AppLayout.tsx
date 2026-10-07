import type { ReactNode } from 'react';
import { useAuth } from '@/lib/auth';

export type PageKey =
  | 'dashboard'
  | 'customers'
  | 'products'
  | 'quotes'
  | 'invoices'
  | 'payments'
  | 'delivery-notes'
  | 'statements'
  | 'reports'
  | 'notifications'
  | 'audit'
  | 'settings';

const navItems: { key: PageKey; label: string }[] = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'customers', label: 'Customers' },
  { key: 'products', label: 'Products' },
  { key: 'quotes', label: 'Quotes' },
  { key: 'invoices', label: 'Invoices' },
  { key: 'payments', label: 'Payments' },
  { key: 'delivery-notes', label: 'Delivery Notes' },
  { key: 'statements', label: 'Statements' },
  { key: 'reports', label: 'Reports' },
  { key: 'notifications', label: 'Notifications' },
  { key: 'audit', label: 'Audit Log' },
  { key: 'settings', label: 'Settings' },
];

export function AppLayout({ current, onNavigate, children }: { current: PageKey; onNavigate: (page: PageKey) => void; children: ReactNode }) {
  const { profile, company, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex min-h-screen">
        <aside className="w-full max-w-[260px] border-r border-slate-200 bg-white/80 backdrop-blur-sm">
          <div className="flex h-full flex-col p-4">
            <div className="mb-8 flex items-center gap-3 px-2 pt-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-200">
                SW
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">StoicWare</div>
                <div className="text-xs text-slate-500">Business OS</div>
              </div>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const active = item.key === current;
                return (
                  <button
                    key={item.key}
                    onClick={() => onNavigate(item.key)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                      active
                        ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-blue-600" />}
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div className="text-xs uppercase tracking-[0.12em] text-slate-400">Account</div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-800">{profile?.name || 'Demo Admin'}</div>
                  <div className="text-xs text-slate-500">{company?.name || 'StoicWare Demo'}</div>
                </div>
                <button onClick={signOut} className="text-xs font-medium text-red-600 hover:text-red-700">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
