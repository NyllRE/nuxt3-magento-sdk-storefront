import { buildModule, initSDK, middlewareModule } from "@vue-storefront/sdk";
import { Endpoints as MagentoEndpoints } from '@vue-storefront/magento-api';

const sdkConfig = {
  magento: buildModule(middlewareModule<MagentoEndpoints>, {
    apiUrl: "http://localhost:8181/magento", // Ensure this URL is correct
  }),
};

export const sdk = initSDK(sdkConfig);

// import { createApiClient } from '@vue-storefront/magento-api';
// import { createMiddleware } from '@vue-storefront/sdk';

// const sdkConfig = {
//   api: {
//     uri: process.env.VSF_MAGENTO_GRAPHQL_URL,
//   },
//   auth: {
//     clientId: process.env.VSF_MAGENTO_CLIENT_ID,
//     clientSecret: process.env.VSF_MAGENTO_CLIENT_SECRET,
//   },
// };

// export const magentoClient = createApiClient(sdkConfig);

// export const sdkMiddleware = createMiddleware({
//   integrations: {
//     magento: {
//       location: '@vue-storefront/magento-api/server',
//       configuration: sdkConfig,
//     },
//   },
// });
