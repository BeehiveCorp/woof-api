import { Request, Response } from 'express';
// import { AppDataSource } from '../../data-source';

class FrequentlyAskedQuestion {
  async all(req: Request, res: Response) {
    res.send('Hello Azure');
  }

  async create(req: Request, res: Response) {}
}

export default new FrequentlyAskedQuestion();
