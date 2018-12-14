var a=document.getElementById("nav_img");
var firstDiv=document.getElementById("first_div");
var body=document.getElementsByTagName("body");

var second_div=document.getElementById("second_div");



a.onclick=function () {
    // alert("progress");
    // body[0].classList.add("sidebarOpen");
    document.body.classList.toggle("sidebsadasd");

}

// a.onblur=function(){
//     console.log("SDfsdf");
//     document.body.classList.remove("slidebarOpen");
// }

a.onclick=function (e) {
    // alert("progress");
    // body[0].classList.add("sidebarOpen");
    e.stopPropagation();
    document.body.classList.toggle("sidebarOpen");

}

console.log(second_div);
document.body.onclick=function(){
      document.body.classList.remove("sidebarOpen");
}

var a=[];
a.push(1);
// second_div.onclick = function(){
//      var classnames=document.body.getAttribute("class");
//      if(classnames!=null) {
//          // for (var i = 0; i < classnames.length; i++) {
//          //     console.log("triggered");
//          //     if (classnames[i] == "sidebarOpen") {
//                  document.body.classList.remove("sidebarOpen");
//              // }
//          // }
//      }
//
//      }


// var seconddiv=document.getElementById("second_div");
// seconddiv.onclick=function(){
//     document.body.classList.remove("sidebarOpen");
// }
document.getElementById("first_div");
document.getElementsByClassName("sidebarOpen");
document.getElementsByTagName("a");
