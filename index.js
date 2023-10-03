const express = require ('express')

const app = express()

app.get('/', (request, response) =>{
    response.send("Hello, world from express")
})

/**
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})