import {useState, useEffect} from "react";
import axios from "axios";

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(props)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
            email,
            password
        })
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return (
        <form action="#">
            <h1>Login</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login