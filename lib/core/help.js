const { program } = require('commander');

// 执行long --help所提示的信息
const helpOptions = () => {
    program.option('-l, --long', 'a long cli')
}

module.exports = helpOptions