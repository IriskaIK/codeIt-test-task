import React from "react";
import {Center, Space, Stack, Title} from "@mantine/core";
import {Outlet} from "react-router";
import NavBar from "components/NavigationBar/NavigationBar";

const HomePage: React.FC = () => {
    return (
        <>

                <Center>
                    <Stack>
                        <Title>Deliveries manager</Title>
                        <NavBar/>
                        <Space h="md"/>
                    </Stack>

                </Center>
                <Outlet/>



        </>
    )
}


export default HomePage;