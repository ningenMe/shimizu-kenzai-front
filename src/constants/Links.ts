import {Link} from 'interfaces/Link'
import {Paths} from 'constants/Paths'

export class Links {
    static readonly HOME    : Link = {href:Paths.HOME,   name:"HOME"}
    static readonly COMPANY : Link = {href:Paths.COMPANY,name:"企業情報"}
    static readonly HISTORY : Link = {href:Paths.HISTORY,name:"沿革"}
    static readonly WORK    : Link = {href:Paths.WORK,   name:"事業内容"}
    static readonly INQUIRY : Link = {href:Paths.INQUIRY,name:"お問い合わせ"}
}