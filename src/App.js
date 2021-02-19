import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.component';
import Button from 'react-bootstrap/Button';

import ExercisesList from './components/exercises-list.component';
import EditExercises from './components/edit-exercises.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <br />
        <Route path="/" exact   component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create"   component={CreateExercise} />
        <Route path="/user"     component={CreateUser} />
        </div>
    </Router>
  );
}

export default App;
