import A from "../ui/A";
import Head from "next/head";

import Image from "next/image";

import logo from './logo.png';

import styles from '../../styles/main.module.css';

const MainContainer = ({children}) => {
    return (
        <main className={styles.container}>
            <Head>
                <meta keywords={"ulbi tv, nextjs"}></meta>
                <link rel="icon" href="/favicon.ico" />
                <title>Главная страница</title>
            </Head>
            <Image src={logo} width={900} height={200} />
            <div className={styles.navbar}>
                <A href={'/'} text="О нас"/>
                <A href={'/gallery'} text="Галерея"/>
                <A href={'/contacts'} text="Контакты"/>
                <A href={'/reviews'} text="Отзывы"/>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </main>
    );
};

export default MainContainer;