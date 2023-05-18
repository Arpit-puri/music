const mongoose=require('mongoose');
const Joi=require('joi');

const ObjectId = mongoose.Schema.Types.ObjectId;

const playListSchema= new mongoose.Schema({
    name:{
        Type:String,
        required:true
    },
    user:{
        type: ObjectId,
        ref:"user",
        required:true
    },
    desc:{
        type:String
    },
    songs:{
        type:Array,
        default:[]
    },
    img:{
        type:String
    }    
})

const validate = (playlist) =>{
    const schema = joi.object({
        name: Joi.string().required(),
        user: Joi.string().required(),
        desc: Joi.string().allow(""),
        songs: Joi.array().items(Joi.string()),
        img: Joi.string().allow("")
    });
    return schema.validate(playlist);
}

const PlayList= mongoose.model('playList', playListSchema);

module.exports ={PlayList,validate};