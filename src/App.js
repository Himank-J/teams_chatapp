import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

const projectID = 'a9fd9194-5850-4d03-874f-5c2dd30c3177';
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(
        <ChatEngine
            height = '100vh'
            projectID = {projectID}
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;
