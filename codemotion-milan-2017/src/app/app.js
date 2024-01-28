import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClientComponent from './components/ClientComponent';

ReactDOM.render(
    <ClientComponent />,
    document.getElementById('root'));
