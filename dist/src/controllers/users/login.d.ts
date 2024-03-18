import type { RequestType } from "../../types/RecResTypes";
import type { Response } from "express";
/**
 * @route POST /api/user/login
 * @desc Логин
 * @access Pablic
 */
declare const login: (req: RequestType, res: Response) => Promise<Response<any, Record<string, any>>>;
export default login;
