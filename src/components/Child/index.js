import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {useRouteMatch} from "react-router-dom";
import LazyComponent from "../Lazy";

const Child = (props) => {
    let {url} = useRouteMatch();
    return (
        <>
            <Link to={`${url}/one`}>One</Link><br/>
            <Link to={`${url}/two`}>Two</Link><br/>
            <Link to={'three'}>Three</Link><br/>
            <Link to={`${url}/lazy`}>Lazy Component</Link>
            <Route path={`${url}/one`} render={() => {
                return (<One/>)
            }}/>
            <Route path={`${url}/two`} render={() => {
                return (<Two/>)
            }}/>
            <Route path={`${url}/three`} component={Three}/>
            <Route path={`${url}/lazy`} component={LazyComponent}/>
        </>
    )
}

const One = () => {
    return (
        <h1>One</h1>
    )
}

const Two = () => {
    return (
        <h1>Two</h1>
    )
}

const Three = () => {
    return (
        <h1>Three</h1>
    )
}

export default Child