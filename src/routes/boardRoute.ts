import  express  from "express";
import { BoardController } from "../controller/board/boardController";
import { boardCreateValidation, boardUpdateValidation } from "../validation/boardValidation";
const router = express. Router();
const boardController = new BoardController();
router.get('/', boardController.getall);
router.post('/', boardCreateValidation(), boardController.create);
router.patch('/:id', boardUpdateValidation(), boardController.update);
export default router;