import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home | Barbershop</title>
                <meta
                    name="description"
                    content="Barbershop project created for studies as an engineering thesis"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}></header>

            <main className={styles.main}>
                <h1>Logo</h1>
                <h2>Title</h2>
                <h3>Subtitle</h3>
                <p>Text</p>
                <h4>Note</h4>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default Home;
