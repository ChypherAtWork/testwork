import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      setPosts(await response.json());
    };

    fetchData();
  }, []);

  const fetchComments = async (postId) => setComments(await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)).json());

  const handleButtonClick = async (post) => {
    setSelectedPost(post);
    setShowModal(true);
    await fetchComments(post.id);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h1>User Model</h1>

      {posts.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <button className="btn btn-primary" onClick={() => handleButtonClick(post)}>
              Open Model Box
            </button>
          </div>
        </div>
      ))}

      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">User Model Box</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {selectedPost && (
                  <>
                    <h6>Comments:</h6>
                    <ul>
                      {comments.map((comment, index) => (
                        <li key={index}>{comment.body}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
