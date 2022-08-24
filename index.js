var xmlhttp = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";


xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myArr.length=20;
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function myFunction(arr) {
    // console.log(arr);
    for(var i=0;i<arr.length;i++){
        makeElement(arr[i].title,arr[i].url,arr[i].thumbnailUrl);
    }
}

var parent=document.getElementById("container");

function makeElement(title,url,thumbnailUrl){
    // console.log(title,url,thumbnailUrl);

    const para = document.createElement("p");
    const img = document.createElement('img');
    const div = document.createElement("div");
    img.src=thumbnailUrl;
    img.alt='image';
    img.onclick = ()=>window.open(`${url}`,'_newtab');
    para.innerHTML = title;

    div.appendChild(img);
    div.appendChild(para);
    div.classList.add("innnerContainer");


    parent.appendChild(div);
}



