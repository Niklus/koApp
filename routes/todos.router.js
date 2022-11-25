import Router from "koa-router";
import todosController from "../controllers/todos.controller.js";

const router = Router();

router.get("/", todosController.getTodos);
router.post("/", todosController.createTodo);
router.delete("/", todosController.deleteTodo);

export default router;
