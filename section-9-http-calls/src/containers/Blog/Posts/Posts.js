import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';

class Posts extends Component {
    state = {
        posts : []
    };

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId : id
        });
    }


    componentDidMount() {
        axios.get('/posts')
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
            })
            .catch(error => {
                this.setState({error : true});
            });
    }

    render() {
        let posts = <p style={{textAlign:'center'}}>Something went wrong!!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
            });
        }

        return (
            <section className="Posts">
            {posts}
            </section>
        );
    }
}

export default Posts;
