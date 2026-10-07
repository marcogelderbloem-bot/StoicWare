export function CustomersPage({ onViewCustomer }: { onViewCustomer: (id: string) => void }) {
  return <div className="card p-6"><h2 className="text-xl font-semibold">Customers</h2><button className="btn-primary mt-4" onClick={() => onViewCustomer('demo')}>Open customer</button></div>;
}
