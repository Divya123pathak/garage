const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/inter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("mongodb connected");
})
.catch(err => {
  console.log("not connected", err);
});






const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  pay: {
    type: Number,
    default: 0.00,
    required: true
  },
  transactions: [{
    date: {
      type: Date,
      default: Date.now
    },
    services: [{
      name: {
        type: String,
      // default:null,
        required: true
      },
      cost: {
        type: Number,
     // default:0,
        required: true
      },
    }],

  totalAmount: {
    type: Number,
    required: true,
  },
   
  }],
 
});

const collection = mongoose.model("c2", LogInSchema);

module.exports = collection;
