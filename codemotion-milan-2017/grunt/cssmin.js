const configJson = require('../configs/config').apps[0];

module.exports = configJson.env.minify ? {
    all: {
        options: {
            sourceMap: configJson.env.source_map,
        },
        files: [
            {
                expand: true,
                cwd: '<%= paths.public.stylesheets %>',
                src: ['*.css', '!*.min.css'],
                dest: '<%= paths.public.stylesheets %>',
                ext: '.min.css',
            },
        ],
    },
} : { all: {} };
