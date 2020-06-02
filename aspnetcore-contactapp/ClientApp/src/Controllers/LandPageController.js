import $ from 'jquery'

/**
 * Toggle the navbar link with hide class using JQuery.toggleClass()
 */
export function toggleNavLinks(){
    setTimeout(()=>{
        $(".nav-links").toggleClass("hide")
    } , 100)
}