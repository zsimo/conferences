const configJson = require('../configs/config').apps[0];

const stringReplaceReplacements = (env) => {
    let replacements = [];
    if (env.minify) {
        replacements = [
            {
                pattern: /([app|App])\.([js|css])/g,
                replacement: '$1.min.$2',
            },
        ];
    }
    return replacements;
};

module.exports = {
    all: {
        files: {
            'public/': '<%= paths.public.root %>/*.html',
        },
        options: {
            replacements: stringReplaceReplacements(configJson.env),
        },
    },
};
