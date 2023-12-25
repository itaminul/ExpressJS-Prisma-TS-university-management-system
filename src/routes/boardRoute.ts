import  express  from "express";
import { BoardController } from "../controller/board/boardController";
const router = express. Router();
const boardController = new BoardController();
router.route('/').get(boardController.getall);
router.route('/').get(boardController.create);
router.route('/:id').get(boardController.update);
export default router;