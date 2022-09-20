let table = document.querySelector(".t-body");

let btn = document.querySelector(".btn-primary");

let dltBtn = document.querySelector(".btn-danger");

async function getPosts() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/comments");
  let result = await posts.json();

  result.forEach((element) => {
    table.innerHTML += `<td>${element.postId}</td>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.body}</td>
    `;
  });
}

function deleteBtn() {
  table.innerHTML = "";
}

btn.addEventListener("click", function () {
  getPosts();
});

dltBtn.addEventListener("click", function () {
  deleteBtn();
});
