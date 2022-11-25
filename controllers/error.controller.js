import NotFound from "../views/NotFound.js";

const notFound = (ctx) => {
  ctx.status = 404;
  ctx.body = NotFound();
};

export default notFound;
