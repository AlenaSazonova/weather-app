import './App.css';
import GlobalStyle from './GlobalStyles';
import ProjectTitle from '../src/components/titleWeather/TitleWeather';
import WeatherSearch from '../src/components/weatherSearch/WeatherSearch';



function App() {
    return (
        <>
            <GlobalStyle />
            <ProjectTitle />
            <WeatherSearch />
        </>
    );
}

export default App;