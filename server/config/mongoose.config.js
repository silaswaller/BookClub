const mongoose = require("mongoose");
const database = "books"

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`You are connected to the ${database} database!`)
    })
    .catch((err) => {
        console.log(`Error connecting to the ${database} database`)
        console.log(err)
    })

