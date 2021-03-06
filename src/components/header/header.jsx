import styles from './header.module.css';
import logo from '../../common/carrot.png';

const Header = ({onLogout}) => (
    <header className={styles.header}>
        <img className={styles.header_logo} src={logo} alt="logo" />
        {onLogout && (<button onClick={onLogout} className={styles.btn_logout} >Logout</button>)}
        <h1 className={styles.title}>Business Card Maker</h1>
    </header>        
    );

export default Header;