import * as React from 'react';
import AddBookWrapper from './styled';
import Header from '../header';
import Button from '../button';

const AddBook = () => {
    return (
        <div>
            <Header />
            <AddBookWrapper>
                <input type='text' id='title' placeholder='Book title ...'/>
                <img src='https://media1.popsugar-assets.com/files/thumbor/6j4QtP0kTb0cNF9A7vvMG2lWzbc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/03/18/739/n/1922283/c460649f5c8fcb249041a7.72354065_/i/JK-Rowling-Backlash-LGBTQ-Inclusion-Comments.jpg' />
                <Button PRIMARY value="Add" />
                <Button PRIMARY value="Cancel" />
            </AddBookWrapper>
        </div>
    );
};

export default AddBook;