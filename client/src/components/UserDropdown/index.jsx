import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from '../../images/default-avatar.svg'
import dropdownOpenIcon from '../../images/dropdown-open-icon.svg'
import dropdownCloseIcon from '../../images/dropdown-close-icon.svg'
import LoadingSpinner from '../LoadingSpinner';
import { logOutRequest } from '../../slices/user.slice';

function UserDropdown() {
    const userData = useSelector(({ user: { userData } }) => userData);
    const isFetching = useSelector(state => state.user.isFetching);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);

    const toggleMenu = () => setIsOpen(isOpen => !isOpen);
    const dispatch = useDispatch();
    const logOut = () => dispatch(logOutRequest());

    useEffect(() => setIsOpen(false), [location.pathname]);
    useEffect(() => {
        const handleClick = (event) => {
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [menuRef]);
    
    return (
        <section ref={menuRef}>
            {
                isFetching?
                    <LoadingSpinner/>
                    :
                    <>
                        <button onClick={toggleMenu}>
                            <img src={isOpen? dropdownCloseIcon : dropdownOpenIcon} alt="menu icon"/>
                        </button>

                        <div>
                            <img src={userData.profilePictureUrl || defaultAvatar} alt="user avatar"/>
                        </div>

                        <section data-is-open={isOpen.toString()}>
                            <NavLink to='/view-profile'>
                                <span>View profile</span>
                            </NavLink>
                            
                            <NavLink to='/edit-profile'>
                                <span>Edit profile</span>
                            </NavLink>
                            
                            <button onClick={logOut}>
                                Log out
                            </button>
                        </section>
                    </>
            }
        </section>
    )
}

export default UserDropdown;