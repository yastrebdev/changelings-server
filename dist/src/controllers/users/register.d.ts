import type { Response } from 'express';
import type { RequestType } from '../../types/RecResTypes';
/**
 * @rout POST /api/user/register
 * @desc Регистрация
 * @access Pablic
 */
declare const register: (req: RequestType, res: Response) => Promise<Response<any, Record<string, any>>>;
export default register;
