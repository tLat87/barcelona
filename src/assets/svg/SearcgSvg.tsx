import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="m.129 21.25 5.79-5.792a9.242 9.242 0 1 1 .623.622L.75 21.871a.44.44 0 1 1-.622-.622Zm20.97-11.997a8.351 8.351 0 1 0-8.352 8.351A8.36 8.36 0 0 0 21.1 9.253Z"
        />
    </Svg>
)
export default SvgComponent
