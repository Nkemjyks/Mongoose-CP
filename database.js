const mongoose = require('mongoose')
const mcs = require('./mongo_uri')

module.exports = main().catch(err => console.log(err));
//connect to db
async function main() {
  await mongoose.connect(mcs).then(console.log('connected'));
}

