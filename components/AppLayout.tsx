import type { ReactNode } from 'react';
import { useAuth } from '@/lib/auth';

export type PageKey = 'dashboard' | 'customers' | 'products' | 'quotes' | 'invoices' | 'payments' | 'delivery-notes' | 'statements' | 'reports' | 'notifications' | 'audit' | 'settings';

export function AppLayout({ current, onNavigate, children }: { current: PageKey; onNavigate: (page: PageKey) => void; children: ReactNode }) {
  const { profile, company, signOut, hasRole } = useAuth();
  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="border-r border-slate-200 bg-white p-4">
        <div className="mb-4 text-lg font-bold text-slate-900">StoicWare</div>
        <nav className="space-y-2">
          {['dashboard', 'customers', 'products', 'quotes', 'invoices', 'payments', 'delivery-notes', 'statements', 'reports', 'notifications', 'audit', 'settings'].map((page) => (
            <button
              key={page}
              onClick={() => onNavigate(page as PageKey)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm ${current === page ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              {page}
            </button>
          ))}
        </nav>
        <div className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
          {profile ? `User: ${profile.name || 'Member'}` : 'Signed in'}
          {company && <div>{company.name}</div>}
          <button className="mt-3 text-left text-red-600" onClick={signOut}>Logout</button>
        </div>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
