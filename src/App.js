import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Header from "./components/Header"


function App() {
  return (
   <Router>
     <Header></Header>
   </Router>
  );
}

export default App;
