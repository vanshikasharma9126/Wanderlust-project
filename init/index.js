
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({}); // to delete all the previous data if any 
    initData.data= initData.data.map((obj) => ({...obj,owner:"6a097960332a1eef0d368592"}));
    await Listing.insertMany(initData.data); //then start inserting 
    console.log("data was initialized");
};
initDB();

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
// require("dotenv").config();

// const mapToken = process.env.MAP_TOKEN;
// const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// const dbUrl = process.env.ATLASDB_URL;

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(dbUrl);
// }

// const initDB = async () => {
//   await Listing.deleteMany({});

//   for (let listing of initData.data) {
//     let response = await geocodingClient
//       .forwardGeocode({
//         query: `${listing.location}, ${listing.country}`,
//         limit: 1,
//       })
//       .send();

//     if (
//       response.body.features &&
//       response.body.features.length > 0
//     ) {
//       listing.geometry = response.body.features[0].geometry;
//     } else {
//       listing.geometry = {
//         type: "Point",
//         coordinates: [77.2090, 28.6139],
//       };
//     }

//     listing.owner = "6a0ee681b698ff5b9ec1f2bf";
//   }

//   await Listing.insertMany(initData.data);

//   console.log("data was initialized with geometry");
// };

// initDB();