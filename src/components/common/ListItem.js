import React from 'react';
import styled from 'styled-components';

const ListItem = ({id, label, isCompleted, toggleTask}) => (
    <Row onClick={() => toggleTask(id)}>
        <div>{label}</div>
        <Circle isCompleted={isCompleted}/>
    </Row>
);

const Row = styled.div`
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #fafafa; 
    display: flex;
    justify-content: space-between;
    transition: all 300ms;
    cursor: pointer;
    
    &:hover {
        background: #fafafa;
    }
`;

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid ${({isCompleted}) => isCompleted ? 'green' : 'red'};
`;


export default ListItem;