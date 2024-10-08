"use client";

import Script from "next/script";

export default ({ id }) => <>
	<Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
	<Script id="google-analytics" strategy="afterInteractive">
		{"window.dataLayer = window.dataLayer || [];"}
		{"function gtag() { dataLayer.push(arguments); }"}
		{"gtag(\"js\", new Date());"}
		{`gtag("config", "${id}");`}
	</Script>
</>;
