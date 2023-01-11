
import { useEffect } from 'react';
import './App.scss';
import { Header } from '../../components/Header';
import Aos from 'aos';

import "aos/dist/aos.css";
import { Footer } from '../../components/Footer';

export function Home (){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
    return(
        <div className="App">
      <Header />
      <main className="main_Container">
        <div className="banner_Content">
          <h1>Github  Automated Repos</h1>
          <p>Easy and practical way to expose your Github projects.</p>
        </div>
        <div className="button_Content">

          <a className="effect effect-1" href="#" title="Getting Start">Getting Start</a>

        </div>

        <div className="cards_Container">
          <div className="cards_Content">
            <div className="card">
              <h1>Control your projects</h1>
              <p>
                Decide which project will appear on your personal page from a keyword determined by you.
              </p>
            </div>
            <div className="card">
              <h1>In one place</h1>
              <p>
                Manage everything in the same place where you keep your project code. In just one field.
              </p>
            </div>
            <div className="card">
              <h1>Customize and represent through icons.</h1>
              <p>
                Customize, show what your project is about and what technologies you used.
              </p>
            </div>
            {/* <p>With github-automated-repos, it is easy and practical to control your projects that will be exposed<br />
              on your page.
              Furthermore, there are Project and Stacks icons that can be added to represent them.<br />
  In the Topics field is where everything will be configured.</p>*/}
          </div>
        </div>

        <div className="demonstration_Container">
          <div data-aos="fade-on" className="demonstration_Content">

            <div>
              <img data-aos="fade-right" className='card_1' src="https://user-images.githubusercontent.com/59892368/211364553-f5898b28-4384-487f-a937-6b82a586d482.png" />
              <img data-aos="fade-left" src="https://user-images.githubusercontent.com/59892368/211364561-f36e51ee-2dd6-40f4-a486-b9779fa4c663.png" />
            </div>
            <div>
              <img data-aos="fade-right" src="https://user-images.githubusercontent.com/59892368/211372887-2ffccf47-8819-406a-abe2-1601be3ed6a6.png" />
              <img data-aos="fade-left" className='card_2' src="https://user-images.githubusercontent.com/59892368/211372890-47165431-2775-48de-a2d8-a412498be805.png" />
            </div>

            <div>
              <img data-aos="fade-right" className='card_3' src="https://user-images.githubusercontent.com/59892368/211373716-d79b9a4a-bb57-467c-be75-404ce7791144.png" />
              <img data-aos="fade-left" src="https://user-images.githubusercontent.com/59892368/211373713-eec494c6-a428-405f-8d87-153706458772.png" />
            </div>

            <div className="result_Content">
              <img data-aos="fade-down" src="https://user-images.githubusercontent.com/59892368/211376027-6fe537b7-4dba-48ef-a051-fd517f35b3e2.png" />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
    )
}