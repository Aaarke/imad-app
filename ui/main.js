var button= document.getElementById('counter');
button.onclick = function (){
    var request= new XMLHttpRequest();
    request.onreadystatechange= function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
            }
        }
        
    };
    request.open('GET','http://roshankumarroshi.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
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
names=JSON.parse(names);
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
    
    
