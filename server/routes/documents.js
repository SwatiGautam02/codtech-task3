const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

router.get('/', async (req, res) => {
    const doc = await Document.findOne();
    res.json(doc || { content: "" });
});

router.post('/', async (req, res) => {
    const { content } = req.body;
    let doc = await Document.findOne();
    if (!doc) {
        doc = new Document({ content });
    } else {
        doc.content = content;
    }
    await doc.save();
    res.json(doc);
});

module.exports = router;