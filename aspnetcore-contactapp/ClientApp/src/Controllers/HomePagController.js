import { GetContactData ,  GetTagData} from '../Repository/Repository'

/**
 * Getting Contact data and tag data from Repository
 * @returns {Object} Contains required data
 */
export function getData() {
    const data = GetContactData()
    const tags = GetTagData()
    return {data , tags}
}