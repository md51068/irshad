const http=require('http');

const server=http.createServer(callBackFuncton);
 
let a=[];
function callBackFuncton(req,res){
    if(req.method=='POST'){
        a.push(10);
        res.write(JSON.stringify(a));
    }
    else if(req.method=='PUT'){
        a[0]=2;
        res.write(JSON.stringify(a));
    }
    else if(req.method=='GET'){
        res.write(JSON.stringify(a));
    }
    else if(req.method=='DELETE'){
        a.pop();

    }
    res.end();
}

server.listen(3000,function(){
    console.log('Server started');
});