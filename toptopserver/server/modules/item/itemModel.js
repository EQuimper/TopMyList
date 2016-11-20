import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, trim: true },
  image: { type: String },
  description: { type: String }
}, { timestamps: true });

const Item = mongoose.model('item', ItemSchema);

export default Item;
