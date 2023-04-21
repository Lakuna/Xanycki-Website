import DynamicLink from "../../shared/DynamicLink";
import style from "./topnav.module.scss";
import { BsTwitter, BsTwitch, BsFillHouseDoorFill, BsFillCreditCardFill } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { HiBan } from "react-icons/hi";

export default function Topnav(props) {
	return (
		<nav className={style["base"]} {...props}>
			<ul>
				<li>
					<DynamicLink href="https://twitter.com/xanycki"><BsTwitter /> Twitter</DynamicLink>
				</li>
				<li>
					<DynamicLink href="https://www.twitch.tv/xanycki"><BsTwitch /> Twitch</DynamicLink>
				</li>
				<li>
					<DynamicLink href="https://artfight.net/~Xanycki"><FaPaintBrush /> Art Fight</DynamicLink>
				</li>
				<li>
					<DynamicLink href="https://toyhou.se/Xanycki"><BsFillHouseDoorFill /> TOYHOU.SE</DynamicLink>
				</li>
				<li>
					<DynamicLink href="https://xanycki.carrd.co/"><BsFillCreditCardFill /> Carrd</DynamicLink>
				</li>
				<li>
					<DynamicLink href="https://twitter.com/XanyckiNSFW"><HiBan /> NSFW Twitter</DynamicLink>
				</li>
			</ul>
		</nav>
	);
}
