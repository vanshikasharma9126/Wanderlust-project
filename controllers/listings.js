const Listing=require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding ({ accessToken: mapToken });

module.exports.index=async (req,res) => {
    const allListings =await Listing.find({});
    res.render("listings/index.ejs",{allListings});
    console.log(allListings);
};

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing=async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews",
    populate :{
        path:"author",
    },
    })
    .populate("owner");
    if (!listing) {
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
        return res.send("Listing not found!");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});
};

module.exports.createListing=async (req, res) => {
    let response = await geocodingClient
    .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
        .send();

    let url=req.file.path;
    let filename=req.file.filename;
    console.log("BODY:", req.body);
    let data = req.body.listing;
    // 🔥 FORCE image to always be object
    if (!data.image || typeof data.image !== "object") {
        data.image = {
            url: data.image || "",
            filename: "listingimage"
        };
    }
    const newListing = new Listing(data);
    //console.log(req.user);
    newListing.owner=req.user._id;
    newListing.image={url,filename};

    newListing.geometry=response.body.features[0].geometry;
    
    let savedListing = await newListing.save();
    console.log(savedListing);

    req.flash("success", "Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm =async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id); //find out the id first then only the editing will be possible for that particular link
    if (!listing) {
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl= originalImageUrl.replace("/upload","/upload/w_250")
    res.render("listings/edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing=async(req,res) => { //validate the listing first then do oher work
    if(!req.body.listing){
        throw new ExpressError(400, "send valid data for listing");
    }
    let {id} =req.params;
    //await Listing.findByIdAndUpdate(id, {...req.body.listing});
    let oldListing = await Listing.findById(id);

    let updatedData = { ...req.body.listing };

    if (!updatedData.image) {
        updatedData.image = oldListing.image;
    }

    let listing=await Listing.findByIdAndUpdate(id, updatedData);
    
    if(typeof req.file !=="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async(req,res) =>{
    let {id} =req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("deletedListing");
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};