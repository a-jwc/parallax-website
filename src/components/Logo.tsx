import { useAppDispatch, useAppSelector } from "../app/hooks";
import { IParallax } from "@react-spring/parallax";
import "./styles.scss";

interface Parallax {
	parallax: React.MutableRefObject<IParallax>;
}
export const Logo = ({ parallax }: Parallax) => {
	return (
		<div className="logo" onClick={() => parallax.current.scrollTo(0)}>
			🍕
		</div>
	);
};
