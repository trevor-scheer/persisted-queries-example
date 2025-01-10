# Setup

1. Add the following files:

## .env

```
APOLLO_KEY=<contributor key for router>
APOLLO_GRAPH_REF=<graph ref>
```

## .pq.env

```
APOLLO_KEY=<pq publisher key for script>
```

2. Install repo dependencies: `npm install`
3. Start router and subgraph (optionally, detached) `docker compose up -d --build`

# Usage

- See top-level npm scripts in `package.json` for common tasks like publishing PQs and running the client.
- You can navigate to the router's playground at `http://localhost:4000` and send queries.
- `packages/client/index.js` contains a script that sends both a GraphQL query and a PQ to the router and logs the responses.
- Tweak the `router.yaml` to be more restrictive against raw GraphQL queries.
