import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bio: {
    type: String
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export {Doctor};
