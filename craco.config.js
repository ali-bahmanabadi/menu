const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@footer': path.resolve(
                __dirname,
                './src/components/Footer/Footer'
            ),
        },
    },
    jest: {
        configure: {
            moduleNameMapper: {
                '^@components(.*)$': '<rootDir>/src/components$1',
            },
        },
    },
};
