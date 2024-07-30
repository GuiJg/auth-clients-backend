const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");

const getClients = asyncHandler(async (req, res) => {
    try {
        const clients = await Client.find({});
        res.status(200).json(clients);
    } catch (error) {
        res.status(400)
        throw new Error('error.message');
    }
})

const getClientsById = asyncHandler(async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(400)
        throw new Error('error.message');
    }
})

const createClient = asyncHandler(async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(200).json(client);
    } catch (error) {
        res.status(400)
        throw new Error('error.message');
    }
})

const deleteClient = asyncHandler(async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(400)
        throw new Error('error.message');
    }
})

module.exports = { 
    getClients,
    getClientsById,
    createClient,
    deleteClient
}