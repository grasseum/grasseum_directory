const fs = require("fs");
const path = require("path");
let compt  = require("compt")
exports.write_file= async function(src,data,func){
    fs.writeFile(src, data,function(err){
        
        if(compt._.has(func))    
        func({"error":err})
        
    });
}