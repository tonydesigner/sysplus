import { useState } from "react"

export const Convert =()=>{
    const [dim , setDim] = useState()
    
    const acao=(e)=>{
        e.preventDefault()
        let number = dim
        let soma = parseFloat(number) * 4.97
        $('.exibe').html('R$ '+ soma.toFixed(2))
      
        number =''
       
    
    }
    const exibe={fontSize: '20pt', fontWeight:'bold'}
    const campo = {heigth: '15px', padding:'.5rem', borderRadius:'.5rem', outline:'none', border:'0', borderBottom:'1px solid'}
    return(
        <>
            <div className="convert">
                <h1>Conversão Dólar para Real </h1>
                <form action="">
                    <input style={campo} type="text" value={dim} onChange={(e)=>setDim(e.target.value)} placeholder="Digite o valor em Dólar" />
                    <button type="submit" onClick={acao} hidden>Converter</button>
                </form>
                <div style={exibe} className="exibe"></div>
            </div>
            
        </>
    )
}
