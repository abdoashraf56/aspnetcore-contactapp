import Data from '../../src/Data.json'

export function GetContactData(){
    // const response = await fetch('api/contact')
    // const data = await response.json();
    return Data.sort((a , b) => a.firstName > b.firstName)
}

export function GetTagData(){
    // const response = await fetch('api/contact')
    // const data = await response.json();
    return [
        {id : 0 , tag : "ALL"},
        {id : 4 , tag : "Family"},
        {id : 1 , tag : "Co-Worker"},
        {id : 2 , tag : "Club Member"},
        {id : 3 , tag : "Kpop"},
    ]
}