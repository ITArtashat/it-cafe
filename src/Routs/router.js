
import Header from "../header/header";
import Menu from "../Menu/Menu";

export const router = [
    {
        path: '/',
        element: <Header/>
    },
    {
        path:'/qr',
        element: <Menu/>
    }
]