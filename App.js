import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StandardsPage from "./components/StandardsPage";
import TopicPage from "./components/TopicPage";
import StandardContent from "./components/StandardContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StandardsPage />} />
        <Route path="/standard/:standardId" element={<TopicPage />} />
        <Route path="/standard/:standardId/:topicId" element={<StandardContent />} />
      </Routes>
    </Router>
  );
}

export default App;
