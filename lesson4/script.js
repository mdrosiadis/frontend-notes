
function addComment(comment) {
    const commentSection = document.querySelector('#comment-section');
    const newComment = document.createElement('li');
    let author = comment.author;

    if(author === undefined)
        author = 'Anonymous';
    
    // newComment.innerHTML = '<b>' 
    //     + author + ': </b>' +
    //     comment.text;

    newComment.innerHTML = `<b>${author}:</b> ${comment.content}`;
    
    commentSection.appendChild(newComment);
}


// Φτίαξε μια λίστα απο σχόλια 
// και βάλτα με τη σειρά στην αννάλογη θέση
// const comments_data = [
//     'Wow! This is great!',
//     'I really like this!',
//     'Indeed!',
//     'LGTM'
// ]

// Τρόπος 1
/*
for(let i=0; i < comments_data.length; i++) {
    const comment = comments_data[i];
    addComment(comment);
}
*/

// Τρόπος 2
/*
for(let comment_index in comments_data) {
    const comment = comments_data[comment_index];
    addComment(comment);
}
*/

// Τρόπος 3
/*
for(let comment of comments_data) {
    addComment(comment);
}
*/

// Τρόπος 4
/*
comments_data.forEach(addComment);
// η
comments_data.forEach(comment => {
    addComment(comment);
});
*/

const comment_data = [
    {
        timestamp: 111111,
        author: 'Mike',
        content: 'This is my comment!'
    },
    {
        timestamp: 222222,
        author: 'Kostas',
        content: 'XD'
    },
    {
        timestamp: 33333,
        content: 'This should be anonymous.'
    }
];

comment_data.forEach(addComment);

for(let i=0; i < 5; i++) {
    fetch('http://api.quotable.io/random?maxLength=50')
    .then(res => res.json())
    .then(res_json => addComment(res_json))
    .catch(err => {
        const errorPopup = document.querySelector(".popup");
        errorPopup.style.visibility = 'visible';

        setTimeout((popup) => {
            popup.style.visibility = 'hidden'
        }, 2000, errorPopup);
    });

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
