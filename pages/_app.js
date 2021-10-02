import '../styles/globals.css';
import '../styles/loader.css';
import Head from 'next/head'
import Loading from '../components/Loading'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	// useEffect(() => {
	// 	if ("serviceWorker" in navigator) {
	// 		window.addEventListener("load", function () {
	// 			navigator.serviceWorker.register("/sw.js").then(
	// 				function (registration) {
	// 					console.log("Service Worker registration successful with scope: ", registration.scope);
	// 				},
	// 				function (err) {
	// 					console.log("Service Worker registration failed: ", err);
	// 				}
	// 			);
	// 		});
	// 	}
	// }, [])
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
			<Component {...pageProps} className="z-10 overflow-hidden" />
		</>)
}

export default MyApp;
