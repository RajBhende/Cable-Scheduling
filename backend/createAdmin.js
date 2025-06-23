const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/User');

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);
  const hashedPassword = await bcrypt.hash('Admin@123', 10);

  const admin = new User({ email: 'admin@gmail.com', password: hashedPassword, role: 'admin' });
  await admin.save();

  console.log('✅ Admin created');
  process.exit();
}

createAdmin();
