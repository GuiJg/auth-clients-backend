const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true,
            unique: true
        },
        cnpj: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }      
    },
    {
        timestamps: true
    }
)

const Client = mongoose.model('Client', clientSchema);
module.exports = Client