//joi is used to check the validations for schema
//like the values we r filling in the form to create or to edit them have some contraints
//which we r giving with help of joi
//for this install the [ npm i joi ] first and then require it in the main app.js and use where you want to 
const Joi = require('joi');
module.exports.listingSchema=Joi.object({
    listing: Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required().min(0), //not a negative number
        image:Joi.object({
            url:Joi.string().allow("",null),
        })
    }).required(),
});

module.exports.reviewSchema=Joi.object({
    review: Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }).required(),
});
