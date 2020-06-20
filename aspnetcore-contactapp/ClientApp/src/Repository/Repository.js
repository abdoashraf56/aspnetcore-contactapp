import authService from '../components/api-authorization/AuthorizeService'


/** 
 * It fetch the api {api/contact} Get and return with all contact in database
*/
export async function GetContactData(){
    const token = await authService.getAccessToken();
    const response = await fetch('api/contact', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    return await response.json();
}

/** 
 * It fetch the api {api/tag} Get and return with all tag in database
*/
export async function GetTagData(){
    const token = await authService.getAccessToken();
    const response = await fetch('api/tag', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    return await response.json();
}