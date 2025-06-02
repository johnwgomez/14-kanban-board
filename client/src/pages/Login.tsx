import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom'; 
import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(''); 
    try {
      const data = await login(loginData);
      Auth.login(data.token);
      navigate('/'); 
    } catch (err: any) {
      console.error('Failed to login', err);
      setError(err.message || 'Login falhou. Verifique suas credenciais.'); 
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>} {}
        <h1>Login</h1>
        <label>Username</label>
        <input
          type='text'
          name='username'
          value={loginData.username || ''}
          onChange={handleChange}
          placeholder='...|' 
          required
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
          placeholder='...|' 
          required
        />
        <button className='login-button' type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;