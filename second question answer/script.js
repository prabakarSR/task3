var json = [{
    "id" : "Prabakar", 
    "msg"   : "hello hi",
    "address" : "E-313 casagrand asta",
    "mail": "jerry@gmail.com"
},
{
    "id" : "jerry", 
    "msg"   : "bye",
    "address" : "no 10 tvk street",
    "mail": "thalapathy@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.address);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);

