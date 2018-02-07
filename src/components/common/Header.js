import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Header extends Component {

  onKeyPressHandle = ({which, target}) => {
    const {addTask} = this.props;

    if (addTask && which === 13) {
      addTask(target.value);

      this.el.value = '';
    }
  };

  render() {
    return (
      <div>
        <DateContainer>
          <Day>12</Day>
          <div>TUESDAY</div>
        </DateContainer>
        <SearchInput
          innerRef={(el) => this.el = el}
          placeholder="please enter a task"
          onKeyPress={this.onKeyPressHandle}/>
      </div>
    )
  }
}


const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 14px;
    color: #444;
`;

const Day = styled.div`
    font-size: 30px;
    color: #444;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid #e0e0e0;
    padding: 0 20px;
    box-sizing: border-box;
    font-size:16px;
`;


export default Header;


Header.propTypes = {
  addTask: PropTypes.func.isRequired
};