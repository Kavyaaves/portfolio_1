import '../styles/globals.css';
import '../styles/loader.css';
import Head from 'next/head'
import Loading from '../components/Loading'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = (url) => {
			url !== router.pathname ? setLoading(true) : setLoading(false);
		};
		const handleComplete = (url) => setLoading(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);
	}, [router]);
	return (
		<>
			<Head />
			{loading && <Loading />}
			<Component {...pageProps} className="z-10" />;
		</>)
}

export default MyApp;
