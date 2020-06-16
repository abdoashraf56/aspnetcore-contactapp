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

export async function GetTagData(){
    // const response = await fetch('api/contact')
    // const data = await response.json();
    const token = await authService.getAccessToken();
    const response = await fetch('api/tag', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    return await response.json();
}