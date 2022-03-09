import React from 'react';
import ReactDOM from 'react-dom';
// import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
            <CommentDetail 
            author="Sam"  
            timeAgo="Today at 4:30" 
            blogByMe="Informative Blog"  
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
            author="Alex" 
            timeAgo="Today at 5:30" 
            blogByMe="Nice Blog" 
            /> 
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
            author="Jane" 
            timeAgo="Today at 6:30"
            blogByMe="Effective Blog" 
            />
            </ApprovalCard>
        </div>
    ) 
};

ReactDOM.render(<App />, document.querySelector('#root'));