import { Router, IRouter } from "express";
import TaskController from "../controllers/task.controller";

class TaskRouter {
  public _router: IRouter;
  public _taskController: TaskController;
  constructor() {
    this._router = Router();

    this._taskController = new TaskController();

    this.routes();
  }

  private routes() {
    this._router.get("/", this._taskController.taskIndex);
  }
}

export default TaskRouter;
