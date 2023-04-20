import domain from "./domain";

export default function generateMetadata(title, description, imageUrl, canonicalUrl) {
	return {
		metadataBase: domain,
		title: title,
		description: description,
		generator: "Next.js",
		authors: {
			name: "Travis Martin",
			url: "https://www.lakuna.pw/"
		},
		colorScheme: "dark",
		creator: "Travis Martin",
		publisher: "Travis Martin",
		openGraph: {
			title: title,
			description: description,
			url: canonicalUrl,
			siteName: "Xanycki",
			images: imageUrl,
			locale: "en-US",
			type: "website"
		},
		icons: "/favicon.ico",
		themeColor: "#450E23",
		twitter: {
			card: "summary",
			title: title,
			description: description,
			siteId: "1153809190886002688",
			creatorId: "1153809190886002688",
			images: imageUrl
		}
	};
}
