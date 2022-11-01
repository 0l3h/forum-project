import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.sass';

function MenuLink(props) {
    const { title, route } = props;
    const location = useLocation();
    const [isActive, setActive] = useState(location.pathname.includes(route));

    const toggle = () => {
        setActive(location.pathname.includes(route));
    };

    useEffect(() => {
        setActive(location.pathname.includes(route));
    }, [location.pathname]);

    return (
        <NavLink 
            className={styles.menuOption}
            style={isActive? {backgroundColor: '#e3e3e3', borderLeft: '4px solid blue'} : null} 
            to={route}>
            <span>{title}</span>
        </NavLink>
    )
}

export default MenuLink;