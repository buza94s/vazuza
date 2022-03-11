import Image from "next/image";

import styles from '../../styles/img.module.css';

export default function Img({url}) {
    return (
        <div className={styles.image}>
            <Image src={url} width={900} height={900} />
        </div>
    )
}