import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getMyProfileRequest } from '../../slices/auth.slice';

function AuthRequired({ children }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const userId = useSelector(({ auth: { userData } }) => userData.id);

  useEffect(() => {
    dispatch(getMyProfileRequest());
  });

  return userId? children : <Navigate to="/log-in" state={{ from: location }} replace/>;
}

export default AuthRequired;