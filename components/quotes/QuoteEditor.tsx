export function QuoteEditor({ quoteId, duplicateFromId, onBack, onSaved }: { quoteId?: string | null; duplicateFromId?: string | null; onBack: () => void; onSaved: (id: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Quote editor</h2><button className="btn-secondary mt-4" onClick={onBack}>Back</button></div>;
}
