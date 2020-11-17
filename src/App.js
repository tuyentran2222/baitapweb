import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/CSS/body.css'
import Navbar1 from './Components/Navbar1'
import Body from './Components/body'
import Search from './Components/Search'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Login from './Components/login'
import './Components/CSS/news.css'
import News from './Components/new'
import './Components/CSS/navbar.css'
import './Components/CSS/Login.css'
import Info from './Components/Info'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         
      </BrowserRouter>
      
      <div>
        <BrowserRouter>
        <Search/>
        <Navbar1/>
          <Switch>
            <Route exact path="/" component={ Body}/>
            <Route path="/news" component={News}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
          
        </BrowserRouter>
        <Info></Info>
      </div>
      
     
    </div>
  );
}

export default App;
