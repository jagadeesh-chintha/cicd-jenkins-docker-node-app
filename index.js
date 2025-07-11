const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('🚀 Hello from Jenkins CI/CD with Docker + Node!');
});

app.listen(PORT, () => {
    console.log(App running at http://localhost:${PORT});
});
