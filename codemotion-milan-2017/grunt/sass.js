module.exports = {
    options: {
        sourceMap: true,
    },
    all: {
        files: {
            '<%= paths.public.stylesheets %>/app.css': '<%= paths.source.stylesheets %>/app.scss',
        },
    },
};
