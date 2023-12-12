import trivia from '../assets/img/hockeyTrivia.png'
import weather from '../assets/img/WeatherApp.png'
import scavenger from '../assets/img/scavenger.png'

export default function Project() {


  return (
    
    <>
      <h1 className='head1'>Projects:</h1>
      <div className='card'>
        <h2 className='head-card'>Hockey Trivia</h2>
        <a href="https://mhalder4.github.io/group-project-1/"><img src={trivia} width="500px"></img></a>
      </div>
      <div className='card'>
        <h3 className='head-card'>Weather App</h3>
        <a href="https://tkilla14.github.io/WeatherApp/"><img src={weather} width="500px"></img></a>
      </div>
      <div className='card'>
        <h4 className='head-card'>Scavenger</h4>
       <img src={scavenger} width="500px"></img>
      </div>

      </>
  )}