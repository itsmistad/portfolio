module.exports = {
    arrowParens: 'always',
    bracketSameLine: true,
    bracketSpacing: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 4,
    overrides: [
        {
            files: '*.yml',
            options: {
                tabWidth: 2,
            },
        },
    ],
};