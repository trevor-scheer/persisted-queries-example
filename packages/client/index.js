// @ts-check
import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient("http://localhost:4000");

const query = gql`
  query HelloQuery {
    hello
    answer
  }
`;

console.log("raw query");
const gqlData = await client.request(query);
console.log(gqlData);

console.log("pq query");
const pq = await fetch("http://localhost:4000", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    variables: null,
    extensions: {
      persistedQuery: {
        version: 1,
        sha256Hash:
          "37ca7004e5320c5816b3da9340754e3f398edb119378ef0ec5a18bde2e404617",
      },
    },
  }),
});
console.log((await pq.json()).data);
