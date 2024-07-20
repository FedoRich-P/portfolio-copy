import './App.css';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Works } from './layout/sections/works/Works';

export function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Skills></Skills>
      <Works></Works>
      <Testimony></Testimony>
      <Contacts></Contacts>
      <Slogan></Slogan>
      <Footer></Footer>
    </div>
  );
}
