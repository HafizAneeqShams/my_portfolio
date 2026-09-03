

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    
    // Check if URI exists
    if (!uri) {
      console.error('❌ MONGODB_URI is not defined in .env file');
      console.log('📝 Please add: MONGODB_URI=mongodb://127.0.0.1:27017/portfolio');
      process.exit(1);
    }

    console.log('📡 Connecting to MongoDB...');
    console.log('🔗 Connection String:', uri.replace(/\/\/.*@/, '//****:****@'));
    
    // ✅ REMOVED deprecated options
    await mongoose.connect(uri);
    
    console.log('✅ MongoDB Connected Successfully');
    console.log('📊 Database:', mongoose.connection.db.databaseName);
    console.log('🔌 Host:', mongoose.connection.host);
    
    // Handle connection errors after initial connection
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected');
    });

  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    console.log('🔍 Possible issues:');
    console.log('  1. MongoDB is not running (check with: netstat -an | findstr 27017)');
    console.log('  2. Wrong connection string in .env file');
    console.log('  3. MongoDB is running on a different port');
    console.log('  4. Firewall blocking the connection');
    console.log('  5. Invalid database name in connection string');
    
    // Don't exit process, just log error and continue
    console.log('⚠️ Running without database connection (some features may not work)');
  }
};

module.exports = connectDB;