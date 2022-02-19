//declarations
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const express = require('express');
const router = express.Router();
const upload = require('../app')
//imports
const pdf = require('../controller/pdf');

router.post('/compressPDF/LQ', upload.single('file') , pdf.compresspdfLQ);
router.post('/compressPDF/AQ', upload.single('file') , pdf.compresspdfAQ);
router.post('/compressPDF/BAQ', upload.single('file') , pdf.compresspdfBAQ);


module.exports = router;

