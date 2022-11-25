import Home from "../views/Home.js";

const getTodos = (ctx) => {
  try {
    const rows = ctx.db.prepare(`SELECT * FROM todos`).all();
    ctx.body = Home({ title: "Welcome to koa", rows });
  } catch (err) {
    ctx.status = 500;
    ctx.body = "Server Error. Try again later";
  }
};

const createTodo = (ctx) => {
  const { body } = ctx.request;

  try {
    const stmt = ctx.db.prepare(
      `INSERT INTO todos VALUES (:id, :todo, :completed)`
    );

    stmt.run({ id: null, ...body, completed: "FALSE" });

    ctx.redirect("/");
  } catch (err) {
    ctx.status = 500;
    ctx.body = "Server Error. Try again later";
  }
};

const deleteTodo = (ctx) => {
  const { id } = ctx.request.body;
  try {
    const stmt = ctx.db.prepare(`DELETE FROM todos WHERE id = :id`);
    stmt.run({ id });
    ctx.body = { message: "success" };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Server Error" };
  }
};

export default {
  getTodos,
  createTodo,
  deleteTodo,
};
