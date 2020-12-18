import { Request, Response } from "express";

class TaskController {
  public taskIndex = (_req: Request, res: Response): Response => {
    return res.status(200).json({
      success: true,
      message: `Welcome to task section`,
    });
  };
}

export default TaskController;
