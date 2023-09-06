 import { Link } from 'react-router-dom'
import { AiTwotoneHome } from 'react-icons/Ai'
import { AiOutlineUser } from 'react-icons/Ai'
import { BiBasket } from 'react-icons/Bi'
import{ FaReceipt } from 'react-icons/fa'
import {FaMoneyBillAlt} from 'react-icons/fa'
import { CgNotes } from 'react-icons/cg'
export function Menu(){
    return(
        <div className="menu">
           <ul>
                <Link to='/'><li ><AiTwotoneHome className='ai' title='Início'/></li></Link>
                <Link to='/finan'><li ><CgNotes  className='tb' title='Orçamento'/></li></Link>
                <Link to='/recibo'><li ><FaReceipt className='tb' title='Recibo' /></li></Link>
                <Link to='/teste'><li ><AiOutlineUser className='tb' title='Itens' /></li></Link>
                <Link to='/prod'><li ><BiBasket className='tb' title='Tabela de preço'/></li></Link>
                <Link to='/convert'><li ><FaMoneyBillAlt className='tb' title='Conversor'/></li></Link>
           </ul>
        </div>
    )
}