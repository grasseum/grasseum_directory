var module_src_index =require("grasseum_directory/module/src/index")
var compt = require("compts");
exports.readFileInDir = function(data,func){
    if(compt._.has(data)){
        data.forEach(function(v){
            module_src_index(v,func)
        });
    }
   
}
