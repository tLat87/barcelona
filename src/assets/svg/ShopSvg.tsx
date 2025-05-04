import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M1.28 0h17.44l.972 2.914c.181.543.391 1.332.163 2.154A4 4 0 0 1 19 6.646V18h1v2H0v-2h1V6.646A4 4 0 0 1 0 4v-.162L1.28 0ZM3 7.874V18h3v-7h8v7h3V7.874a4 4 0 0 1-4-1.228 4 4 0 0 1-6 0 3.99 3.99 0 0 1-4 1.228ZM8 4a2 2 0 1 0 4 0V2H8v2ZM6 2H2.72l-.715 2.146a1.994 1.994 0 0 0 1.687 1.83A2 2 0 0 0 6 4V2Zm8 0v2a2 2 0 0 0 3.928.535c.059-.213.026-.512-.133-.989L17.279 2H14Zm-2 16v-5H8v5h4Z"
        />
    </Svg>
)
export default SvgComponent
