# @roseamelia/easymongo
## It allows you to interact with mongodb easily.

```js
const { MongoClient } = require("@roseamelia/easymongo");

const mongo = new MongoClient({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongo.connect("Mongodb url");
mongo.on();
```
