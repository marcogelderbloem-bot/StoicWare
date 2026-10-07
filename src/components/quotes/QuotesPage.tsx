export function QuotesPage({ onNewQuote, onEditQuote, onViewQuote, onDuplicateQuote }: { onNewQuote: () => void; onEditQuote: (id: string) => void; onViewQuote: (id: string) => void; onDuplicateQuote: (id: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Quotes</h2><button className="btn-primary mt-4" onClick={onNewQuote}>New quote</button></div>;
}
