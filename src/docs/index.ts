import { version } from "../../package.json";
import { authPaths } from "./swagger/paths/auth.path";
import { roomPaths } from "./swagger/paths/room.path";
import { floorPaths } from "./swagger/paths/floor.path";
import { roomTypePaths } from "./swagger/paths/room-type.path";
import { bookingPaths } from "./swagger/paths/booking.path";
import { roomStatusPaths } from "./swagger/paths/room-status.path";
import { guestPaths } from "./swagger/paths/guest.path";

// Combine all paths
const paths = {
  ...authPaths,
  ...roomPaths,
  ...floorPaths,
  ...roomTypePaths,
  ...bookingPaths,
  ...roomStatusPaths,
  ...guestPaths,
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
