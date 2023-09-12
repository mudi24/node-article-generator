// lib/cmd.js
import commandLineArgs from 'command-line-args'; // 用来处理命令中传入的参数
import commandLineUsage from 'command-line-usage';

const sections = [
  {
    header: '狗屁不通文章生成器',
    content: '生成随机的文章段落用于测试',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'title',
        typeLabel: '{underline string}',
        description: '文章的主题。',
      },
      {
        name: 'min',
        typeLabel: '{underline number}',
        description: '文章最小字数。',
      },
      {
        name: 'max',
        typeLabel: '{underline number}',
        description: '文章最大字数。',
      },
    ],
  },
];

const usage = commandLineUsage(sections); 

const optionDefinitions = [
  {name: 'help'},
  {name: 'title', type: String},
  {name: 'min', type: Number},
  {name: 'max', type: Number},
];

const options = commandLineArgs(optionDefinitions);

if('help' in options) {
  console.log(usage);
  process.exit();
}

export {options};


// const options = parseOptions()// 配置我们的命令行参数

// function parseOptions(options = {}) {
//     const argv = process.argv;
//     for(let i = 2; i < argv.length; i++) {
//       const cmd = argv[i - 1];
//       const value = argv[i];
//       if(cmd === '--title') {
//         options.title = value;
//       } else if(cmd === '--min') {
//         options.min = Number(value);
//       } else if(cmd === '--max') {
//         options.max = Number(value);
//       }
//     }
//     return options;
//   }