const post = function (id) {
    let elPostTemplate = document.querySelector("#post-template").content;

    let newPostFragment = document.createDocumentFragment();

    /*=========================*/
    function renderPost(obj) {
        let elPost = elPostTemplate.cloneNode(true);

        elPost.querySelector(".js-post__title").textContent = `${obj.title}`;
        elPost.querySelector(".js-post__body").textContent = `${obj.body}`;
        elPost.querySelector(".js-btn__comment").value = obj.id;

        newPostFragment.appendChild(elPost);
    };

    /*=========================*/
    function eachPosts(array) {
        array.forEach((obj) => {
            if (obj.userId == idUser)
                renderPost(obj);
        });

        elPostList.appendChild(newPostFragment);

        let elItems = document.querySelectorAll(".js-btn__comment")

        elItems.forEach(function (item) {
            item.addEventListener("click", () => {
                elCommentList.innerHTML = ""
                comment();
                idPost = item.value
            });
        });
    };

    /*=========================*/
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => eachPosts(data));
};