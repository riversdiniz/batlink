import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className="social" href="https://www.youtube.com/channel/UCLc5Bq2yfs-S3Zse3ZFRMEQ">
                <BsYoutube color="#FFF" size={24}/>
            </a>

            <a className="social" href="https://www.instagram.com/riversdiniz/">
                <BsInstagram color="#FFF" size={24}/>
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
            
        </div>
    )
}