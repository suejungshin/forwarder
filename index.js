const express = require('express');
const app = express();
const port = 3001;

// Middleware to manipulate incoming requests
app.use(express.json());

// Route handling
app.post('/route2', (req, res) => {
  console.log('hit route 2')
  console.log(req.headers)
  console.log(JSON.stringify(req.body))

  // Creating a custom JSON response
  const jsonResponse = {
    "apiVersion": "dsr/v1",
    "kind": "DeleteResponse",
    "metadata": {
      "uid": req.body.metadata.uid,
      "tenant": req.body.metadata.tenant
    },
    "response": {
      "status": "completed",
      "resultMessage": "some result",
      "identities": [
        {
          "identitySpace": "_mkto_trk",
          "identityFormat": "raw",
          "identityValue": "idHere"
        }
        // {
        //   "identitySpace": "not_exists",
        //   "identityFormat": "raw",
        //   "identityValue": "This identity space does not exist"
        // }
      ],
      "subject": {
        "type": "customer",
        "email": "test@test.com",
        "firstName": "Test",
        "lastName": "Test",
        "addressLine1": "1 Liverpool Road",
        "city": "Liverpool",
        "postalCode": "L1 1AA",
        "countryCode": "GB"
      },
      "documents": [
        {
          "url": "https://blog.leahhanson.us/images/HVIF/FileSizes.png",
          "headers": {
            "Authorization": "auth"
          }
        }
      ],
    }
  }


  // setTimeout(()=>{
  //   console.log("timed out")
// res.status(200).json(jsonResponse);
  // }, 60*1000)


  // Sending the JSON response
  res.status(201).json(jsonResponse);

  // res.status(404)
});

app.post('/route1', (req, res) => {
  console.log('hit route 1')
  // Creating a custom JSON response
  const jsonResponse = {
    "apiVersion": "dsr/v1",
    "kind": "AccessResponse",
    "metadata": {
      "uid": req.body.metadata.uid,
      "tenant": req.body.metadata.tenant
    },
    "response": {
      "status": "cancelled",
      "resultMessage": "some result",
      "identities": [
        {
          "identitySpace": "_mkto_trk",
          "identityFormat": "raw",
          "identityValue": "idHere"
        }
      ],
      "subject": {
        "type": "customer",
        "email": "test@test.com",
        "firstName": "Test",
        "lastName": "Test",
        "addressLine1": "1 Liverpool Road",
        "city": "Liverpool",
        "postalCode": "L1 1AA",
        "countryCode": "GB"
      }
    }
  }

  // Sending the JSON response
  // res.status(200).json(jsonResponse);
});


// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
Start ngrok
1. brew install ngrok
2. ngrok config add-authtoken <insertToken from ngrok website>
3. ngrok http 3000

Run this server
1. npm install
2. node index.js
*/
