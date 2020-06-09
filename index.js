const express = require('express');
const app = express();
const port = 3000;

const axios = require('axios');

app.get('/', (req, res) => {
    //api dados recentes por estado Brasil.IO
    axios.get('https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=state')
        .then(response => {
            console.log(response)
            res.json(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))