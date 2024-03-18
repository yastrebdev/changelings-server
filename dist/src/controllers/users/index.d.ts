/// <reference types="express" />
declare const users: {
    register: (req: import("@/types/RecResTypes").RequestType, res: import("express").Response<any, Record<string, any>>) => Promise<import("express").Response<any, Record<string, any>>>;
    login: (req: import("@/types/RecResTypes").RequestType, res: import("express").Response<any, Record<string, any>>) => Promise<import("express").Response<any, Record<string, any>>>;
    current: (req: import("@/types/RecResTypes").RequestType, res: import("express").Response<any, Record<string, any>>) => Promise<void>;
};
export default users;
