import AppConfig from './app.config';
import AuthConfig from './auth.config';
import GraphqlConfig from './graphql.config';
export default () => ({
  ...AppConfig,
  ...AuthConfig,
  ...GraphqlConfig,
});
