"use client";

import Script from "next/script";

const measurementId = "G-ZDPVNVW1R6";

export default function Gtag() {
	return (
		<>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{"window.dataLayer = window.dataLayer || [];"}
				{"function gtag(){dataLayer.push(arguments);}"}
				{"gtag('js', new Date());"}
				{`gtag('config', '${measurementId}');`}
			</Script>
		</>
	);
}