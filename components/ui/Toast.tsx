import type { ReactNode } from 'react';

export function ToastProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function useToast() {
  return {
    toast: (_message?: string, _type?: string) => undefined,
  };
}
