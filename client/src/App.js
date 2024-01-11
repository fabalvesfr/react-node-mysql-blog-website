import "./App.css";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" className="link" style={{ marginRight: 20 }}>
            Main Page
          </Link>
          <Link to="/createpost" className="link">
            Create Post
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/:id" element={<Post />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
