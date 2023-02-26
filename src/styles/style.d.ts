import { shadow } from "./theme/shadow";
import "styled-components";
import { color } from "./theme/color";
import { colorPalette } from "./theme/colorPalette";
import { div } from "./theme/div";
import { event } from "./theme/event";
import { fontFamily } from "./theme/fontFamily";
import { fontStyle } from "./theme/fontStyle";
import { layout } from "./theme/layout";
import { size } from "./theme/size";
import { transition } from "./theme/transition";
import { zIndex } from "./theme/zIndex";
import { container } from "./theme/container";
import { style } from "./theme/style";

declare module "styled-components" {
	export interface DefaultTheme {
		color: typeof color;
		colorPalette: typeof colorPalette;
		div: typeof div;
		event: typeof event;
		fontFamily: typeof fontFamily;
		fontStyle: typeof fontStyle;
		layout: typeof layout;
		size: typeof size;
		transition: typeof transition;
		zIndex: typeof zIndex;
		shadow: typeof shadow;
		container: typeof container;
		style: typeof style;
	}
}
