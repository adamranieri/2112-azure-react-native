
```TypeScript

interface Book{
    id: string
    title: string
    author: string
    isCheckedout: boolean
    returnDate: number // makes dates numbers and store them as unix epoch time
}

interface Member{
    id: string
    username: string
    password: string
    isEmployee: boolean
}

```
- Normalized vs Emdedded data
    - Normalized data is when an entity/data record references another enitry via the ID
    - Emdedded data is when entities/data records are directly in the other enrity

```TypeScript

const adam = {
    fname: "Adam"
    lname: "Ranieri"
    phoneNumbers : [{type:"Home", num:"555-555-5555"},{type:"Work", num:"444-444-4444"}] // emdedded data
}

const steve = {
    fname: "Steve"
    lname: "Smith"
    phoneNumbers: [{phoneRecordId:"101"}, {phoneRecordId:"202"}] // normalized data references something else via an id
}

```