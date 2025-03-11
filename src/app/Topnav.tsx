import {
	BsFillCreditCardFill,
	BsFillHouseDoorFill,
	BsTwitch,
	BsTwitter
} from "react-icons/bs";
import { FaPaintbrush } from "react-icons/fa6";
import { HiBan } from "react-icons/hi";
import type { JSX } from "react";
import Link from "components/Link";
import multiclass from "util/multiclass";
import style from "./topnav.module.scss";

/**
 * Properties that can be passed to the top navigation bar.
 * @public
 */
export type TopnavProps = Omit<JSX.IntrinsicElements["nav"], "children">;

/**
 * The site-wide top navigation bar.
 * @param props - The properties to pass to the navigation bar.
 * @returns The navigation bar.
 * @public
 */
export default function Topnav({
	className,
	...props
}: TopnavProps): JSX.Element {
	return (
		<nav className={multiclass(className, style["topnav"])} {...props}>
			<ul>
				<li>
					<Link href="https://twitter.com/xanycki">
						<BsTwitter />
						{" Twitter"}
					</Link>
				</li>
				<li>
					<Link href="https://www.twitch.tv/xanycki">
						<BsTwitch />
						{" Twitch"}
					</Link>
				</li>
				<li>
					<Link href="https://artfight.net/~Xanycki">
						<FaPaintbrush />
						{" Art Fight"}
					</Link>
				</li>
				<li>
					<Link href="https://toyhou.se/Xanycki">
						<BsFillHouseDoorFill />
						{" TOYHOU.SE"}
					</Link>
				</li>
				<li>
					<Link href="https://xanycki.carrd.co/">
						<BsFillCreditCardFill />
						{" Carrd"}
					</Link>
				</li>
				<li>
					<Link href="https://twitter.com/XanyckiNSFW">
						<HiBan />
						{" NSFW Twitter"}
					</Link>
				</li>
			</ul>
		</nav>
	);
}
