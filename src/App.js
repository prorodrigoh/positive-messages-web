import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import MessageList from './components/MessageList';
import AddMessage from './components/AddMessage';

const { Content } = Layout

export const UserContext = createContext(null); 

function App() {
  return (
    <UserContext.Provider value={{}}>
      <Layout className='layout'>
        <Content>
          <Routes>
            <Route path='/add' element={<AddMessage />} />
            <Route path='/messages' element={<MessageList />}/>
          </Routes>
        </Content>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
