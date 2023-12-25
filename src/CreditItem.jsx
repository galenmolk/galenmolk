export default function CreditItem({ item }) {
    return <>
        {item.link !== undefined ? 
        <a href={item.link} target='_blank'><p>{item.name}</p></a> :
        <p>{item.name}</p>}
    </>
}
