var button=document.getElementById('btn');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('spn');
                span.innerHTML=counter.toString();
                
            }
        }
    }
    request.open('GET','http://aajay0288.imad.hasura-app.io/counter',true);
    request.sent(null);
}

