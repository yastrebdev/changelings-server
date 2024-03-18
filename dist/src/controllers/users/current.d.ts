import type { RequestType } from "../../types/RecResTypes";
import type { Response } from 'express';
/**
 * @route POST /api/user/guest
 * @desc Создание гостя
 * @access Public
 */
declare const current: (req: RequestType, res: Response) => Promise<void>;
export default current;
