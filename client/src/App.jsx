import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/Page";
import Home from './pages/Home';
import BrowseQuestions from './pages/BrowseQuestions';
import NotFound from './pages/NotFound';
import EditProfile from './pages/EditProfile';
import ViewProfile from './pages/ViewProfile';
import AskQuestion from './pages/AskQuestion';
import Question from './pages/Question';
import QuestionsList from "./components/QuestionsList";
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import AuthRequired from "./components/AuthRequired";
import NotAuthorized from "./components/NotAuthorized";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Page/>}>
            <Route index element={<Home/>}/>

            <Route path='/browse-questions' element={<BrowseQuestions/>}>
              <Route index element={<QuestionsList/>}/>
              <Route path=':questionId' element={<Question/>}/>          
            </Route>

            <Route path='/log-in' element={
              <NotAuthorized>
                <LogIn/>
              </NotAuthorized>
            }/>

            <Route path='/sign-up' element={
              <NotAuthorized>
                <SignUp/>
              </NotAuthorized>
            }/>

            <Route path='/ask-question' element={
              <AuthRequired>
                <AskQuestion/>
              </AuthRequired>
            }/>

            <Route path='/edit-profile' element={
              <AuthRequired>
                <EditProfile/>
              </AuthRequired>
            }/>

            <Route path='/view-profile' element={
              <AuthRequired>
                <ViewProfile/>
              </AuthRequired>
            }/>

            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;