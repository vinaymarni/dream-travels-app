export const allSections = new Map([
    ["home", {title: "Home", name:"home", value: 1, path:"/"}],
    ["packages", {title: "Tours & Packages", name:"packages", value: 2, path:"/packages"}],
    ["gallery", {title: "Gallery", name:"gallery", value: 3, path:"/gallery"}],
    ["about", {title: "About Us", name:"about", value: 4, path:"/about"}],
    ["contact", {title: "Contact Us", name:"contact", value: 5, path:"/contact"}],
]);

// export const allSections = {
//     home: {title: "Home", name:"home", value: 1},
//     packages: {title: "Tours & Packages", name:"packages", value: 2},
//     about: {title: "About Us", name:"about", value: 3},
//     contact: {title: "Contact Us", name:"contact", value: 4},
// }

export const isNull = (object, value) => {
    if(object[value] == undefined || 
        object[value] == null || 
        object[value] == "" || 
        object[value] == '' ||
        object[value].length == undefined ||
        object[value].length < 1
    ){
        return false;             
    }else{
        return true;
    }
};