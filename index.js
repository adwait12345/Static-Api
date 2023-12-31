const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

const Data = require('./data/vehicle')
const Performance = require('./data/performance')
const Kpidata = require('./data/kpiData')
const PerformanceData = require('./data/performanceData')

app.get('/live-vehicles', (req, res) => {
    res.json({ Data });
});

app.get('/performance', (req, res) => {
    res.json({ Performance});
});

app.get('/kpi-data', (req, res) => {
    res.json({ Kpidata});
});

app.get('/performance-data', (req, res) => {
    res.json({ PerformanceData });
});

app.listen(8000, () => {
    console.log('App listening on port 8000');
});