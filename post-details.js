const userId = new URLSearchParams(window.location.search).get('userId');

let divContainer = document.createElement('div');
divContainer.classList.add('posts-container');

if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(postsArray => {
            for (const post of postsArray) {
                let postInfo = document.createElement('div');
                postInfo.classList.add('post-info');

                let postTitle = document.createElement('h3');
                postTitle.innerText = `${post.id} - ${post.title}`;
                postTitle.style.backgroundColor = 'silver';

                let postTxt = document.createElement('p');
                postTxt.innerText = `${post.body}`;

                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(commentsArray => {
                        let commentsContainer = document.createElement('div');
                        commentsContainer.classList.add('comments-container');

                        for (const comment of commentsArray) {
                            let commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment');

                            let commentI = document.createElement('h4');
                            commentI.innerText = `Comment ID: ${comment.id} - ${comment.name}`;

                            let commentUI = document.createElement('p');
                            commentUI.innerText = `Email: ${comment.email}`;

                            let commentBody = document.createElement('p');
                            commentBody.innerText = `${comment.body}`;

                            commentDiv.append(commentI, commentUI, commentBody);
                            commentsContainer.append(commentDiv);
                        }

                        postInfo.append(commentsContainer);
                    });

                postInfo.append(postTitle, postTxt);
                divContainer.append(postInfo);
            }

            document.body.append(divContainer);
        });
}
