const express = require("express");
const bodyParser = require("body-parser");
const bfhlRoutes = require("./routes/bfhlRoutes");
const path = require("path");  // Added to handle serving the frontend

const app = express();

// Use dynamic port for Heroku or fallback to 5000 locally
const PORT = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());  // Allow all origins

app.get('/', (req, res) => {
    res.send('Backend is running! Access the /bfhl endpoint for API functionality.');
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/bfhl", bfhlRoutes);

// Serve static files from the React app (if the React app is built into /frontend/build)
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// All other requests should be handled by React's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// Server
app.listen(PORT, () => {
  console.log(`Backend and frontend are running on http://localhost:${PORT}`);
});















// const express = require("express");
// const bodyParser = require("body-parser");
// const bfhlRoutes = require("./routes/bfhlRoutes");

// const app = express();

// // Use dynamic port for Heroku or fallback to 5000 locally
// const PORT = process.env.PORT || 5000;

// const cors = require('cors');
// app.use(cors());  // Allow all origins

// app.get('/', (req, res) => {
//     res.send('Backend is running! Access the /bfhl endpoint for API functionality.');
// });

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.use("/bfhl", bfhlRoutes);

// // Server
// app.listen(PORT, () => {
//   console.log(`Backend running on http://localhost:${PORT}`);
// });











// const express = require("express");
// const bodyParser = require("body-parser");
// const bfhlRoutes = require("./routes/bfhlRoutes");

// const app = express();
// const PORT = 5000;

// const cors = require('cors');
// app.use(cors());  // Allow all origins

// app.get('/', (req, res) => {
//     res.send('Backend is running! Access the /bfhl endpoint for API functionality.');
//   });
  
// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.use("/bfhl", bfhlRoutes);

// // Server
// app.listen(PORT, () => {
//   console.log(`Backend running on http://localhost:${PORT}`);
// });
