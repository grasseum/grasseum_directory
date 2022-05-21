const fs = require("fs");

exports.read_file_ut8= function (src, func) {

    fs.readFile(src, "utf8", function (err, data_s) {

        let ref_data = {

            data: "",
            file_name: src,
            is_file_exists: false
        };

        if (err === null) {

            ref_data = {

                data: data_s,
                file_name: src,
                is_file_exists: true
            };

            func(ref_data);

        } else {

            func(ref_data);

        }


    });

};
exports.readStream= function (src, func) {

    try {

        const list_content = [];
        const data_readstream = fs.createReadStream(src);

        data_readstream.on('data', function (chunk) {

            list_content.push(chunk);
            func({"per_line_data": chunk.toString()});

        });
        data_readstream.on("end", function () {

            func({"complete_data": list_content.join().toString()});

        });

    } catch (error) {

        func({error});

    }

};
