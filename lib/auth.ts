import type { ReactNode } from 'react';

export function useAuth() {
  return {
    user: null,
    loading: false,
    needsCompanySetup: false,
    company: null,
    profile: null,
    signOut: async () => {},
    hasRole: () => true,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
