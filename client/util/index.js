export const isTokenValid = (navigate) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
      return null;
    }
    return token? navigate('/dashboard') : navigate('/auth');
  };
  
  export const setToken = (token) => {
    localStorage.setItem('token', token);
  }