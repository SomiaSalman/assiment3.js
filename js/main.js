var bookMarkName=document.getElementById('nameInput');
var bookMarkUrl=document.getElementById('urlInput');
var alertLayer=document.getElementById('layer');
var closeBtn=document.getElementById('closeBtn');
var linksList=[];

function isValidUrl(){
    // var url = document.getElementById("urlInput").value;
    var url=bookMarkUrl.value;
    var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (url != "") {
        if (regex.test(url)==true) {
            return true;
            // alert("Please enter valid url.");
        } else {
            return false;
            // window.location.assign(url);

        }
    }
}
if (localStorage.getItem('links')!=null){
    linksList=JSON.parse(localStorage.getItem('links'));
    display();
}
////////close box
function closeBox(){
    alertLayer.style.display='none';
}
///////create function
function create(){
    if (isValidUrl()==true){
    var link={
        name:bookMarkName.value ,
        visit:bookMarkUrl.value,
    }
    linksList.push(link);
    isValidUrl()
    display();
    }
    else{
        // alert('enter valid email');
        alertLayer.style.display ='block' 
    }
    clear();

}

/////////display function
function display(){
    var cartona=``;
    for(var i=0; i<linksList.length;i++){
        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${linksList[i].name}</td>
        <td><button class="btn btn-outline-warning" onclick="visit()">
        ${linksList[i].visit}
        <i class="fa-solid fa-eye pe-2 mx-2"></i>visit</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteLink(${i})"><i class="fa fa-trash"></i></button></td>
        </tr>
        `
    }
    document.getElementById('tableBody').innerHTML=cartona;
    localStorage.setItem('links',JSON.stringify(linksList));
}
////////visit function
function visit(){
    // bookMarkUrl.value;
    window.open(bookMarkUrl.value,'_blank')
// window.location(bookMarkUrl.value)
}
console.log(bookMarkUrl.value)

// ${linksList[i]}

/////////clear function
function clear(){
bookMarkName.value='';
bookMarkUrl.value='';
}

///////delete function
function deleteLink(index){
    linksList.splice(index,1);
    localStorage.setItem('links',JSON.stringify(linksList));

    display()
}
//validation code
// function isValidUrl(){
//     // function isUrlValid(urlInput) {
//         var res = urlInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
//         if(res == null)
//             return false;
//         else
//             return true;
// }
// function isValidUrl(){
// //     var url='/docs/web';
// //     var base="https://developer.mozilla.org";
// // URL.canParse(url,base);
// if(bookMarkUrl.value=1109(https:\/\/www\.|http:\/\/www\.|www\.)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{2,5}$){

// }

// }
// ^(https:\/\/www\.|http:\/\/www\.|www\.)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{2,5}$

    
    // else {
    //     alert("Please upload an image.");
    // }
