const express = require('express');
const app = express();

app.get('/', (reequest, response) =>    {
    response.send('Test');
});

app.listen(8080, () => {
    console.log('http://localhost:8080');
});