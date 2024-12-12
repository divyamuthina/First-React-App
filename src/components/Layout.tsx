import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Layout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        height: '100%',
      }}
    >
      <button style={{ outline: 'none' }} onClick={() => navigate('/')}>
        Home
      </button>
      <button onClick={() => navigate('/about')}>About</button>
      <Outlet />
    </div>
  );
};
