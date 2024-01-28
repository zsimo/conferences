module.exports = {
    all: {
        files: [
            {
                expand: true,
                cwd: '<%= paths.source.root %>/html',
                src: ['**'],
                dest: '<%= paths.public.root %>/',
            },
        ],
    },
};
