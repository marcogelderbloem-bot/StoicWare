export function DeliveryNotesPage({ preselectedInvoiceId, onPrint }: { preselectedInvoiceId?: string; onPrint: (id: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Delivery notes</h2>{preselectedInvoiceId && <p>Invoice: {preselectedInvoiceId}</p>}</div>;
}
