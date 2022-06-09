const loaded = () => {
    div.innerText = "React Logo";
    document.querySelector('body').appendChild(div);
    console.log("Image loaded");
}

const didNotLoad = () => {
    div.innerText = "Error loading image";
    document.querySelector('body').appendChild(div);
    console.log("Image error");
}

//1

img.addEventListener('load', loaded);
img.addEventListener('error', didNotLoad);


//2
    setTimeout(() => {
        img.addEventListener('load', loaded);
        img.addEventListener('error', didNotLoad);
    },1000);

//3
setTimeout(() => {

    if(img.naturalWidth > 0) 
        loaded();
    else
        img.addEventListener('load', loaded);

    img.addEventListener('error', didNotLoad);
    }, 1000);

//4

    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(img.naturalWidth > 0) resolve();
            else reject();
        }, 1000);
    });

    newPromise.then(() => {
        loaded()
    }).catch(() => {
        didNotLoad()
    })

//Fetch API

console.log("Fetch started")
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
.then(data => {
    console.log(data);
}).catch(error => {
    console.log(error)
})
console.log("Fetch ended")

console.log("Hello world")