const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// *** Creates HTML Routes
router.get('/notes/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;