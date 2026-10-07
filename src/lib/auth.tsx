import type { ReactNode } from 'react';

export type UserRole = 'owner' | 'admin' | 'sales' | 'accounts' | 'delivery';

export type AuthUser = {
  id: string;
  email: string;
  name?: string;
};

export type Company = {
  id: string;
  name: string;
};

export type Profile = {
  id: string;
  name: string;
  role: UserRole;
};

export function useAuth() {
  const user: AuthUser = {
    id: 'demo-user',
    email: 'demo@stoicware.local',
    name: 'Demo Admin',
  };

  const profile: Profile = {
    id: 'demo-user',
    name: 'Demo Admin',
    role: 'owner',
  };

  const company: Company = {
    id: 'demo-company',
    name: 'StoicWare Demo',
  };

  return {
    user,
    loading: false,
    needsCompanySetup: false,
    company,
    profile,
    signOut: async () => {},
    hasRole: (...roles: UserRole[]) => roles.includes(profile.role),
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
