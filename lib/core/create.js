const { program } = require('commander');
const createProjectAction = require('./action');


// 创建命令行窗口指令
const createCommands = () => {
    program
        // 创建命令行指令
        .command('create <type> <project> [otherArgs...]')
        // 该指令的一些描述信息
        .description('clone a repository into a newly created directory')
        // 创建指令后的回调函数处理
        .action(createProjectAction);
}



module.exports = createCommands