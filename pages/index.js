import Head from 'next/head'
import styles from '../styles/Home.module.css'
import content from '../public/content.json'
// import the various components of the page
import About from '../components/About'
import Contact from '../components/Contact'
import Ethicode from '../components/Ethicode'
import Work from '../components/Work'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ethicode</title>
				<link rel="icon" href="/static/eye-close.png" />
				<meta name="viewport" content="width=device-width,initial-scale=1.0" />
				<link
			href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;1,300&display=swap"
			rel="stylesheet"
		/>
			</Head>

			<div id="app" className="frontground">
				<div className="ethicode">
					<Ethicode /><br />
					<About /><br />
					<Work /><br />
					<Contact /><br />
				</div>
			</div>
		</div>
	)
}