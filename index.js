#!/usr/bin/env node

// console.log('long cli');

const { program } = require('commander');
const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');


// 执行指定命令查看版本号(long -v / long --version)
program.version(require('./package.json').version, '-v, --version');

// 帮助选项(long --help)
helpOptions()

// 创建其他指令
createCommands()

// 在命令行窗口上解析（展现）
program.parse(process.argv)
