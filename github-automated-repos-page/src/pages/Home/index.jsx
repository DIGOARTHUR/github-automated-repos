
import { useEffect } from 'react';
import './style.scss';
import { Header } from '../../components/Header';
import Aos from 'aos';
import { Link } from 'react-router-dom'
import "aos/dist/aos.css";
import { Footer } from '../../components/Footer';

export function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className="home_Container">
      <Header />
      <main className="home_Content">
        <div className="banner_Content">
          <h1>Github  Automated Repos</h1>
          <p>Easy and practical way to expose your Github projects.</p>
        </div>
        <div className="button_Content">

          <Link className="effect effect-1" to="/documentation/gettingStarted" title="Getting Start">Getting Start</Link>

        </div>

        <div className="cards_Container">
          <div data-aos="fade-on" className="cards_Content">
            <div data-aos="fade-left" className="card_example">
              <h1>Control your projects</h1>
              <p>
                Decide which project will appear on your personal page from a keyword determined by you.
              </p>
              <img src="https://user-images.githubusercontent.com/59892368/214140611-910cd26b-280d-48f1-8652-65034f04a4f8.gif"></img>
            </div>
            <div data-aos="fade-right" className="card_example">
              <h1>In one place</h1>
              <p>
                Manage everything in the same place where you keep your project code. In just one field.
              </p>
              <img src="https://user-images.githubusercontent.com/59892368/214930109-119c4b38-9862-4a3d-a130-2dfad5c4bcb6.gif"></img>
            </div>
            <div data-aos="fade-left" className="card_example">
              <h1>Customize and represent through icons.</h1>
              <p>
                Customize, show what your project is about and what technologies you used.
              </p>
              <img src="https://user-images.githubusercontent.com/59892368/214817180-519e403f-0fa4-4bfd-a6cc-5eb63d3360e8.gif"></img>
            </div>
            
          </div>
        </div>

    

      </main>

      <Footer />
    </div>
  )
}