import Head from 'next/head'
import Link from 'next/link';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-gray-500 min-h-screen">
      <Head>
        <title>Living NC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <main className={styles.main}>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className={styles.title}>Welcome to our demo blog!</h1>

          <p>
            You can find more articles on the{' '}
            <Link href='/blog'>
              <a>blog articles page</a>
            </Link>
          </p>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
