import {WorkImageContent,WorkContent} from 'interfaces/Content'

export const itemContents : ReadonlyArray<WorkImageContent> = [
    {
        title:"鉄鋼二次製品",
        body:"丸釘、針金、ナマシ線、一般鋼材、カラー平波板、溶接金網", 
        imageTitle:"iron",  
        src:"/iron.jpeg"
    },
    {
        title:"建材製品",
        body:"メタルラス、リブラス、クエント、ルーフィング、グレーチング、塩ビ波板ドレン、雨樋、面木、エアーネイラー、特殊釘、養生材、建設資材", 
        imageTitle:"material",  
        src:"/material.jpeg"
    },
    {
        title:"建材金物",
        body:"各種金物全般", 
        imageTitle:"hardware",  
        src:"/hardware.jpeg"
    },
    {
        title:"エクステリア",
        body:"各種フェンス、門扉、物置、ガレージ、自転車置場、ガードレール、防護柵", 
        imageTitle:"exterior",  
        src:"/exterior.jpeg"
    },
]

export const makerContents : ReadonlyArray<WorkContent> = [
    {
        title:"フェンス",
        body:"JFE建材フェンス(株)、朝日スチール工業(株)、積水樹脂(株)、(株)ニッケンフェンス&メタル", 
    },
    {
        title:"エクステリア",
        body:"(株)LIXIL、四国化成工業(株)、三協アルミ(株)、パナソニック(株)、YKK・AP(株)、(株)ダイケン、(株)稲葉製作所、(株)淀川製鋼書、帝金(株)、サンポール、(株)中部コーポレーション。タキロン(株)", 
    },
]

export const constructContents : ReadonlyArray<WorkImageContent> = [
    {
        title:"エクステリア",
        body:"ネットフェンス、メッシュフェンス、エキスパンドフェンス、目隠しフェンス、門扉、伸縮門扉、カーポート、自転車置場、バルコニー、テラス、物置、ガードレール、組み立てハウス、手摺", 
        imageTitle:"exterior",  
        src:"/exterior.jpeg"
    },
    {
        title:"防球ネット",
        body:"PCホール", 
        imageTitle:"net",  
        src:"/net.jpg"
    },
]