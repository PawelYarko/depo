// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.use(cors({ 
//     origin: 'http://localhost:1234',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'] 
// }));

// app.listen(3000);

export default async function fetchCrypto(){

        try{
            const API = 'https://api.finage.co.uk/convert/crypto/';
            const API_KEY = 'API_KEY98V68TI5ER0MIIRATBUKTTMRV801BNL7';
            const from = 'BTC';
            const to = 'SHIB';
            const amount = 2;
            const url = `${API}${from}/${to}/${amount}?apikey=${API_KEY}`; 
            // const url = 'https://api.publicapis.org/entries';

            const response = await fetch('https://api.finage.co.uk/convert/crypto/BTC/SHIB/2?apikey=API_KEY98V68TI5ER0MIIRATBUKTTMRV801BNL7',{method: "GET"});
            const jsonData = await response.json();
            console.log(jsonData);
            return jsonData;
        } catch (error) {
            console.error(error);
          }
    }
    