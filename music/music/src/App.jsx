import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./components/Home";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import NotFound from "./components/NotFound";
import "./App.css";
function App() {
return (
<Router>
<div className="music-store-app">
<h1>Music Store Application</h1>
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/albums">Albums</Link></li>
<li><Link to="/artists">Artists</Link></li>
</ul>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/albums" element={<Albums />} />
<Route path="/artists" element={<Artists />} />
<Route path="*" element={<NotFound />} />
</Routes>
</div>
</Router>
);
}
export default App;