
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification=document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
//Selecting All the menu-item classes and storing them in a const variable
// "Const" is another keyword to declare a variable when you do not want to change the value of that variable for the whole program.

// ---------------------------const changeActiveItem-----------------------------//
//change "active" ("active"is a class name of home and settings) item is a function performing foreach loop
// and going through every item which was stored in menuItems and removing from the list of class which have "active" name

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        // Now when clicked it is going to remove all of active classes given in a html tag
        item.classList.add('active');
        // Now when clicked it is going to add "active class" only to the clicked menu-item


        //*************below if else condition not working properly their for it is commented************
        // if (item.id != notifications) {
        //     document.querySelector('.notications-popup').style.display = 'none';
        // }
        // else {
        //     document.querySelector('#notifications  .notification-count').style.display = 'none';
        //     document.querySelector('.notication-popup').style.display = 'block';
        // }

    })
})


// search chat

// $(document).ready( function(){

//     $(".menu-item").click ( function() {
//         $(".notications-popup").hide();
//     })

//   });

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};
let callback = (entries, observer) => {
    entries.forEach(entry => {

        if (entry.target.id == 'myvideo' || 'amv') {
            if (entry.isIntersecting) {
                entry.target.play();
            }
            else {
                entry.target.pause();
            }
        }
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#myvideo'));
observer.observe(document.querySelector('#amv'));

