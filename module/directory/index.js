var validation = require("grasseum_glob/util/validation");
var compt = require("compts");
var fs = require('fs');
var path = require('path');

exports.createFolder = function(location,succfunc,errorfunc){
    if (!fs.existsSync(location)){
        try{
         fs.mkdirSync(location);
         succfunc({"status":"folder_created"})
        }catch(e){
            errorfunc(e);
        }
         
     }else{
        succfunc({"status":"folder_existed"})
     }
}

exports.createFolderRecursivelyIfNotExist = function(location){
    var pathname = validation.cleanDirPath(path.dirname(location)).split("/");
    var counter =0;
   
    if (!fs.existsSync(location)){
        
        folder_creator(pathname,counter,function(data){
   
        },function(data){

        });
    }
}


var folder_creator = function(pathname,counter,succfunc,errorfunc){
    exports.createFolder(compt._.to_array(compt._.getValue(compt._.limit(pathname,0,counter))).join("/"),function(data){
        if(data["status"] == "folder_created"){

        }
        counter++;
        if( counter< pathname.length){
            folder_creator(pathname,counter,succfunc,errorfunc);
        }
        succfunc(data);
    },function(data){
        console.log(data,"error");
        errorfunc(data);
    });
}