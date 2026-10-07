export function PaymentsPage({ preselectedInvoiceId, onPrintReceipt }: { preselectedInvoiceId?: string; onPrintReceipt: (paymentId: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Payments</h2>{preselectedInvoiceId && <p>Invoice: {preselectedInvoiceId}</p>}</div>;
}
