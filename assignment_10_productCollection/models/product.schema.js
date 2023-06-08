const mongoose = require('mongoose');


// task: #1

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
  },
  { timestamps: true, versionKey: false }
);

const productModel = mongoose.model("product",productSchema);

module.exports = productModel;