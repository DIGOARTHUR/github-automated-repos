import { useEffect } from 'react';
import './style.scss';
import { Header } from '../../components/Header';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import { Footer } from '../../components/Footer';
import TypeWriter from 'typewriter-effect';
import { FiChevronDown } from 'react-icons/fi';

export function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className='home_Container'>
            <Header />
            <main className='home_Content'>
                <div className='banner_Content'>
                    <h1>GitHub Automated Repos</h1>
                    <p>The library that gives you the power to manage the view of your projects on your website in one place!</p>

                    <div className='subBanner_Content_Effect '>
                        <TypeWriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(30)
                                    .typeString('Control your projects')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('Customize and represent through icons')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                        <p>in one place!</p>
                    </div>
                </div>

                <div className='button_Content'>
                    <Link className='button_effect button_effect-2' to='/documentation/gettingStarted' title='Getting Start'>
                        Getting Start
                    </Link>
                    <a href='#control_your_repositories'>
                        <FiChevronDown className='icon_Down' size={50} />
                    </a>
                </div>

                <div className='cards_Container'>
                    <div data-aos='fade-on' className='cards_Content'>
                        <div data-aos='fade-left' id='control_your_repositories' className='card_example'>
                            <h1>Control your projects</h1>
                            <p>Decide which project will be viewed on your personal page from a keyword determined by you.</p>
                            <img src='https://user-images.githubusercontent.com/59892368/214140611-910cd26b-280d-48f1-8652-65034f04a4f8.gif'></img>
                        </div>
                        <div data-aos='fade-right' className='card_example'>
                            <h1>Customize and represent through icons.</h1>
                            <p>Customize, show what your project is about and what technologies you used.</p>
                            <img src='https://user-images.githubusercontent.com/59892368/214817180-519e403f-0fa4-4bfd-a6cc-5eb63d3360e8.gif'></img>
                        </div>
                        <div data-aos='fade-left' className='card_example'>
                            <h1>In one place</h1>
                            <p>Manage everything in the same place where you keep your project code. In just one field.</p>
                            <img src='https://user-images.githubusercontent.com/59892368/214930109-119c4b38-9862-4a3d-a130-2dfad5c4bcb6.gif'></img>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
