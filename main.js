const comments = [];

const inputContainer = document.createElement("div");
const input = document.createElement("input");
const commentsContainer = document.querySelector("#comments-container");

input.classList.add("input");

input.addEventListener("keydown", e =>{
    handleEnter(e, null);
});

commentsContainer.appendChild(inputContainer);
inputContainer.appendChild(input);

function handleEnter(e, current){
    if(e.key === "Enter" && e.target.value != ""){
        const newComment ={
            text: e.target.value,
            likes: 0,
            responses: []
        }
        if(current === null){
            comments.unshift(newComment);
        }else{
            current.responses.unshift(newComment);
        }

        e.target.value = "";
        commentsContainer.innerHTML = "";
        commentsContainer.appendChild(inputContainer);

        renderComments(comments, commentsContainer);
    }
}

function renderComments(arr, parent){
    arr.forEach((element) =>{
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("comment-container");

        const responsesContainer = document.createElement("div");
        responsesContainer.classList.add("responses-container");

        const replyButton = document.createElement("button");
        const likeButton = document.createElement("button");

        const textContainer = document.createElement("div");
        textContainer.classList.add("comment-text")
        textContainer.textContent = element.text;

        const actionsContainer = document.createElement("div");
        
        replyButton.textContent= "Reply";
        likeButton.textContent= `${element.likes > 0 ? `${element.likes} likes` : "like"}`;
        

        replyButton.addEventListener("click", (e) =>{
            const newInput = inputContainer.cloneNode(true);
            newInput.value ="";
            newInput.focus();
            newInput.addEventListener("keydown", (e) =>{
                handleEnter(e, element);
            });
            commentContainer.insertBefore(newInput, responsesContainer);
        })

        likeButton.addEventListener("click", (e) =>{
            element.likes++;
            likeButton.textContent =`${element.likes > 0 ? `${element.likes} likes` : "like"}`;
        });

        //append
        commentContainer.appendChild(textContainer);
        commentContainer.appendChild(actionsContainer);
        actionsContainer.appendChild(replyButton);
        actionsContainer.appendChild(likeButton);

        commentContainer.appendChild(responsesContainer);

        if(element.responses.length > 0){
            renderComments(element.responses, responsesContainer);
        }

        parent.appendChild(commentContainer);
    });
}


//form crete post



//post creator

class Post{
    constructor(text, img){
        this.text = text;
        this.img = img;
    }
}

class PostView{
    addPost(post){     
        const postList = document.querySelector("#postList");
        const newPost = document.createElement("div");
        newPost.innerHTML=`
            <div class="post">
                <div class="post-top">
                    <div class="user_img">
                        <img src="https://static.scientificamerican.com/sciam/cache/file/9CAE9C60-8BC5-4CA3-95C180EFACDD99FD.jpg" alt="">
                        <i class="fa-solid fa-circle"></i>
                        <div class="user">
                            <h2>Gato</h2>
                            <p>June 10 at 10:00 AM</p>
                        </div>
                    </div>
                    <button id="delete-post" class="post_menu">
                        <i class="fa-solid fa-close"></i>
                    </button>                
                </div>
                <div class="post-text">
                    <p>${post.text}</p>
                </div>
                <div class="post_img">
                    <img src="${post.img}" />
                </div>
                <div class="react">
                        <div class="react_emoji">
                            😆😡🥰 105k
                        </div>
                        <div class="react_info">
                            2k Comments 300 Shares
                        </div>
                    </div>
                    <hr color="#3a3b3c" width="90%" style="margin: auto;">
                    <div class="buttons">
                        <div>
                            <i class="fa-solid fa-thumbs-up"></i>
                            <p>Like</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-comment"></i>
                            <p>Comment</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-share"></i>
                            <p>Share</p>
                        </div>       
                    </div>
                    <hr color="#3a3b3c" width="90%" style="margin: auto;">
                        <div class="post_input">
                            <div class="input_img">
                                <img src="https://static.scientificamerican.com/sciam/cache/file/9CAE9C60-8BC5-4CA3-95C180EFACDD99FD.jpg" alt="">
                                <i class="fa-solid fa-circle"></i>
                            </div> 
                            <div id="comments-container"></div>
                            </div>           
                    </div>
        `
        postList.insertBefore(newPost, postList.firstChild);
        this.commentsPost();
        this.deletebtn();
    }

    commentsPost(){
        const comments = [];

const inputContainer = document.createElement("div");
const input = document.createElement("input");
const commentsContainer = document.querySelector("#comments-container");

input.classList.add("input");

input.addEventListener("keydown", e =>{
    handleEnter(e, null);
});

commentsContainer.appendChild(inputContainer);
inputContainer.appendChild(input);

function handleEnter(e, current){
    if(e.key === "Enter" && e.target.value != ""){
        const newComment ={
            text: e.target.value,
            likes: 0,
            responses: []
        }
        if(current === null){
            comments.unshift(newComment);
        }else{
            current.responses.unshift(newComment);
        }

        e.target.value = "";
        commentsContainer.innerHTML = "";
        commentsContainer.appendChild(inputContainer);

        renderComments(comments, commentsContainer);
    }
}

function renderComments(arr, parent){
    arr.forEach((element) =>{
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("comment-container");

        const responsesContainer = document.createElement("div");
        responsesContainer.classList.add("responses-container");

        const replyButton = document.createElement("button");
        const likeButton = document.createElement("button");

        const textContainer = document.createElement("div");
        textContainer.classList.add("comment-text")
        textContainer.textContent = element.text;

        const actionsContainer = document.createElement("div");
        
        replyButton.textContent= "Reply";
        likeButton.textContent= `${element.likes > 0 ? `${element.likes} likes` : "like"}`;
        

        replyButton.addEventListener("click", (e) =>{
            const newInput = inputContainer.cloneNode(true);
            newInput.value ="";
            newInput.focus();
            newInput.addEventListener("keydown", (e) =>{
                handleEnter(e, element);
            });
            commentContainer.insertBefore(newInput, responsesContainer);
        })

        likeButton.addEventListener("click", (e) =>{
            element.likes++;
            likeButton.textContent =`${element.likes > 0 ? `${element.likes} likes` : "like"}`;
        });

        //append
        commentContainer.appendChild(textContainer);
        commentContainer.appendChild(actionsContainer);
        actionsContainer.appendChild(replyButton);
        actionsContainer.appendChild(likeButton);

        commentContainer.appendChild(responsesContainer);

        if(element.responses.length > 0){
            renderComments(element.responses, responsesContainer);
        }

        parent.appendChild(commentContainer);
    });
}   
    }

    resetForm(){
        const addPost = document.querySelector("addPost");
        addPost.reset();
    }

    deletebtn(div){
        const deleteBtn = document.querySelector("#delete-post");
        const post = document.querySelector(".post")
        deleteBtn.addEventListener("click", (e)=>{
            post.remove()
        })
    }
}

//form event

const openForm = document.querySelectorAll("#open");
openForm.forEach((b)=>{
    b.addEventListener("click", (e) =>{
        addPost.remove();
    })   
})

const addPost = document.querySelector("#addPost");
addPost.addEventListener("submit", (e) =>{
    e.preventDefault();

   //obtener valores de inputs
   const text = document.querySelector("#text").value;
   const img = document.querySelector("#img").value;
   
   const post = new Post(text, img);
   //acceder addPost y dar un post
   const postView = new PostView();
   
   postView.addPost(post);
})
