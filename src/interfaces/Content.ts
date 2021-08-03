export interface CompanyContent {
    title: string,
    list: ReadonlyArray<string> 
}

export interface ConstructContent {
    order: string,
    name: string,
    prefecture: string,
    date: string
}


export interface WorkImageContent {
    title: string,
    body: string,
    imageTitle: string,
    src: string
}

export interface WorkContent {
    title: string,
    body: string,
}

export interface HomeImageContent {
    title: string,
    src: string
}
