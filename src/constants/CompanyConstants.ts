import {CompanyContent} from 'interfaces/CompanyInterfaces'
import {general} from 'constants/GeneralConstants'

export const orverViewContents : ReadonlyArray<CompanyContent> = [
    {title:"創業",        list:["昭和22年4月"]},
    {title:"設立",        list:["昭和29年1月"]},
    {title:"資本金",      list:["2000万円"]},
    {title:"役員",        list:["代表取締役会長　清水　洋","代表取締役会長　清水　久則"]},
    {title:"主要取引銀行",list:["みずほ銀行　なんば支店","三菱UFJ銀行　上六支店","20日締め翌日15日支払い"]},
    {title:"所在地",      list:["〒" + general.POSTAL_CODE, general.ADDRESS]},
    {title:"連絡先",      list:["電話: " + general.PHONE_NUMBER,"FAX: " + general.FAX_NUMBER,"e-mail: " + general.EMAIL]},
    {title:"従業員数",    list:["12名"]},
]

export const historyContents : ReadonlyArray<CompanyContent> = [
    {title:"昭和22年", list:["清水久男、谷町９丁目にて創業"]},
    {title:"昭和29年", list:["清水建材株式会社　設立　資本金80万円","代表取締役　清水　国子"]},
    {title:"昭和42年", list:["大阪市南区谷町９丁目１番　自社ビル2F建て完成"]},
    {title:"昭和49年", list:["建築業登録　とび・大工・コンクリート","工事業大阪府知事（般ー４８）第１５０５０号　工事部門充実","資本金320万円に増資"]},
    {title:"昭和50年", list:["資本金640万円に増資"]},
    {title:"昭和63年", list:["資本金900万円に増資"]},
    {title:"平成元年", list:["大阪府知事（般ー６３）第１５０５０号"]},
    {title:"平成02年", list:["大阪市中央区谷町９丁目２番１号に移転　自社ビル5F建て完成","清水　洋　代表取締役就任"]},
    {title:"平成04年", list:["資本金1000万円に増資"]},
    {title:"平成26年", list:["資本金2000万円に増資"]},
    {title:"平成31年", list:["清水　久則　代表取締役就任　新組織にて現在に至る"]},
]