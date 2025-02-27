import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'


export default function Headers(){
    const router = useRouter()


    function redirect(to: any) {
        router.push(to)
    }

    return (
        <div className={styles.headers}>
            <div className={styles.logo} onClick={() => redirect('/')}>
                <svg width="50" height="50" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32.5" cy="32.5" r="32.5" fill="#25A0E5"/>
                    <path d="M41.6233 38.209C43.9835 34.9883 45.0407 30.9952 44.5832 27.0285C44.1257 23.0619 42.1874 19.4142 39.156 16.8154C36.1246 14.2165 32.2237 12.858 28.2337 13.0118C24.2438 13.1655 20.459 14.8201 17.6365 17.6445C14.8141 20.469 13.1622 24.255 13.0113 28.2451C12.8604 32.2351 14.2217 36.1351 16.8227 39.1646C19.4238 42.1941 23.0728 44.1298 27.0398 44.5845C31.0068 45.0391 34.9991 43.9791 38.2181 41.6166H38.2157C38.2872 41.7141 38.3668 41.8075 38.4546 41.8969L47.8389 51.2813C48.296 51.7387 48.916 51.9957 49.5626 51.996C50.2092 51.9962 50.8294 51.7396 51.2868 51.2825C51.7442 50.8255 52.0012 50.2054 52.0015 49.5588C52.0017 48.9123 51.745 48.292 51.288 47.8347L41.9036 38.4503C41.8165 38.362 41.7228 38.283 41.6233 38.209ZM42.2522 28.8392C42.2522 30.5998 41.9054 32.3431 41.2317 33.9696C40.558 35.5961 39.5705 37.074 38.3256 38.3189C37.0807 39.5638 35.6028 40.5513 33.9763 41.225C32.3498 41.8987 30.6065 42.2455 28.8459 42.2455C27.0854 42.2455 25.3421 41.8987 23.7156 41.225C22.0891 40.5513 20.6112 39.5638 19.3663 38.3189C18.1214 37.074 17.1339 35.5961 16.4602 33.9696C15.7865 32.3431 15.4397 30.5998 15.4397 28.8392C15.4397 25.2837 16.8521 21.8737 19.3663 19.3596C21.8804 16.8454 25.2904 15.433 28.8459 15.433C32.4015 15.433 35.8114 16.8454 38.3256 19.3596C40.8397 21.8737 42.2522 25.2837 42.2522 28.8392Z" fill="white"/>
                </svg>
                    <h1>Busca Ong</h1>
            </div>
            <div>
                <ul className={styles.redirects}>
                    <li onClick={() => redirect('RegisterVoluntary')}>
                        <a href='htts://wwww.gooogle.com/1'>Seja um voluntário</a>
                    </li>
                    <li onClick={() => redirect('RegisterOng')}>
                        <a href='htts://wwww.gooogle.com/2'>Cadastro de Ong</a>
                    </li>
                    <li onClick={() => redirect('About')}>
                        <a href='htts://wwww.gooogle.com/3'>Sobre</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}