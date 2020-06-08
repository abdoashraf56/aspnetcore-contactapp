import Data from '../../src/Data.json'
import authService from '../components/api-authorization/AuthorizeService'

export async function GetContactData(){
    // const response = await fetch('api/contact')
    // const data = await response.json();
    const token = await authService.getAccessToken();
    const response = await fetch('api/contact', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    return await response.json();
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