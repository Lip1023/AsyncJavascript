const getTodos = (callback) => {
// XML is all the types of data 
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // request is complete and successful
    if(request.readyState===4 && request.status ===200){
        // take json string to js object
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
    }
    // request is complete but data request is not successful
    else if(request.readyState=== 4){
        callback('could not fetch data', undefined);
    }
})

request.open('GET', 'todos.json');
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

