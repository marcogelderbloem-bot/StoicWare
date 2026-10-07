export function CustomerProfile({ customerId, onBack, onViewInvoice, onViewQuote }: { customerId: string; onBack: () => void; onViewInvoice: (id: string) => void; onViewQuote: (id: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Customer profile: {customerId}</h2><button className="btn-secondary mt-4" onClick={onBack}>Back</button></div>;
}
