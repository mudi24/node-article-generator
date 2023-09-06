import { mkdirSync, readFileSync, writeFileSync, existsSync} from 'fs';
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

import {generate} from './lib/generator.js';
import {createRandomPicker} from './lib/random.js';
import moment from 'moment';

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadCorpus(src) {
  const path = resolve(__dirname, src);
  const data = readFileSync(path, {encoding: 'utf-8'});
  return JSON.parse(data);
}

const corpus = loadCorpus('corpus/data.json');

const pickTitle = createRandomPicker(corpus.title);
const title = pickTitle();

const article = generate(title, {corpus});
// console.log(`${title}\n\n    ${article.join('\n    ')}`);

saveCorpus(title, article)


function saveCorpus(title, article) {
    const outputDir = resolve(__dirname, 'output');
    const time = moment().format('|YYYY-MM-DD|HH:mm:ss');
    const outputFile = resolve(outputDir, `${title}${time}.txt`);
    // 检查outputDir是否存在，没有则创建一个
    if(!existsSync(outputDir)) {
      mkdirSync(outputDir);
    }

    const text = `${title}\n\n    ${article.join('\n    ')}`;
    writeFileSync(outputFile, text); // 将text写入outputFile文件中

    return outputFile;
}

  

