export function Campo(props){
    const campo = {margin:'1rem 1rem', width:'250px', height: '30px', border:'0',  borderRadius: '.5rem', padding:'.5rem '} 
    return (
        <input 
            style={campo} 
            type={props.text} 
            placeholder={props.name} 
            value={props.valor} 
            onChange={props.muda} />
    )
}