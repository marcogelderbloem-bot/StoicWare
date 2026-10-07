export function InvoiceDetail({ invoiceId, onBack, onEdit, onPrint, onRecordPayment, onCreateDeliveryNote }: { invoiceId: string; onBack: () => void; onEdit: () => void; onPrint: (id: string) => void; onRecordPayment: (invoiceId: string) => void; onCreateDeliveryNote: (invoiceId: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Invoice detail: {invoiceId}</h2></div>;
}
