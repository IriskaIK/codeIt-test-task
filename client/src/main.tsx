import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from "./App";
import './index.css'
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider forceColorScheme="dark">
            <App/>
        </MantineProvider>
    </StrictMode>,
)
