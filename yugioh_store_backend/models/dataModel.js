import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DataSchema = new Schema({
        name:{ 
            type: String,
        },
        type:{ 
            type: String,
        },
        desc:{ 
            type: String,
        },
        atk:{ 
            type: Number,
        },
        def:{ 
            type: Number,
        },
        level:{ 
            type: Number,
        },
        race:{ 
            type: String,
        },
        attribute:{ 
            type: String,
        },
        card_image:{ 
            type: String,
        },
        prices:{ 
            type: Array,
        }
});