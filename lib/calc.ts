export const formatCurrency = (value: number | string) => `$${Number(value || 0).toLocaleString()}`;
export const formatCurrencyShort = (value: number | string) => `$${Number(value || 0).toLocaleString()}`;
export const formatDate = (value: string | Date) => (value ? new Date(value).toLocaleDateString() : '-');
export const daysOverdue = (value: string | Date) => Math.max(0, Math.ceil((Date.now() - new Date(value).getTime()) / 86400000));
