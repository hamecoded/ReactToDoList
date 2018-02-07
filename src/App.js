import React, {Component} from 'react';
import TaskList from './components/common/TaskList';
import styled from 'styled-components';
import Modal from './components/common/Modal';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default class App extends Component {
  state = {
    open: false
  };

  toggleModal = () => {
    this.setState({open: !this.state.open})
  };

  render() {
    const {open} = this.state;

    return (
      <Container>
        <Router>
          <div>

            <Button onClick={this.toggleModal}>toggle modal</Button>
            <Modal isOpen={open} toggleModal={this.toggleModal}>
              <div>hello</div>
            </Modal>

            <Route exact path="/tasks" component={TaskList}/>
          </div>
        </Router>
      </Container>
    );
  }
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #f0efe9;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`;

const Button = styled.div`
    width: 200px;
    height: 40px;
    background: #444;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`;