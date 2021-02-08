import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
const App = () => {
    return(
        <ChatEngine
            height = '100vh'
            projectID = "a9fd9194-5850-4d03-874f-5c2dd30c3177"
            userName = "Himank_J"
            userSecret = "Himank09"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}

export default App;
