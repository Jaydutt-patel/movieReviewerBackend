import app from './app';
import DB from './utils/db_conn';

const start = async () => {
  await DB();
  const port = 4000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

(async () => {
  await start();
})();
