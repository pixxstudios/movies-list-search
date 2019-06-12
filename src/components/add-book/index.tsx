import * as React from 'react';
import AddBookWrapper from './styled';
import Header from '../header';
import { Button } from 'antd';
// import { PRIMARY } from '../button/variants';
import Multiselect from 'multiselect-dropdown-react';

const AddBook = props => {
    const image = null;

    const categories = [
        {
        name: 'Technical',
        value: 'technical'
        },
        {
          name: 'Programming',
          value: 'programming'
        },
        {
          name: 'Self Help',
          value: 'self_help'
        },
        {
          name: 'Fiction',
          value: 'fiction'
        },
        {
          name: 'Biography',
          value: 'biography'
        },
        {
          name: 'History',
          value: 'history'
        }];

    const onCancel = () => {
        props.history.push('/home');
    }

    const onCategoriesSelect = (cat) => {
        console.log(cat);
    }

    return (
        <div>
            <Header />
            <AddBookWrapper>
                <img src='https://media1.popsugar-assets.com/files/thumbor/6j4QtP0kTb0cNF9A7vvMG2lWzbc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/03/18/739/n/1922283/c460649f5c8fcb249041a7.72354065_/i/JK-Rowling-Backlash-LGBTQ-Inclusion-Comments.jpg' />
                <input type='text' id='title' placeholder='Book title ...'/>
                <input type='author' id='author' placeholder='Book author ...'/>
                <Multiselect options={categories} onSelectOptions={onCategoriesSelect}/>
                <div>
                    <Button type="primary">Primary</Button>
                </div>
            </AddBookWrapper>
        </div>
    );
};

export default AddBook;