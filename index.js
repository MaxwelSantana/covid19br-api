const express = require('express');
const app = express();
const port = 3000;

const axios = require('axios');

app.get('/api/totalizers', (req, res) => {
    //api dados recentes portal do governo
    axios.get('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi')
        .then(response => {
            const totalizers = response.data;
            res.json(totalizers);
        })
        .catch(error => {
            res.json({error});
        });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))