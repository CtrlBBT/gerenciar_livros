const express = require("express")

const aluguel_router = require("./routes/aluguel.js")
const estudante_router = require("./routes/estudante.js")
const livro_router = require("./routes/livro.js")

const app = express()
const port = 5600

app.use(express.json())

app.use("/aluguel", aluguel_router)
app.use("/estudante", estudante_router)
app.use("/livro", livro_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})