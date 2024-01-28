const webpack = require('webpack');
const _ = require('underscore');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const configJson = require('../configs/config').apps[0];

const entries = (env) => {
    const entry = {};
    const min = env.minify ? '.min' : '';
    _.map(['app'], (app) => {
        entry[`${app}${min}`] = `./<%= paths.source.javascripts %>/${app}`;
    });
    return entry;
};

module.exports = {
    options: {
        output: {
            path: '<%= paths.public.javascripts %>',
            filename: '[name].js',
        },
        // Important! Do not remove ''. If you do, imports without
        // an extension won't work anymore!
        resolve: {
            extensions: ['', '.js', '.jsx'],
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    // Enable caching for improved performance during development
                    // It uses default OS directory by default. If you need
                    // something more custom, pass a path to it.
                    // I.e., babel?cacheDirectory=<path>
                    loaders: ['babel?cacheDirectory'],
                },
            ],
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                include: /\.min\.js$/,
                minimize: true,
                compress: {
                    warnings: false,
                },
            }),
            new StringReplacePlugin(),
        ],
    },
    all: {
        entry: entries(configJson.env),
        debug: configJson.env.source_map,
        devtool: configJson.env.source_map ? 'source-map' : 'nosources-source-map',
        module: {
            loaders: [
                {
                    test: /.js$/,
                    loader: StringReplacePlugin.replace({
                        replacements: [
                            {
                                pattern: /%W_SOCK_DISPLAY_SUB_PATH%/ig,
                                replacement: () => { return configJson.env.W_SOCK_DISPLAY.SUB_PATH },
                            },
                        ],
                    }),
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(configJson.env.NODE_ENV),
                },
            }),
        ].concat(configJson.env.minify ? new webpack.optimize.UglifyJsPlugin() : []),
    },
};
