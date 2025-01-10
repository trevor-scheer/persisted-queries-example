# load up env variables
set -a && source .env && set +a

rover subgraph publish ${APOLLO_GRAPH_REF} \
  --schema ./packages/subgraph/schema.graphql \
  --name hello \
  --routing-url http://localhost:4001