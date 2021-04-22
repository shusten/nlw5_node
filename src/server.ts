import expresse, { response } from "express";

import "./database";

const app = expresse();

app.get("/", ( request, response ) =>  {
    return response.json({
        "title": "JSON Example",
        "nested": {
          "someInteger": 7,
          "someBoolean": true,
          "someArray": [
            "list of",
            "fake strings",
            "and fake keys"
          ]
        }
    })
})

app.post("/users", ( request, response ) =>  {
    return response.json({
    message: "Usuário salvo com sucesso!"
    })
})

app.listen(3333, () => console.log("Server is running on port 3333"));