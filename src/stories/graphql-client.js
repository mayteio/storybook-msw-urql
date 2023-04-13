import { createClient, fetchExchange } from "urql";

export const graphqlClient = createClient({
  url: "http://localhost/graphql",
  exchanges: [fetchExchange],
});
