export function DocumentPrint({ type, recordId, onClose }: { type: string; recordId: string; extraData?: Record<string, string | undefined>; onClose: () => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Print preview: {type} {recordId}</h2><button className="btn-secondary mt-4" onClick={onClose}>Close</button></div>;
}
