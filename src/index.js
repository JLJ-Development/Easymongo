const { Schema, model } = require("mongoose");
const MongoClient = require("./struct/MongoClient");

module.exports = {
    MongoClient: MongoClient,
    Schema: Schema,
    model: model,
};
