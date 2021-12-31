const path = require('path')

module.exports = {
  resolve (dir = '') {
    return path.join(process.cwd(), dir)
  }
}
