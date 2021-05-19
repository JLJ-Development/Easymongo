class MongoClient {

    constructor(ops = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }) {
        /**
         * @param {Boolean} useNewUrlParser
         */
        this.useNewUrlParser = ops.useNewUrlParser || true;
        /**
         * @param {Boolean} useUnifiedTopology
         */
        this.useUnifiedTopology = ops.useUnifiedTopology || true;
        /**
         * @param {Boolean} useFindAndModify
         */
        this.useFindAndModify = ops.useFindAndModify || false;
        /**
         * @param {Boolean} useCreateIndex
         */
        this.useCreateIndex = ops.useUnifiedTopology || true;
        /**
         * mongoose
         * @package
         */
        this.mongoose = require("mongoose");
        /**
         * chalk
         * @package
         */
        this.chalk = require("chalk");
    };

    /**
     * Connect to mongodb
     * @param {String} url Mongodb connection url
     */
    connect(url) {
        if (!url || (typeof (url) !== "string")) throw new ReferenceError("An invalid url was provided");

        this.mongoose.connect(url, {
            useNewUrlParser: this.useNewUrlParser,
            useUnifiedTopology: this.useUnifiedTopology,
            useFindAndModify: this.useFindAndModify,
            useCreateIndex: this.useCreateIndex
        }).catch(error => {
            throw new ReferenceError("An invalid url was provided");
        });
    };
    /**
     * Disconnect from mongodb
     */
    disconnect() {
        this.mongoose.disconnect();
    };
    /**
     * 
     * @param {String} message Text for logging upon connected
     * @returns 
     */
    on(message) {
        this.mongoose.connection.on("connected", async () => {
            if (!message) {
                return console.log(`${this.chalk.green("[ Easymongo ]")} Mongodb is now connected`);
            } else {
                return console.log(`${this.chalk.green("[ Easymongo ]")} ` + message);
            };
        });
    };
    /**
     * 
     * @param {String} message Text for logging upon disconnected
     */
    off(message) {
        this.mongoose.connection.on("disconnected", async () => {
            if (!message) {
                return console.log(`${this.chalk.red("[ Easymongo ]")} Mongodb is disconnected`);
            } else {
                return console.log(`${this.chalk.red("[ Easymongo ]")} ` + message);
            };
        });
    };
};


module.exports = MongoClient;
