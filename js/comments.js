const comment = function () {
    let elCommentTemplate = document.querySelector("#comment-template").content;

    let newCommentFragment = document.createDocumentFragment();

    /*=========================*/
    function renderComment(obj) {
        let elComment = elCommentTemplate.cloneNode(true);

        elComment.querySelector(".js-comment__title").textContent = `${obj.name}`;
        elComment.querySelector(".js-comment__email").href = `mailto:${obj.email}`;
        elComment.querySelector(".js-comment__email").textContent = `${obj.email}`;
        elComment.querySelector(".js-comment__body").textContent = `${obj.body}`;

        newCommentFragment.appendChild(elComment);
    };

    /*=========================*/
    function eachComment(array) {
        array.forEach((obj) => {
            if (obj.postId == idPost)
                renderComment(obj);
        });

        elCommentList.appendChild(newCommentFragment);
    };

    /*=========================*/
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then((res) => res.json())
        .then((data) => eachComment(data));
};