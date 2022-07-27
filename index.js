import express from 'express';
import path from 'path';
const app = express();
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.listen(4000, () => {
  console.log('listenning on 4000');
});
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));
try {
  app.get('/:name', (req, res) => {
    //let restoName = req.params.name;
    return res.status(200).render('index');
  });
} catch (e) {
  console.log(e);
  throw new Error(e.message);
}
