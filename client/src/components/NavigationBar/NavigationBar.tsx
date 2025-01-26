import React from "react";
import {Flex, NavLink} from "@mantine/core";
import { Link, useLocation} from "react-router";


const NavBar: React.FC = () => {
    const location = useLocation();


    return (
        <>
            <Flex justify={'center'}>
                <NavLink component={Link} to={'/form'} label="Form" active={location.pathname === '/form'}/>
                <NavLink component={Link} to={'/'} label="Timetable" active={location.pathname === '/'}/>
            </Flex>
        </>
    )
}

export default NavBar;