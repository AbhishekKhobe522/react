import {useState, useEffect} from 'react'
import React from 'react'
import { getPosts, getRandomUsers } from './api'
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';

function App() {
  const [data, setData]=useState(null);
  const [users, setUsers] = useState(null);

  useEffect (()=>{
    getPosts().then((posts)=>setData(posts));
  }, []);

  useEffect(()=>{
    getRandomUsers().then((user)=>setUsers(user.results[0]));
  },[])
  const refresh = ()=>
  {getRandomUsers().then((user)=>setUsers(user.results[0]))};

  return (
    <div className="App">
      {users && <UserCard data={users}/>}
      <button onClick={refresh}>Refresh Button</button>
      {data ? data.map((e)=>  <PostCard title={e.title} body={e.body}/>) :<p>Not Data</p>}
    </div>
  )
};

export default App