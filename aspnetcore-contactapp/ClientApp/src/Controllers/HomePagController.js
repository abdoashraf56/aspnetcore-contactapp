import { GetContactData, GetTagData } from '../Repository/Repository'

/**
 * Getting Contact data and tag data from Repository
 * @returns {Object} Contains required data
 */
export async function getData() {
    const data = await GetContactData()
    const tags = await GetTagData()
    return { data, tags }
}

/**
 * Reading imag file and return byte[] of image
 * @param {Blob} file file which will be read
 * @returns {Promise} result of file 
 */
export function ReadImage(file) {
    return new Promise((resolve, reject) => {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onloadend = function(){
            var data = fileReader.result
            resolve(data)
        }

        fileReader.onerror = function(e){
            reject(e)
        }
    })
}