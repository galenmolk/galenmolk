export default function Material( { material } ) {
    return <div className='material'>
        <a className='material-link' href={material.link} target='_blank'>
        <p className='border'>{material.name}</p>
        </a>
    </div>
}
