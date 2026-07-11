import React, { useState } from 'react';


export default function AuthPage () {
  const [name,setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (!isLogin) {
        try {
            const createUser = await fetch('http://localhost:5036/user/create-user', 
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    }, 
                    body: JSON.stringify({name,email,password})
                }
            )
            const response = await createUser.json()
            console.log(response)
            if (!createUser.ok) {
                return console.log('error')
            }
        } catch (error) {
            return console.log(error)
        }
    }

         if (isLogin) {
        try {
            const loginUser = await fetch('http://localhost:5036/user/login-user', 
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    }, 
                    body: JSON.stringify({email,password})
                }
            )
            const response = await loginUser.json()
            console.log(response)
            if (!loginUser.ok) {
                return console.log('error')
            }
        } catch (error) {
            return console.log(error)
        }
    };
  
  };

 


  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '40px',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      }}>
        
        {/* Header */}
        <h1 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '30px',
          fontSize: '28px',
        }}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {!isLogin&&<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#555',
            }}>
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex"
              disabled={loading}
              style={{
                padding: '12px 15px',
                border: '2px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '14px',
                transition: 'border-color 0.3s',
                outline: 'none',
                opacity: loading ? 0.7 : 1,
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>}
          
          {/* Email Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#555',
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={loading}
              style={{
                padding: '12px 15px',
                border: '2px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '14px',
                transition: 'border-color 0.3s',
                outline: 'none',
                opacity: loading ? 0.7 : 1,
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Password Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#555',
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={loading}
              style={{
                padding: '12px 15px',
                border: '2px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '14px',
                transition: 'border-color 0.3s',
                outline: 'none',
                opacity: loading ? 0.7 : 1,
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div style={{
              padding: '12px',
              background: '#fee',
              color: '#c33',
              borderRadius: '6px',
              fontSize: '14px',
              textAlign: 'center',
            }}>
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px',
              background: loading ? '#999' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              opacity: loading ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>

        {/* Toggle Auth Mode */}
        <div style={{
          textAlign: 'center',
          marginTop: '25px',
          fontSize: '14px',
          color: '#666',
        }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setEmail('');
              setPassword('');
            }}
            disabled={loading}
            style={{
              background: 'none',
              border: 'none',
              color: '#667eea',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              textDecoration: 'underline',
              fontSize: '14px',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
