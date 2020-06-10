const express = require('express');
const app = express();
const port = 3000;

const axios = require('axios');

app.get('/api/totalizers', (req, res) => {
    //api dados recentes por estado Brasil.IO
    axios.get('https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=state')
        .then(response => {
            const resultsByState = response.data.results;
            const totalizers = resultsByState.reduce((counter, item) => Object.assign({}, {
                confirmed: counter.confirmed + item.confirmed,
                deaths: counter.deaths + item.deaths,
            }), {confirmed:0, deaths:0});

            console.log(totalizers)
            res.json(totalizers);
        })
        .catch(error => {
            res.send(error);
        });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))