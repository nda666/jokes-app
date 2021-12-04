import { GraphqlConfigInterface } from '../interfaces/config/graphql.interface';

const GraphqlConfig = {
  graphql: <GraphqlConfigInterface>{
    disableHealthCheck:
      process.env.GRAPHQL_HEALTH_CHECK?.toString().toLowerCase() === 'true'
        ? true
        : false,
    debug:
      process.env.GRAPHQL_DEBUG?.toString().toLowerCase() === 'true'
        ? true
        : false,
    playground:
      process.env.GRAPHQL_PLAYGROUND?.toString().toLowerCase() === 'true'
        ? true
        : false,
    sortSchema:
      process.env.GRAPHQL_SORT_SCHEMA?.toString().toLowerCase() === 'true'
        ? true
        : false,
  },
};

export default GraphqlConfig;
