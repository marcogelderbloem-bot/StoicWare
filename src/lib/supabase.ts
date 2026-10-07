type QueryResult = { data: any; error: any };

const makeResult = <T>(data: T): QueryResult => ({ data, error: null });

const from = (table: string) => ({
  select: () => ({
    eq: () => ({
      maybeSingle: async () => makeResult(null),
      order: () => ({
        limit: async () => makeResult([]),
      }),
    }),
    neq: () => ({
      order: () => ({
        limit: async () => makeResult([]),
      }),
    }),
    order: () => ({
      limit: async () => makeResult([]),
    }),
    maybeSingle: async () => makeResult(null),
  }),
  insert: async () => makeResult(null),
  update: () => ({ eq: async () => makeResult(null) }),
  delete: () => ({ eq: async () => makeResult(null) }),
  eq: () => ({
    maybeSingle: async () => makeResult(null),
    order: async () => makeResult([]),
  }),
  order: () => ({
    limit: async () => makeResult([]),
  }),
});

export const supabase = {
  from,
  rpc: async () => makeResult(null),
};
