const prefix = process.env.REACT_APP_PATH_PREFIX;

export class Paths {
    static readonly HOME      : string = prefix + "/#/home"
    static readonly WORK      : string = prefix + "/#/work"
    static readonly CONSTRUCT : string = prefix + "/#/construct"
    static readonly COMPANY   : string = prefix + "/#/company"
    static readonly HISTORY   : string = prefix + "/#/history"
    static readonly INQUIRY   : string = prefix + "/#/inquiry"
}