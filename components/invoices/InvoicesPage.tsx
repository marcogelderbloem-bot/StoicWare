export function InvoicesPage({ onNewInvoice, onViewInvoice }: { onNewInvoice: () => void; onViewInvoice: (id: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Invoices</h2><button className="btn-primary mt-4" onClick={onNewInvoice}>New invoice</button></div>;
}
