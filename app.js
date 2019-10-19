let express = require("express"); 
let app = express(); 
let request = require("request"); 

app.set("view engine", "ejs"); 


app.get("/results",(req, res) => { 
    request("http://www.omdbapi.com/?apikey=a4db347d&s=illinois",(error, response, body) => { 
        if(!error && response.statusCode == 200){ 
            let data = JSON.parse(body);
            res.render("results", {data: data}); 
        }
    }); 
});

app.listen(3000, () => { 
    console.log("movie app is listening"); 
}); 

