import type { ComponentType, ReactNode } from 'react';

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      {actions}
    </div>
  );
}

export function Spinner({ className = 'h-5 w-5' }: { className?: string }) {
  return <div className={`animate-spin rounded-full border-2 border-slate-200 border-t-blue-600 ${className}`} />;
}

export function EmptyState({ title, description, icon: Icon }: { title: string; description?: string; icon?: ComponentType<{ className?: string }> }) {
  return (
    <div className="card flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
      {Icon && <Icon className="h-8 w-8 text-slate-400" />}
      <div className="text-lg font-semibold text-slate-800">{title}</div>
      {description && <p className="max-w-md text-sm text-slate-500">{description}</p>}
    </div>
  );
}

export function StatusBadge({ children, tone = 'slate' }: { children: ReactNode; tone?: string }) {
  const tones: Record<string, string> = {
    slate: 'bg-slate-100 text-slate-700',
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
    blue: 'bg-blue-100 text-blue-700',
  };
  return <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${tones[tone] || tones.slate}`}>{children}</span>;
}

export function LoadingPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <Spinner className="mx-auto mb-4 h-8 w-8" />
        <p className="text-slate-600">Loading...</p>
      </div>
    </div>
  );
}
