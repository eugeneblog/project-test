module.exports = {
    extends: 'eslint:recommended',
    rules: {
        'no-console': 'warn',
        'no-unused-vars' : 'warn',
        'no-unexpected-multiline' : 'warn',
        'no-unreachable' : 'warn'
    },
    env: {
        jquery:true,
        es6:true,
        browser:true,
        node:true
    },
}
