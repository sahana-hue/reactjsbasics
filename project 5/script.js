document.getElementById("load-btn").addEventListener("click",()=> {
    document.getElementById("status").innerText="loading...";
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data Loaded");
        },2000);
    }); 
    promise.then((data) => {
        document.getElementById("status").innerText = data;
    }); 
})