import React, {Component} from 'react';
import ListItem from './ListItem';
import Header from './Header';
import {findIndex} from 'lodash';
import styled from 'styled-components';


class TaskList extends Component {
  state = {
    items: [
      {id: '123-346', label: "first", isCompleted: false},
      {id: '123-345', label: "second", isCompleted: true},
      {id: '123-347', label: "third", isCompleted: false}
    ],
    open: true
  };

  genUuid = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };

  addTask = (label) => {
    this.setState({
      items: this.state.items.concat({
        id: this.genUuid(),
        label,
        isCompleted: false
      })
    });
  };

  toggleTask = (id) => {
    const newItems = this.state.items.slice(0);
    const pos = findIndex(newItems, {id});

    newItems[pos].isCompleted = !newItems[pos].isCompleted;

    this.setState({
      items: newItems
    });
  };

  render() {
    const {items, open} = this.state;
console.log(this);
    return (
      <Container open={open}>
        <Toggle onClick={() => this.setState({open: !this.state.open})}>collapse</Toggle>
        <Header addTask={this.addTask}/>
        {items.map((item) => <ListItem key={item.id} {...item} toggleTask={this.toggleTask}/>)}
      </Container>
    )
  }

}

const Container = styled.div`
    width: 400px;
    background: white;
    box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.54);   
    box-sizing: border-box;
    padding: 20px; 
    position: relative;
    max-height: ${({open}) => open ? 10000 : 60}px;
    overflow: hidden;
    transition: all 500ms;
`;

const Toggle = styled.div`
    height: 40px;
    background: blue;
    position: absolute;
    right: 0;
    top: 0;
`;

export default TaskList;