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

export const tripImages = [
    "https://i.kinja-img.com/gawker-media/image/upload/t_original/qvlyjleujgcy3gwqmcdr.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Travel-Backgrounds-Download-HD.jpg",
    "http://travelingcanucks.com/wp-content/uploads/2017/05/Traveling_Canucks_Travel_Photography_005.jpg",
    "https://www.stayful.com/wp-content/uploads/2018/06/Image_1-15.jpeg",
    "https://www.traveldailymedia.com/assets/2020/03/shutterstock_729336025.jpg"
];

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