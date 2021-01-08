const webpack = require('@dolittle/vanir-webpack/frontend');
module.exports = (env, argv) => {
    return webpack(env, argv, '/_/something', config => {
        config.devServer.port = process.env.port || 9000;
        config.devServer.proxy = {
            '/_/something/graphql': 'http://localhost:3000',
            '/api': 'http://localhost:3000'
        };
    }, 'MyApp');
};
