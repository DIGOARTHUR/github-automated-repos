
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Header/>
      <main className="Main">
        <div className="banner_Content">
      <h1>GitHub  Automated Repos</h1>
      <p>Easy and practical way to expose your Github projects.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
