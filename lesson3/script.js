
function addComment(comment_text) {
    const commentSection = document.querySelector('#comment-section');
    const newComment = document.createElement('li');
    newComment.innerText = comment_text;
    commentSection.appendChild(newComment);
}

const submitbutton = document.querySelector('#submit-button');

submitbutton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submit');
    const commentInput = document.querySelector('#comment');

    addComment(commentInput.value);

    commentInput.value = '';
});














function changeTitle() {
    title.innerText = 'This is a test!';
}

const title = document.getElementsByTagName('h1')[0];
setTimeout(changeTitle, 2000);



/*
const errorPopup = document.querySelector('.popup');
setInterval(() => {
    if(errorPopup.style.visibility === 'hidden') {
        errorPopup.style.visibility = 'visible';
    }
    else {
        errorPopup.style.visibility = 'hidden';
    }
}, 1500);
*/
