import {AppShell} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import DeliveryForm from "components/DeliveryForm/DeliveryForm";
import Timetable from "components/Timetable/Timetable";


function App() {
    return (
        <>
            <AppShell>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}>
                            <Route index element={<Timetable/>}/>
                            <Route path='/form' element={<DeliveryForm/>}/>
                        </Route>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </BrowserRouter>
            </AppShell>
        </>
    )
}

export default App
