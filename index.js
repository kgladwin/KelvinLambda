exports.handler = (event, context, callback) => {
    let responseCode = 200;
    
    var responseBody = "Hello Kelvin Gladwin, the time now is: " + new Date().getHours() + ":" + 
        new Date().getMinutes() + ":" + new Date().getSeconds() + " UTC";
        
    var response = {
        statusCode: responseCode,
        headers: {"Access-Control-Allow-Origin" : "*",
        },
        body: JSON.stringify(responseBody)
    };
    
    callback(null, response);
    
};