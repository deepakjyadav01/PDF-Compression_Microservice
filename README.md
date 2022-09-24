
# PDF-Compression_microservice

- It is a **node.js**, **express.js** based microservice which includes functions to compress the quality of PDF .
- It uses **MongoDB atlas** for database i.e mongoose package.
- It uses node.js and express for creating and managing backend server.
- It uses **Ghostscript** API to compress the quality of PDFs.



## Run Locally

Clone the project

```bash
  git clone https://github.com/deepakjyadav01/PDF-Compression_Microservice.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

- You can install postman or ARC to test API.
- check the routes in router.js and add the pdf by selecting multipart data within the POST section and add the file part .
- The URL to compress pdf is http://localhost:3100/pdf/compressPDF/LQ for low quality.
- similarly, you can use various URL's for various API.

   
## Tech Stack


**Server:** Node, Express

**Database:** MongoDB 
