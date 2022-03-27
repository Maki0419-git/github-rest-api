//packages
import { Routes, Route, Link } from "react-router-dom";
//components
import RepoList from './page/RepoList'
import Home from './page/Home';
import Repo from './page/Repo';
import NotFound from './page/NotFound'


function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/users/:username/repos" element={<RepoList />} />
      <Route path="/users/:username/repos/:repo" element={<Repo />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
