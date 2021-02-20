import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Child from "./components/Child";
import UserContainer from "./contaieners/UserContainer";

function App() {

    return (
        <>
            <Router>
                <Header/>
                <UserContainer>
                    <div className="container" key={'hey'}>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/register'} component={Register}/>
                        <Route path={'/products'} component={Products}/>
                        <Route path={'/product/:id'} component={Product}/>
                        <Route path={'/child'} component={Child}/>
                    </div>
                </UserContainer>
            </Router>
        </>
    );
}

export default App;
