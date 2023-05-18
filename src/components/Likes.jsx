import { useState } from "react";

export const Likes = () => {
    console.log('Render Likes');
    const [likes, setLikes] = useState(0);
    console.log(likes);
    return <button onClick={likes + 1}>Likes</button>;
};