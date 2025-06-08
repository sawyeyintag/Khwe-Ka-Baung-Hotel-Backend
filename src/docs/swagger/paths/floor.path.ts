const tags = ["Floor"];

export const floorPaths = {
  "/floors": {
    get: {
      summary: "Get all floors",
      description: "Retrieve a list of all floors in the system",
      tags,
      responses: {
        "200": {
          description: "List of floors retrieved successfully",
        },
        "404": {
          description: "No floors found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};
