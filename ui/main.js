var button= document.getElementById('counter');

//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit-btn');
submit.onclick=function(){
    //create a request object
var request= new XMLHttpRequest();
//capture the response and store it in a variable
request.onreadystatechange=function(){
    
    if(request.readystate===XMLHttpRequest.DONE){
        if (request.status===200){
            //capture a list of names and render it as list
            var names=request.responseText;
            names=JASON.parse(names);
var list='';
for(var i=0;i<names.length;i++){
    list+='<li>'+ names[i]+'</li>';
}
var ul =document.getElementById('namelist');
ul.innerHTML=list;

            
        }
    }
};

request.open('GET','http://roshankumarroshi.imad.hasura-app.io/sunmit-name?name='+name,true);
request.send(null);
};
    
    
