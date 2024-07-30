const express = require("express");
const router = express.Router();
const { getClients, getClientsById, createClient, deleteClient } = require("../controllers/clientController");

router.get('/', getClients);

router.get('/:id', getClientsById);

router.post('/', createClient);

router.delete('/:id', deleteClient);

module.exports = router