import random from 'lodash.random';
import samplesize from 'lodash.samplesize';
import data from './articles.json';
import db from './db';
import events from './events';

async function Init() {
  const data = await getData(10);
  await db.articles.bulkPut(data);

  events.emit('articles/added');
}

function getData(records) {
  return new Promise(function(resolve){
    setTimeout(
      ()=> resolve(
        samplesize(data, records)),
        random(300, 2000)
    );
  })
}

setInterval(Init, 5 * 1000);

Init();

