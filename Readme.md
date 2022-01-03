# Cicro_frontend

A micro frontend application for cyclops web frontend.

### Development

1. Creating microfrontend app
   1. `npx create-mf-app` > NAME_OF_APP > Application > PORT_NUM > typescript > CSS

2. Linking microfrontend app
   1. HOST: `webpack.config.js` > plugins > exposes > add module in following syntax:
   ```js
   exposes: {
       APP_NAME: "APP_NAME@http://HOST_URL:PORT/remoteEntry.js"
   }
   ```
   1. REMOTE: `webpack.config.js` > plugins > remotes > add module in following syntax:
   ```js
   remotes: {
       HOST_APP_NAME: "HOST_APP_NAME@http://HOST_URL:PORT/remoteEntry.js"
   }
   ```

3. Shared library / Shared definitons
   1. Creating shared module
      1. `npx create-mf-app` > NAME_OF_LIB > Library > ...
      2. `npm i react react-dom` && `npm i @types/react @types/react-dom -D`
      3. Define type and export the type of target component
      4. `npm run build`
      5. `npm link` in lib directory (allows linking for host and remote)
      6. cd into HOST_DIR and `npm link SHARED_LIB_NAME`, i.e. `cd home && npm link shared`
      7. cd into REMOTE_DIR and `npm link SHARED_LIB_NAME`, i.e. `cd login && npm link shared`
      8. add type support into REMOTE by: `@types/REMOTE_NAME/COMPONENT_NAME/index.d.ts` and add
      ```typescript
      import React from "react";
      import type { COMPONENT_TYPE } from "shared";
      const COMPONENT_NAME: COMPONENT_TYPE;
      export default COMPONENT_NAME
      ```
      9. add typescript config into REMOTE by `tsc --init`
      10. change tsconfig to be able to read jsx syntax by uncommenting `"jsx": "preserve"` and chaning the value to `"jsx": "react"`
      11. change tsconfig to be able to import type definitions by uncommenting `"paths": {}` and changing the value to
      ```json
      "paths": {
         "*": [
            "src/@types/*"
         ]
      }
      ```
      12. import type from shared lib in code
      ```tsx
      import type { Home } from "shared"
      ```