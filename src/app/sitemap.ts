import type { MetadataRoute } from "next";
import domain from "util/domain";

/**
 * The website's sitemap.
 * @returns The sitemap.
 * @public
 */
export default function sitemap(): MetadataRoute.Sitemap {
	return [{ url: new URL("/", domain).href }];
}
