import { version } from "../../package.json";
import authPaths from "./swagger/auth.json";

// Combine all paths
const paths = {
  ...authPaths,
  // Add other path imports
};

// Complete Swagger document
const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "REST API Documentation",
    version,
    description: "API documentation for your Express application",
  },
  servers: [
    {
      url: "/api",
    },
  ],
  paths,
  components: {
    // Add other component types if needed (responses, parameters, etc.)
  },
};

export default swaggerDocument;
