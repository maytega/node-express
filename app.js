const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {res.send("<h1> Pagina inicial </h1>")})
app.listen(8081, () => {console.log("Servidor activo en 8081")})