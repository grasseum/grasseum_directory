const {unixpath} = require('path-assist');
const structkit = require("structkit");
const fs = require('fs');
const path = require('path');

const folder_creator = function (pathname, counter, succfunc, errorfunc) {

    exports.createFolder(structkit.toArray(structkit.getValue(structkit.limit(pathname, 0, counter))).join("/"), function (data) {

        counter+=1;
        if (counter< pathname.length) {

            folder_creator(pathname, counter, succfunc, errorfunc);

        }else{
            succfunc(data);
        }
        

    }, function (data) {

        console.log(data, "error");
        errorfunc(data);

    });

};

exports.createFolder = function (location, succfunc, errorfunc) {

    fs.access(location, fs.constants.F_OK, (error) => {

     
        if(error ==null){
            succfunc({"status": "folder_existed"});
        }else{
            try {

                /*
                 * Fs.mkdirSync(location);
                 * Succfunc({"status": "folder_created"});
                 */
                fs.mkdir(location, {recursive: true}, (err) => {
    
                    if (err) {
    
                        throw err;
    
                    }
                    succfunc({"status": "folder_created"});
    
                });
    
            } catch (exception) {
    
                errorfunc(exception);
    
            }
        }
        

    });

};

exports.createFolderRecursivelyIfNotExist = function (location ,isAutoGenerateFolder,successFunc,failedFunc) {

    const pathname = unixpath.cleanDirPath(path.dirname(location)).split("/");
    const counter =0;


    fs.access(location, fs.constants.F_OK, () => {

        if(isAutoGenerateFolder){
            folder_creator(pathname, counter, function () {
 
               if(structkit.has(successFunc)){
                successFunc()
               }
            
            }, function () {
 
            if(structkit.has(failedFunc)){
                failedFunc()
               }
    
            });
        }else{
            if(structkit.has(successFunc)){
                successFunc()
            }
        }
        

    });

};

