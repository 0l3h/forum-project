import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import BrowseQuestions from './pages/BrowseQuestions';
import NotFound from './pages/NotFound';
import EditProfile from './pages/EditProfile';
import ViewProfile from './pages/ViewProfile';
import AskQuestion from './pages/AskQuestion';
import Question from './pages/Question';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/browse-questions' element={<BrowseQuestions/>}/>
          <Route path='/log-in' element={<LogIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/ask-question' element={<AskQuestion/>}/>
          <Route path='/edit-profile' element={<EditProfile/>}/>
          <Route path='/question' element={<Question/>}/>
          <Route path='/view-profile' element={<ViewProfile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;