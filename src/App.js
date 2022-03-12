//packages
import { Routes, Route, Link } from "react-router-dom";
//components
import RepoList from './page/RepoList'
import Home from './page/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:username/repos" element={<RepoList />} />
    </Routes>
  );
}

export default App;
