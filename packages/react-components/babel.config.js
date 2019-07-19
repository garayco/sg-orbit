// @babel/preset-env and @babel/plugin-transform-runtime config has been greetly inspired by: https://github.com/facebook/create-react-app/blob/master/packages/babel-preset-react-app/create.js

module.exports = {
    presets: [
        [
            "@babel/preset-env"
            // {
            //     useBuiltIns: "entry",
            //     corejs: 3,
            //     modules: false
            // }
        ],
        [
            "@babel/preset-react",
            {
                useBuiltIns: true
            }
        ]
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        // [
        //     "@babel/plugin-transform-runtime",
        //     {
        //         corejs: false,
        //         regenerator: true,
        //         useESModules: true
        //     }
        // ],
        // To enable Webpack lazy loading. For more info: https://medium.com/walkme-engineering/when-magic-fails-a-programmer-grows-e3289ced0791.
        "@babel/plugin-syntax-dynamic-import",
        "babel-plugin-jsx-control-statements",
        "babel-plugin-react-require",
        "babel-plugin-transform-react-remove-prop-types",
        "styled-jsx/babel",
        [
            "babel-plugin-named-asset-import",
            {
                loaderMap: {
                    svg: {
                        "ReactComponent": "@svgr/webpack?-svgo,+ref![path]"
                    }
                }
            }
        ]
    ]
};
