const elUserList = document.querySelector(".js-user");
const elPostList = document.querySelector(".js-post");
const elCommentList = document.querySelector(".js-comment");
let idUser = "";
let idPost = "";

let elUsersTemplate = document.querySelector("#user-template").content;

let newFragment = document.createDocumentFragment();

/*=========================*/
function renderUsers(obj) {
    let elUser = elUsersTemplate.cloneNode(true);

    elUser.querySelector(".js-user__name").textContent = `${obj.name} ${obj.username}`;
    elUser.querySelector(".js-user__email").textContent = `${obj.email}`;
    elUser.querySelector(".js-user__email").href = `mailto:${obj.email}`;
    elUser.querySelector(".js-user-address").textContent = `${obj.address['city']}: ${obj.address['street']} `;
    elUser.querySelector(".js-btn__post").value= `${obj.id}`;

    newFragment.appendChild(elUser);
};

/*=========================*/
function eachUsers(array) {
    array.forEach((obj) => {
        renderUsers(obj);
    });

    elUserList.appendChild(newFragment);

    let elItems = document.querySelectorAll(".js-btn__post");

    elItems.forEach(function (item, i) {
        item.addEventListener("click", () => {
            elPostList.innerHTML = ""
            elCommentList.innerHTML = ""
            post();
            idUser = item.value
        });
    });
};

/*=========================*/
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => eachUsers(data));
