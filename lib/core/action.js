const { promisify } = require('util');
const download = promisify(require('download-git-repo'));

const { NodeURL, VueURL } = require('./config')
const { commandSpawn } = require('../utils/terminal');


// 创建指令后的回调函数处理 （project为指令中的项目名 type为项目类型）
const createProjectAction = async (type, project, otherArg) => {
    console.log("long helps you create your project..............")
    // console.log(type, project, otherArg);

    // 1. 指定github中的URL进行clone
    let URL = ''
    if (type == 'node') {
        URL = `direct:${NodeURL}`
    } else if (type == 'vue') {
        URL = `direct:${VueURL}`
    }

    try {
        // 1. 指定github中的URL进行clone
        console.log('project cloning ...................');
        await download(URL, project, { clone: true })
        console.log('project clone success');


        // 2. 进入目录，并且执行`npm install`命令
        const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
        console.log('npm installing.......................');
        await commandSpawn(command, ['install'], { cwd: `./${project}` })
        console.log('npm install success');

        
    } catch (err) {
        console.log(err);
    }
}

module.exports = createProjectAction