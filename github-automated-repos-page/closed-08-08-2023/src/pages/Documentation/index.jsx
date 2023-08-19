import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Sidebar } from './components/Sidebar';
import { GettingStarted } from './components/GettingStarted';
import { ProjectIcons } from './components/ProjectIcons';
import './style.scss';
import { useLocation } from 'react-router-dom';
import { StackIcons } from './components/StackIcons';
export function Documentation() {
    const path = {
        '/documentation/gettingStarted': <GettingStarted />,
        '/documentation/projectIcons': <ProjectIcons />,
        '/documentation/stackIcons': <StackIcons />,
    };

    return (
        <>
            <Header />
            <div className='documentation_Container'>
                <Sidebar />
                <main className='documentation_Content'>{path[useLocation().pathname]}</main>
            </div>
            <Footer />
        </>
    );
}
