// const { json } = require("express")
const Express = require("express")
const db = require("./api/answers.json")
const app = Express()
const PORT = 8000

console.log(db);


app.use(Express.json())
app.use(Express.urlencoded())

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})


app.get("/json", (req,res) => {
    res.send(db)
})


