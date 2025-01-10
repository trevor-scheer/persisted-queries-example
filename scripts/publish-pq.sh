# load up env variables
set -a && source .env && set +a
set -a && source .pq.env && set +a

rover persisted-queries publish \
  ${APOLLO_GRAPH_REF} \
  --manifest ./persisted-query-manifest.json \
  --for-client-name node-client