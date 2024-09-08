fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(usersArray => {
        console.log(usersArray)
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('container');


        for (const user of usersArray) {
            //Вивести id,name всіх user в index.html. Окремий блок для кожного user.
            let userTitleDiv = document.createElement('div');
            userTitleDiv.classList.add('user-block')
            let userTitle = document.createElement('h4');
            userTitle.innerText = `${user.id} - ${user.name}`


//Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
            let userDtlBtn = document.createElement('button');
            userDtlBtn.innerText = `Details about ${user.name}`
            userDtlBtn.addEventListener('click',function (){
                window.location.href = `user-detail.html?userId=${user.id}`;
            })


            userTitleDiv.append(userTitle,userDtlBtn)
            containerDiv.append(userTitleDiv)
        }
        document.body.append(containerDiv)
    });