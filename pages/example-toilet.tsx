import type { NextPage } from 'next'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import ReviewList from '../components/review-list';

//import ReviewEntryModal from '../components/unfinished/review-entry-modal';
//import {exampleToiletData} from '../lib/exampleToilet';

/*type ReviewObject = {
    id: number
    user: string;
    toilet: string;
    gridRef: string;
    stars: {
        overall: number;
        experience: number;
        decor: number;
        cleanliness: number;
    };
    comment: string
};*/

const ExampleToliet: NextPage = () => {
    const router = useRouter();
    const toiletName = 'Yelverton WC';
    const gridRef = 'YX241365';

    return (<div className={styles.container}>
        <Head>
          <title>Rate a toilet - example toilet</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Example Toilet
          </h1>
          
          <ReviewList toiletName={toiletName} gridRef={gridRef}/>
        </main>
      </div>)
}

export default ExampleToliet;