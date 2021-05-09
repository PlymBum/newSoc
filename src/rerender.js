import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost,sendMessage, updatePostText,updateMessageText} from './redux/state'

export let rerenderEntireTree=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} a
                 ddPost={addPost}
                 sendMessage={sendMessage}
                 updatePostText={updatePostText}
                 updateMessageText={updateMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}