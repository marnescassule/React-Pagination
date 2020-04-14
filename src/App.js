import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './components/posts';
import Pagination from './components/pagination';
import './App.css';
import './components/Tab/styles.scss'

import Tabs from './components/Tab/Tabs'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(()=> {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  
  //Change Page
  const paginate = pageNumber=> setCurrentPage(pageNumber)
  return (
    <>
      
      <div className='container mt-5'>
        <Tabs>
          <div label="Tab1">This is tabNumber1</div>
          <div label="Tab2">This is tabNumber2</div>
          <div label="Tab3">This is tabNumber3</div>
          <div label="Tab4">This is tabNumber4</div>          
        </Tabs>
        <h1 className="text-primary mb-3">My Blog</h1>
        <Post posts={currentPosts} loading={loading}/>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      </div>
    </>
  );
}

export default App;
