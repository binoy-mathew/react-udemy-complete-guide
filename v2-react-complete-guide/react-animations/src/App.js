import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false,
    };

    showModal = () => {
        this.setState({
            modalIsOpen: true,
        });
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
        });
    };

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <buttton className='Button' onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</buttton>
                {this.state.showBlock ? (
                    <div
                        style={{
                            backgroundColor: 'red',
                            width: 100,
                            height: 100,
                            margin: 'auto'
                        }}
                    ></div>
                ) : null}
                <br/>

                {this.state.modalIsOpen ? (
                    <Modal
                        show={this.state.modalIsOpen}
                        closed={this.closeModal}
                    />
                ) : null}
                {this.state.modalIsOpen ? <Backdrop /> : null}
                <button className="Button" onClick={this.showModal}>
                    Open Modal
                </button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
