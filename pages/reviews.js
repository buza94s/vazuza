import Main from "../components/layout/Main";
import Img from '../components/ui/Img';

import styles from '../styles/main.module.css';

import img1 from '../public/reviews/1.PNG';
import img2 from '../public/reviews/2.PNG';
import img3 from '../public/reviews/3.PNG';

const Reviews = () => {
    return (
            <Main keywords={"main page"}>

                <h1 className="hidden">Отзывы</h1>

                <section className={styles['img-container']}>
                    <Img url={img1}/>
                    <Img url={img2}/>
                    <Img url={img3}/>
                </section>

            </Main>
    );
};

export default Reviews;