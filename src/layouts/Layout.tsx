import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout(){

    return(
        <>
                {/* {NAVBAR} */}
                <NavBar/>

                {/* CONTENIDO PRINCIPAL */}

                <main className="container-fluid">
                    <Outlet/>

                
                </main>
        </>
    )
}
