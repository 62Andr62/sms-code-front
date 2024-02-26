/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const path = require('path')
/* eslint-disable-next-line @typescript-eslint/no-var-requires */

module.exports = {
configureWebpack (config) {
config.resolve.alias.src = path.resolve(__dirname, 'src')
config.resolve.alias.test = path.resolve(__dirname, 'test')
}

}