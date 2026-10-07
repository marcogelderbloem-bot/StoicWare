export function InvoiceEditor({ invoiceId, onBack, onSaved }: { invoiceId?: string | null; onBack: () => void; onSaved: (id: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Invoice editor</h2><button className="btn-secondary mt-4" onClick={onBack}>Back</button></div>;
}
