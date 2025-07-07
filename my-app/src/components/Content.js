import React, { Component } from 'react'
import data from '../posts.json';
import css from './css/Content.module.css'
import PostItem from './PostItem';



export class Content extends Component {

    constructor() {
        super()

    }

    render() {
        const savedPosts = data.savedPosts;
        return (
            <div className={css.Content}>Content
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    <PostItem posts={savedPosts} />
                </div>
            </div>
        )
    }
}

export default Content