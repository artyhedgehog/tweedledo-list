import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "http://localhost:4200",
    "viewportWidth": 890,
    "numTestsKeptInMemory": 1,
    "projectId": "n4ynap"  
  },
});
