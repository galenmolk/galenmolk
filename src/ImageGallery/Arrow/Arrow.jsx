import './Arrow.css'

export default function Arrow ( { direction } ) {
    return <div className={`arrow ${direction}`}></div>
}

const DIRECTION = {
    LEFT: 'left',
    RIGHT: 'right'
};

export { DIRECTION };
