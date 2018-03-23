import '../less/style.less'
import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../jsx/button';
import Timer from '../jsx/timer';
import State from '../jsx/state';
import TodoList from '../jsx/todolist'
import MarkdownEditor from '../jsx/markdown'
console.log('xxxx')

ReactDOM.render(<MarkdownEditor />, document.getElementById('root'));

