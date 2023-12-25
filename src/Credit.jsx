import CreditItem from "./CreditItem.jsx";

export default function Credit( { credit } ) {
    return <div className='resume-credit'>
        <p>{credit.project}</p>
        <p>{credit.role}</p>
        <CreditItem item={credit.theater}/>
        <CreditItem item={credit.collaborator}/>
    </div>
}
