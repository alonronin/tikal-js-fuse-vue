import Dexie from 'dexie';

const db = new Dexie("feed");

db.version(1).stores({
  articles: "&uuid, title, url, text, author, published"
});

db.articles.bulkPut(require('./articles.json'));

export default db;
