export type SearchQuery = {
  query: string;
  filter?: string;
  pf?: string;
};

export type SearchQueryKey = [string, string, SearchQuery];
