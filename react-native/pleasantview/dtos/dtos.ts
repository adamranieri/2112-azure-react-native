export interface Book{
    id: string 
    title: string 
    author: string 
    isCheckedout: boolean
    returnDate: number // makes dates numbers and store them as unix epoch time
}