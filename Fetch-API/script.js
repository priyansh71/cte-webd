let i = 1;
const id = document.querySelector('#id');
const userid = document.querySelector('#userid');
const h2 = document.querySelector('h2');

const fillData = (data) => {
    h2.innerText = data.title;
    id.innerText = "ID : " + data.id;
    userid.innerText = ", User ID : " + data.userId;
}

const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + i)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fillData(data);
            i = i + 1
        })
        .catch(error => console.log(error));
}