import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getMyProfileRequest } from '../../slices/user.slice';

function AuthRequired({ children }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const userId = useSelector(({ user: { userData } }) => userData.id);

  useEffect(() => {
    dispatch(getMyProfileRequest());
  });

  return userId? children : <Navigate to="/log-in" state={{ from: location }} replace/>;
}

export default AuthRequired;