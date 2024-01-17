


//reading from the json file
var posts = [];
var post_num = 0;
fetch('json/posts.json').then(response => response.json()).then(data => {
    var post_section = document.getElementById("thread_");
    posts = data;

    posts.forEach(post => {
        comment_pics = [];
        post.comments.forEach(comment => {
            comment_pics.push(comment.profile_pic);
        });
        post_pics = [];
        post.post_images.forEach(pic => {
            post_pics.push(pic.image);
        });

        post_section.innerHTML += post_(post_num,post.name, post.profile_pic, post.post_text, post_pics, post.post_time, post.likes, comment_pics, post.liked, post.comments.length);
        post_num++;
        
        //post_section.innerHTML+=post_(post.name,post.profile_pic,post.post_text,post.post_img_num,post.post_image,post.post_time,post.likes,post.comments,post.comment_pics);
    });

});


//adding the posts to the page
function post_(post_num, name, profile_pic, post_text, post_image, post_time, likes, comment_pics, liked, comment_length) {
    var post_template = `        <div class='thread-post'>
    <div class='profile-images'>
        <div class='post-user'>
            <img src='`+ profile_pic + `' alt='profile'>
        </div>
        <div class='comment-users'>
            <img src='`+ comment_pics[0] + `' alt='profile'>
            <img src='`+ comment_pics[1] + `' class='other' alt='profile'>
            <img src='`+ comment_pics[2] + `' class='other' alt='profile'>
        </div>
    </div>
    <div class='post-container'>
        <div class='post-header'>
            <div class='username'>
                `+ name + `
            </div>
            <div class='side-items'>
                <div id='timepast' class='timepast'>
                    `+ post_time + `
                </div>
                <div class='more'>
                    <svg width='800px' height='800px' viewBox='0 0 24 24' fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M8 12H8.01' stroke='#323232' stroke-width='2' stroke-linecap='round'
                            stroke-linejoin='round' />
                        <path d='M12 12H12.01' stroke='#323232' stroke-width='2' stroke-linecap='round'
                            stroke-linejoin='round' />
                        <path d='M16 12H16.01' stroke='#323232' stroke-width='2' stroke-linecap='round'
                            stroke-linejoin='round' />
                    </svg>
                </div>
            </div>
        </div>
        <div class='post-context'>
            `+ post_text + `</div>
        <div class='post-images'>
            `;
    if (post_image.length == 1) {
        post_template += `<img src='` + post_image[0] + `' class="ones"alt="profile">`;
    }
    else {
        for (let index = 0; index < post_image.length; index++) {
            post_template += `
            <img src='`+ post_image[index] + `' class='threes' alt='profile'>
            `;
        }
        ;
    }
    post_template += `
        </div>
        <div class='post-react'>
            <div id='like`+ post_num + `' class='react like `;
    if (liked) {
        post_template += `liked`;
    } else {
        post_template += `unliked`;
    }

    post_template += `' onclick="like_btn(`+post_num+`)">
                <svg ' height='800px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z' />
                </svg>
            </div>
            <div class='react comment'>
                <svg width='800px' height='800px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    
                    <title>message [#1579]</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                
                </defs>
                    <g id='Page-1' stroke='none' fill='white' stroke-width='1' fill='none' fill-rule='evenodd'>
                        <g id='Dribbble-Light-Preview'  fill='white' transform='translate(-60.000000, -919.000000)' fill='#000000'>
                            <g id='icons' transform='translate(56.000000, 160.000000)'>
                                <path d='M13.9577278,759 C7.99972784,759 3.26472784,764.127 4.09472784,770.125 C4.62372784,773.947 7.52272784,777.156 11.3197278,778.168 C12.7337278,778.545 14.1937278,778.625 15.6597278,778.372 C16.8837278,778.16 18.1397278,778.255 19.3387278,778.555 L20.7957278,778.919 L20.7957278,778.919 C22.6847278,779.392 24.4007278,777.711 23.9177278,775.859 C23.9177278,775.859 23.6477278,774.823 23.6397278,774.79 C23.3377278,773.63 23.2727278,772.405 23.5847278,771.248 C23.9707278,769.822 24.0357278,768.269 23.6887278,766.66 C22.7707278,762.415 18.8727278,759 13.9577278,759 M13.9577278,761 C17.9097278,761 21.0047278,763.71 21.7337278,767.083 C22.0007278,768.319 21.9737278,769.544 21.6547278,770.726 C20.3047278,775.718 24.2517278,777.722 19.8237278,776.614 C18.3507278,776.246 16.8157278,776.142 15.3187278,776.401 C14.1637278,776.601 12.9937278,776.544 11.8347278,776.236 C8.80772784,775.429 6.49272784,772.863 6.07572784,769.851 C5.40472784,764.997 9.26872784,761 13.9577278,761 L13.9577278,761' id='message-[#1579]'>
                
                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class='react repost'>
                
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                    stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                    <path d='M17 2l4 4-4 4' />
                    <path d='M3 11v-1a4 4 0 014-4h14' />
                    <path d='M7 22l-4-4 4-4' />
                    <path d='M21 13v1a4 4 0 01-4 4H3' />
                </svg>
            </div>
            <div class='react share'>
                <svg width='800px' height='800px' viewBox='0 0 28 28'  xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='M26.8908 3.63751C27.4296 2.02234 25.8325 0.515487 24.2514 1.14736L23.7584 1.34438L2.05498 8.09216C0.775656 8.48991 0.61966 10.236 1.80825 10.8539L11.8128 16.0544C11.8453 16.0712 11.8781 16.0868 11.9113 16.1011C11.9255 16.1337 11.9408 16.166 11.9574 16.1978L17.1625 26.1935C17.7809 27.381 19.5286 27.2252 19.9267 25.947L26.6579 4.33542L26.8908 3.63751ZM4.2732 9.49616C4.10263 9.54919 4.08185 9.78221 4.24034 9.8646L12.281 14.0443C12.3584 14.0845 12.453 14.0699 12.5146 14.0083L22.2205 4.31105C22.3683 4.16341 22.2193 3.91657 22.0198 3.97859L4.2732 9.49616ZM18.5213 23.7312C18.4682 23.9016 18.2354 23.9224 18.153 23.7641L13.9694 15.7303C13.9291 15.6529 13.9437 15.5582 14.0055 15.4965L23.7117 5.79893C23.8594 5.65131 24.1061 5.80048 24.044 5.99989L18.5213 23.7312Z' fill='white' stroke='none'fill-rule='evenodd'/></svg>
            </div>
        </div>
        <div class='stats'>
            <div class='likenum' id='likenum`+post_num+`'>`+ likes + ` likes</div>
            <div class='sperator'><b>|</b></div>
            <div class='commentnum' id='commentnum'>`+ comment_length + ` comments</div>
        </div>
    </div>
    `;

    return post_template;
}

function like_btn(num){
    var like_btn=document.getElementById("like"+num);
    var like_num=document.getElementById("likenum"+num);
    like_btn.addEventListener("click",function(){
        if(this.classList.contains("liked")){
            this.classList.remove("liked");
            this.classList.add("unliked");
            like_num.innerHTML=parseInt(like_num.innerHTML)-1+" likes";}
        else{
            this.classList.remove("unliked");
            this.classList.add("liked");
            like_num.innerHTML=parseInt(like_num.innerHTML)+1+" likes";}
    });
}