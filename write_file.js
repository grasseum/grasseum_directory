const fs = require("fs");
const path = require("path");
exports.write_file= async function(src,data,func){
    fs.writeFile(src, data,function(err){
        
            
        func({"error":err})
        
    });
}