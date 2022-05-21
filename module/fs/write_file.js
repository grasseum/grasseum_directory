const fs = require("fs");
const structkit = require("structkit");

exports.writeFile= async function (src, data, func) {

    await fs.writeFile(src, data, function (err) {

        if (structkit.has(func)) {

            func({"error": err});

        }

    });

};

exports.createFileIfNotExist = function (src, data, func) {

    fs.access(src, fs.constants.F_OK, (error) => {

        try {

            exports.writeFile(src, data, func);

        } catch (exception) {

            func({error,
                "is_exist": true});

        }

    });

};

exports.writeStream= function (src, content, action) {

    const action_config = structkit.varExtend({
        "attr": {}
    }, action);


    const data = fs.createWriteStream(src, action_config.attr);

    data.write(content);

};
