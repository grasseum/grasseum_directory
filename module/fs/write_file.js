const fs = require("fs");
const path = require("path");
let compt  = require("compts")
exports.write_file= async function(src,data,func){
    fs.writeFile(src, data,function(err){
        
        if(compt._.has(func))    
        func({"error":err})
        
    });
}

exports.createFileIfNotExist = function(src,data,func){
    if (!fs.existsSync(locatsrcion)){
        try{
            exports.write_file(src,data,func);
        }catch(e){
            func({"error":err,"is_exist":true})
        }
         
     }
}

exports.writeStream= function(src,content,action){

    var action_config = compt._.varExtend({
        "attr":{}
      },action);


    var data = fs.createWriteStream( src,action_config['attr'] );
    data.write( content );
}