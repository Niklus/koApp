import koa from "koa";
import serve from "koa-static";
import bodyParser from "koa-bodyparser";

import db from "./database/db.js";
import todosRouter from "./routes/todos.router.js";
import notFound from "./controllers/error.controller.js";

const app = new koa();
const PORT = process.env.PORT || 3000;

app.context.db = db();

app.use(serve("public"));
app.use(bodyParser());
app.use(todosRouter.routes());
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
