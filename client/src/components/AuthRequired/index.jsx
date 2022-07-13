import React from 'react';
import { Navigate } from 'react-router-dom';

function AuthRequired({ children }) {
    const user = undefined;

    return user? children : <Navigate to="/log-in"/>;
}

export default AuthRequired;