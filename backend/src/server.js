const { app } = require("./app.js");
const { env } = require("./config");

const PORT = env.PORT;

console.log(`Server running on port`);

try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error('Error starting the server:', error);
}

