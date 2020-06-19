const fs = require("fs");
const path = require("path");
exports.read_file_ut8= function(src,func){
    fs.readFile(src, "utf8",function(err,data_s){
        let  ref_data = {
            is_file_exists : false,
            data : "",
            file_name:src
        }
       
        if(err == null){
            let  ref_data = {
                is_file_exists : true,
                data : data_s,
                file_name:src
            }
            func(ref_data)
        }else{
            func(ref_data)
        }
            
        
        
    });
}
exports.readStream= function(src,func){
    
    try{
        var list_content = [];
        var data_readstream = fs.createReadStream(src);
                    
        data_readstream.on('data', function (chunk) {
            list_content.push(chunk);
            func({"per_line_data":chunk});
        });
        data_readstream.on("end",function(){

            func({"complete_data":list_content.join().toString()});
        })
    }
    catch(e){
        func({"error":e});
    }
    
}