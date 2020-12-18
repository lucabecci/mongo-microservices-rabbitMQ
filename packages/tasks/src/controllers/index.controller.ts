import { Request, Response } from 'express'

class IndexController {
    public getIndex =  (_req: Request, res: Response): Response => {
        return res.status(200).json({
          success: true,
          message: `Welcome to my api REST`
        });
      }
}



export default IndexController