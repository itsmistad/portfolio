import Image from 'next/image';
import styles from './page.module.css';
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>Hello world!</h1>
                <Button variant="outlined" color="warning">
                    This button does nothing
                </Button>
            </div>
        </main>
    );
}
