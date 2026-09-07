// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// // Load environment variables
// dotenv.config();

// // Connect to database
// connectDB();

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:27017',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/api/contact', require('./routes/contactRoutes'));

// // Health check
// app.get('/api/health', (req, res) => {
//   res.json({ 
//     status: 'OK', 
//     message: 'Server is running',
//     timestamp: new Date().toISOString()
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ 
//     error: 'Something went wrong!',
//     message: process.env.NODE_ENV === 'development' ? err.message : undefined
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📍 http://localhost:${PORT}`);
// });

// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'https://your-portfolio.vercel.app'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// ✅ Export for Vercel
module.exports = app;

// ✅ Only listen if not on Vercel
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}