import { MOD_DATA } from "./data.js";


export const MOD_API_VERSION = "0.2";

/*
author: @IdealistCat
purpose: create a paragraph element for the page along with adding text to it.
*/
export function createParagraph(html='', id='') { 
    var paragraph = document.createElement('p');
    paragraph.innerHTML = html;
    paragraph.id = id;
    
    document.append(paragraph);
}

/*
author: @IdealistCat
purpose: create an image element for the page along with setting the source url.
*/
export function createImage(source='', ext="png", id="") { 
    var img = document.createElement('img');
    img.src = '/Site/Assets/modding/'+MOD_DATA.name+'/images/'+source+"."+ext;
    img.id = id;
    
    document.append(img);
}

/*
author: @IdealistCat
purpose: create a footer element for the page along with adding text to it.
*/
export function createFooter(html='', id="") { 
    var footer = document.createElement('footer');
    footer.innerHTML = html;
    footer.id = id;
    
    document.append(footer);
}

/*
author: @IdealistCat
purpose: replace a text element on the page
*/
export function replaceText(id='', html='') {
    var text = document.getElementById(id);
    text.innerHTML = html;
}

/*
author: @IdealistCat
purpose: replace an image element on the page
*/
export function replaceImg(id='', source='', ext='') {
    var image = document.getElementById(id);
    image.src = '/Site/Assets/modding/'+MOD_DATA.name+'/images/'+source+"."+ext;
}