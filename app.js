let express = require("express"); 
let app = express(); 
let request = require("request"); 

app.get("/results",(req, res) => { 
    request("http://www.omdbapi.com/?apikey=a4db347d&s=illinois",(error, response, body) => { 
        if(!error && response.statusCode == 200){ 
            let results = JSON.parse(body);
            res.send(results["Search"][0]["Title"]); 
        }
    }); 
});

app.listen(3000, () => { 
    console.log("movie app is listening"); 
}); 

