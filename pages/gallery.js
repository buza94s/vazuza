import Main from "../components/layout/Main";

import styles from '../styles/main.module.css';

const Gallery = () => {
    return (
            <Main keywords={"main page"}>

                <h1 className="hidden">Галерея</h1>

                <section className={styles['img-container']}>
                    <video controls>
                        <source src="./1.mp4" type="video/mp4" />
                    </video>
                    <video controls>
                        <source src="./3.mp4" type="video/mp4" />
                    </video>
                    <video controls>
                        <source src="./2.mp4" type="video/mp4" />
                    </video>
                </section>

            </Main>
    );
};

export default Gallery;