const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, enum: ['admin', 'client', 'employee'], default: 'client' },
});

module.exports = mongoose.model('User', userSchema);
