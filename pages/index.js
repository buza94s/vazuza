import Main from "../components/layout/Main";
import Img from '../components/ui/Img';

import styles from '../styles/main.module.css';

import img1 from '../public/1.PNG';
import img2 from '../public/2.PNG';
import img3 from '../public/3.PNG';
import img4 from '../public/4.PNG';
import img5 from '../public/5.PNG';
import img6 from '../public/6.PNG';
import img7 from '../public/7.PNG';
import img8 from '../public/8.PNG';

const Index = () => {

    return (
            <Main keywords={"main page"}>

                <h1>Аренда дома для отдыха</h1>
                <p>200 км от Москвы</p>
                <p>Уютная теплая атмосфера</p>
                <p>Дом у леса</p>

                <section className={styles['img-container']}>
                    <Img url={img1}/>
                    <Img url={img2}/>
                    <Img url={img3}/>
                    <Img url={img4}/>
                    <Img url={img5}/>
                    <Img url={img6}/>
                    <Img url={img7}/>
                    <Img url={img8}/>
                </section>

            </Main>
    );
};

export default Index;