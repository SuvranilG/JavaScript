function fetchData(d) {
    setTimeout(()=>{
        d(22)
    },1000);
}

fetchData((data)=>{
    console.log(data);
    console.log(typeof data);
})