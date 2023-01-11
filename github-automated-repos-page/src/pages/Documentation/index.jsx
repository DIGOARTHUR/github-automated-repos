import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { GettingStarted } from "./components/GettingStarted";
import { ProjectIcons } from "./components/ProjectIcons";
import './style.scss';
import { useLocation } from 'react-router-dom';
export function Documentation() {
    const path = {
        '/documentation/gettingStarted': <GettingStarted />,
        '/documentation/projectIcons': <ProjectIcons />
    }

    console.log()
    return (
        <>
            <Header />
            <div className="documentation_Container">
                <Sidebar />
                <main className="main_Container">
                    {
                        path[useLocation().pathname]
                    }

                </main>
            </div>
        </>

    )
}