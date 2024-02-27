import {useState} from "react";
import {useLogin} from "../Hook/useLogin";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const {login, error, isLoading} = useLogin()

        const handleSubmit = async (e) => {
            e.preventDefault()

            await login(email, password)
        }
    }

    return (
        <form className="signup" onSubmit={handleLogin}>
            <h3>Log up</h3>

            <label>Email</label>
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default Login;
