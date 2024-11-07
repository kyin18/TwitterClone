// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/
type data = {username: string, content: string, timestamp: string, likes: number }

export default function Tweet ({username,content,timestamp,likes} : data){
    const [likeNum, editLikes] = useState(likes)
    const [isLiked, change] = useState(false)

    function handleClick(){
        if(isLiked){
            editLikes(likeNum - 1)
            change(false)
        }else{
            editLikes(likeNum + 1)
            change(true)
        }
    }

    return(
        <div className = 'tweet'>
            <h1>{username}</h1>
            <p>{content}</p>
            <h3>{timestamp}</h3>
            <button onClick = {handleClick}>{isLiked ? '❤️':'🤍'}{likeNum} Likes</button>
        </div>
    )


}



// export default Tweet;
