import mongoose, { Schema } from 'mongoose';

// Define movie schema
var activitySchema = new Schema({
  game: String,
  date: String,
  coop: Boolean,
  livestream: Boolean
});

// Export Mongoose model
export default mongoose.model('activity', activitySchema);
