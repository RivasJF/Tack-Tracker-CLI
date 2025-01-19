var fs = require('fs');



fs.readFile('Data/index.json', 'utf8', function(err, data) {
    if (err){
        console.log(err+"\nnot found");
        return;
    }
        console.log(data);
});
