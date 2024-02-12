const url="https://658620c245407f8ffc6e44c5.mockapi.io/api/mockdata/Employees";
let promise=fetch(url);
// console.log(promise);

promise.then((response) =>{
    // return response.json();})
    // .then((data) =>{console.log(data[2].Password);});
    return response.json();})
    .then((data) =>{
        
        data.forEach(element => {
            if (element.Password==96) {
                console.log(element)
            }
            
        });
        
        
    
    });