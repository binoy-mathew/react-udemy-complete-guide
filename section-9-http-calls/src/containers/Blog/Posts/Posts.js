import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
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
        console.log(this.props);
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
                return (
                    <Link to={this.props.match.url + '/' + post.id} key={post.id}>
                    <Post
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
                    </Link>
                        );
            });
        }

        return (
            <div>
            <section className="Posts">
            {posts}
            </section>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;
