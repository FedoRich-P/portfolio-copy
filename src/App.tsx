import './App.css';
import { Slider } from './components/slider/Slider';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
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
    </div>
  );
}
