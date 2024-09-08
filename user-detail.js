const userId = new URLSearchParams(window.location.search).get('userId');

if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(value => value.json())
        .then(user => {
            // let containerDiv = document.createElement('div');
            // containerDiv.classList.add('container');
            // for (const user of usersArray) {
            //     let userDtlContainer = document.getElementById('user-details-container')
            //
            //     // let userTitleDiv = document.createElement('h5');
            //     // userTitleDiv.innerText = `${user.id} - ${user.name}`
            //
            //     userDtlContainer.innerText = `${user.id} ${user.name}`
            //
            //
            //     containerDiv.append(userDtlContainer)
            // }
            // document.body.append(containerDiv)

            let userDtlContainer = document.getElementById('user-details-container');

            let userTitleInfo = document.getElementById('userTitleTxt');
            userTitleInfo.innerText = `${user.id} - ${user.name}`;
            let userInfo = document.createElement('div');
            userInfo.classList.add('user-info');
            userInfo.innerHTML = `
                    <p>Email: ${user.email}</p>
                    <p>Username: ${user.username}</p>
                    <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                    <p>Company: ${user.company.name}</p>
                    <p>Catch Phrase: ${user.company.catchPhrase}</p>
                `;

            let postOfCurrentUser = document.createElement('button');
            postOfCurrentUser.classList.add('user-posts-btn');
            postOfCurrentUser.innerText = 'View User Posts';

            postOfCurrentUser.addEventListener('click', function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(value => value.json())
                    .then(postsArray => {
                        let postsContainer = document.createElement('div');
                        postsContainer.classList.add('posts-container');

                        postsArray.forEach(post => {
                            let postContainer = document.createElement('div');
                            postContainer.classList.add('post-container');

                            let postTitle = document.createElement('h4');
                            postTitle.innerText = `Post title: ${post.title}`;

                            let postDetails = document.createElement('button');
                            postDetails.innerText = 'Post Details';
                            postDetails.addEventListener('click', function () {
                                window.location.href = `post-details.html?postId=${post.id}`;
                            });

                            postContainer.append(postTitle, postDetails);
                            postsContainer.append(postContainer);
                        });

                        userDtlContainer.append(postsContainer);
                    });
            });

            userDtlContainer.append(userInfo, postOfCurrentUser);
        });
}
