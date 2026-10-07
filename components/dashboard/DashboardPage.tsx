export function DashboardPage({ onViewInvoice }: { onViewInvoice: (id: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Dashboard</h2><button className="btn-primary mt-4" onClick={() => onViewInvoice('demo')}>View invoice</button></div>;
}
