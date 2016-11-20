import mongoose from 'mongoose';
import GenreSchema from '../genre/genreModel';

const Schema = mongoose.Schema;

const TopListSchema = new Schema({
  title: { type: String, required: true, trim: true },
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  description: { type: String },
  coverImage: { type: String },
  genre: GenreSchema,
  items: [{ type: Schema.Types.ObjectId, ref: 'item' }]
}, { timestamps: true });

const TopList = mongoose.model('toplist', TopListSchema);

export default TopList;
