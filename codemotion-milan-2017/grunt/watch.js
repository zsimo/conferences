module.exports = {
    javascripts: {
        files: [
            '<%= paths.source.javascripts %>/**/*.js',
            '<%= paths.source.javascripts %>/**/*.jsx',
        ],
        tasks: ['javascripts'],
        options: {
            spawn: false,
        },
    },
    stylesheets: {
        files: [
            '<%= paths.source.stylesheets %>/**/*.css',
            '<%= paths.source.stylesheets %>/**/*.less',
            '<%= paths.source.stylesheets %>/**/*.scss',
            '<%= paths.source.stylesheets %>/**/*.sass',
        ],
        tasks: ['stylesheets'],
        options: {
            spawn: false,
        },
    },
};
