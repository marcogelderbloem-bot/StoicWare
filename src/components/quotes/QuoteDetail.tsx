export function QuoteDetail({ quoteId, onBack, onEdit, onDuplicate, onPrint, onConverted }: { quoteId: string; onBack: () => void; onEdit: () => void; onDuplicate: () => void; onPrint: (id: string) => void; onConverted: (invoiceId: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Quote detail: {quoteId}</h2></div>;
}
