import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={59}
        height={59}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M24.622 39.382V1L3.955 39.382h20.667Zm8.858 0V12.81l20.667 26.572H33.48Z"
        />
        <Path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 48.239h56.096l-7.38 8.857H8.38L1 48.24Z"
        />
    </Svg>
)
export default SvgComponent
