//require
require('../routes/route');

const validator = require('validator');
const path = require('path');
const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports.compresspdfAQ = async (req, res) => {
    try {
        const file = req.file;
        const inputFile = req.body.path
        outputFile = "C:/Users/neetu/Downloads/"+ "OutPut" + Date.now() + path.extname(req.body.path);
        console.log(outputFile);
        console.log(inputFile)

        if (file.mimetype === 'application/pdf') {
            const { stdout, stderr } = await exec(`gswin64c -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \-dNOPAUSE -dQUIET -dBATCH -sOutputFile="${outputFile}" "${inputFile}"`)
            console.log('stdout:', stdout)
            console.log('stderr:', stderr)

            if(outputFile){
                res.status(200).json({
                    output:outputFile
                })
            }
        } else {
            res.status(400).send("Please Upload a Pdf File to Compress!!!");
        }



    } catch (error) {
        console.log(error)
        res.status(400).json({ error });

    }
}

module.exports.compresspdfLQ = async (req, res) => {
    try {
        const file = req.file;
        const inputFile = req.body.path
        outputFile = "C:/Users/neetu/Downloads/"+ "OutPut" + Date.now() + path.extname(req.body.path);
        console.log(outputFile);
        console.log(inputFile)

        if (file.mimetype === 'application/pdf') {
            console.log("in LQ")
            const { stdout, stderr } = await exec(`gswin64c -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen \-dNOPAUSE -dQUIET -dBATCH -sOutputFile="${outputFile}" "${inputFile}"`)
            console.log('stdout:', stdout)
            console.log('stderr:', stderr)

            if(outputFile){
                res.status(200).json({
                    output:outputFile
                })
            }
        } else {
            res.status(400).send("Please Upload a Pdf File to Compress!!!");
        }



    } catch (error) {
        console.log(error)
        res.status(400).json({ error });

    }
}

module.exports.compresspdfBAQ = async (req, res) => {
    try {
        const file = req.file;
        const inputFile = req.body.path
        outputFile = "C:/Users/neetu/Downloads/"+ "OutPut" + Date.now() + path.extname(req.body.path);
        console.log(outputFile);
        console.log(inputFile)

        if (file.mimetype === 'application/pdf') {
            const { stdout, stderr } = await exec(`gswin64c -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/prepress \-dNOPAUSE -dQUIET -dBATCH -sOutputFile="${outputFile}" "${inputFile}"`)
            console.log('stdout:', stdout)
            console.log('stderr:', stderr)

            if(outputFile){
                res.status(200).json({
                    output:outputFile
                })
            }
        } else {
            res.status(400).send("Please Upload a Pdf File to Compress!!!");
        }



    } catch (error) {
        console.log(error)
        res.status(400).json({ error });

    }
}
