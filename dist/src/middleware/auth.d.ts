import type { Response, NextFunction } from 'express';
import type { RequestType } from '../types/RecResTypes';
export declare const auth: (req: RequestType, res: Response, next: NextFunction) => Promise<void>;
