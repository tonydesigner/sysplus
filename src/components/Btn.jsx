export function Btn(props){
    const btn = {padding: '.44rem', borderRadius:'.5rem', border: '0' }
    return(
        <button style={btn} onClick={props.clica}> {props.name}  </button>
    )
}