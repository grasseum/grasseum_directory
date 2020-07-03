var module_src_index =require("grasseum_directory/module/directory")
var compt = require("compts");
var fs = require('fs');

exports.directory = function(){
    return require("grasseum_directory/module/directory")
}

exports.read = function(){
    return require("grasseum_directory/module/fs/read_file")
}

exports.write = function(){
    return require("grasseum_directory/module/fs/write_file")
}