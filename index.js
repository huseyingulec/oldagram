// array of objects called 'posts'
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21596
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 10987
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15224
    }
]

// selects the HTML element with class 'feed' and assign it to a variable called 'feed'
const feed = document.querySelector(".feed")

// selects the HTML element with class 'user-post' and assign it to a variable called 'userPost'
const userPost = document.querySelector(".user-post")

// create an empty string called 'listPost' to add posts later
let listPost = ""

// loops through each object in the 'posts' array and concatenate the relevant HTML code to the 'listPost' string
for(let i=0; i<posts.length; i++){
    listPost += `
    <div class="user-info">
        <img src="${posts[i].avatar}" class="user-avatar">
        <div>
            <p class="user-name">${posts[i].name}</p>
            <p class="user-location">${posts[i].location}</p>
        </div>
    </div>
        <img src="${posts[i].post}" class="user-post">
        <img src="images/icon-heart.png" class="icon-heart">
        <img src="images/icon-comment.png" class="icon-comment">
        <img src="images/icon-dm.png" class="icon-dm">
        <p class="post-likes">${posts[i].likes} likes</p>
        <p><span class="user-id">${posts[i].username}</span> <span class="user-comment">${posts[i].comment}</span></p>
    `
}

// sets the inner HTML of the 'feed' element to the 'listPost' string
feed.innerHTML = listPost
