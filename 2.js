const getTodos = (callback) => {
// XML is all the types of data 
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // request is complete and successful
    if(request.readyState===4 && request.status ===200){
        callback(undefined, request.responseText);
    }
    // request is complete but data request is not successful
    else if(request.readyState=== 4){
        callback('could not fetch data', undefined);
    }
})

request.open('GET', 'http://jsonplaceholder.typicode.com/todoss/');
request.send();
};
// convention wise err always comes first
getTodos((err, data)=>{
if(err){
console.log(err);}
else{
console.log(data)
}
});

