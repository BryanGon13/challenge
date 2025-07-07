import React from 'react'
import css from './css/Content.module.css';

function PostItem({ posts }) {
    return posts.map((post, index) => (
        <div key={index} className={css.SearchItem}>
            <p>{post.title}</p>
            <p>{post.name}</p>
            <img src={post.image} alt={post.title} />
            <p>{post.description}</p>
        </div>
    ));
}

export default PostItem;



