import './App.css'
import portrait from './assets/img/portrait.webp'
import resume from './assets/data/res.json'
import dmtm from './assets/img/dmtm.webp'
import Credit from "./Credit.jsx";
import Material from "./Material.jsx";

function App() {
    return <>
        <div className='header-container border'>
        <p className='name'>Galen Molk</p>
        <p className='title'>Actor</p>
        </div>
        <div className='portrait-mask border'>
            <img src={portrait} alt='Galen Molk'/>
        </div>
        <div className='divider'/>
        <div className='material-container'>
            <Material material={{
                name: "Headshot",
                link: "/galenmolk/galen-molk-headshot.webp"
            }}/>
            <Material material={{
                name: "Resume",
                link: "/galenmolk/galen-molk-resume.pdf"
            }}/>
        </div>
        <div className='divider'/>

        <div className='resume-grid'>
            <p className='projects-header'>Highlights</p>
            {resume.credits.map((credit, idx) => {
                return <Credit credit={credit} key={idx}/>
            })}
        </div>
        <div id='hide' className='divider'/>
        <div className='reel-container  border'>
            <iframe className='reel'
                    src='https://player.vimeo.com/video/442192311?h=64fda27ff1&byline=0&portrait=0'
                    title='Galen Molk – Acting Reel'
                    allowFullScreen/>
        </div>
        <div className='rep-container border'>
            <a href='https://www.dreammakertalent.com/' target='_blank'>
                <img className='border' src={dmtm} alt='Dream Maker Talent Management'/>
                <p className='bold'>Dream Maker Talent Management</p></a>
            <a href='https://maps.app.goo.gl/ymHT1XmZajPGr7nj6' target='_blank'><p>43 Glen Cove Road ST 242<br/>Greenvale,
                NY 11548</p></a>
            <a href='tel:516-676-2197' target='_blank'><p>516-676-2197</p></a>
            <a href='mailto:DreamMakerTalent@aol.com'><p>DreamMakerTalent@aol.com</p></a>
        </div>

        <div className='divider'/>
    </>
}

export default App
