import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts : []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let data = response.data.slice(0, 4);
                let updatedPosts = data.map(post => {
                    return {
                        ...post,
                        author: 'Matt'
                    };
                });
                this.setState({
                    posts : updatedPosts
                });
            });
    }

    render () {
        let posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} />
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
