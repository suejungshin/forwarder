const express = require('express');
const app = express();
const port = 3000;

// Middleware to manipulate incoming requests
app.use(express.json());

// Route handling
app.post('*', (req, res) => {
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
      // "identities": [
      //   {
      //     "identitySpace": "_mkto_trk",
      //     "identityFormat": "raw",
      //     "identityValue": "idHere"
      //   }
      // ],
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
  res.json(jsonResponse);
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
