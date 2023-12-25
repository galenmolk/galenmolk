import './App.css'
import portrait from './assets/img/portrait.jpg'
import resume from './assets/data/res.json'
import Credit from "./Credit.jsx";
import VerticalSpace from "./VerticalSpace.jsx";
import Material from "./Material.jsx";

function App() {
    console.log(resume)
    
    return <>
        <p className='name'>Galen Molk</p>
        <p className='title'>Actor</p>
        <div className='portrait-mask'>
            <img src={portrait} alt='Galen Molk'/>
        </div>
        <div className='resume-grid'>
            <p className='projects-header'>Highlights</p>
            {resume.credits.map((credit, idx) => {
                return <Credit credit={credit} key={idx}/>
            })}
        </div>
        <div className='divider'/>
        <div className='material-container'>
            <Material material={{
                name: "View Headshot"
            }}/>
            <Material material={{
                name: "View Resume",
                link: "/galenmolk/public/galen-molk-resume.pdf"
            }}/>
        </div>
        <VerticalSpace height={'25px'} />
    </>
}

export default App
