

export function Topo() {

    const dados =
        [
            { img: './logoR.png', nome: 'Rondinelle Serviços Gráficos', end: 'Estrada Adhemar Bebiano, 3546 - Inhaúma', tel: '21 96436-1752', cnpj: '23.395.063/0001-90' },
            // { img: 'https://www.graficakashimir.com.br/wp-content/images/logo.png?_9be473eafd17f943c7369839e98ba344', nome: 'Kashimir Studio', end: 'Rua Cândido Benício, 1381 - salas 203 e 204', tel: '21 99433-5570', cnpj: '07.002.644/0001-68' }
        ]
    return (

        <div className="meuTopo">
            
            {
                dados.map(i =>
                    <div className="topo margin">
                        <div className="logo"><img src={i.img} alt="minha logo" /></div>
                        <div className="info">
                            <h1>{i.nome} </h1>
                            <p>{i.cnpj} </p>
                            <p>{i.tel} </p>
                            <p>{i.end} </p>
                        </div>
                    </div>
                )

            }
        </div>


    )
}