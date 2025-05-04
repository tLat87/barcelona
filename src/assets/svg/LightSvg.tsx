import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M27.6 15H29m-4.9-9.1 1.4-1.4M15 2.4V1M5.9 5.9 4.5 4.5M2.4 15H1m11.2 14h5.6M22 15a7.001 7.001 0 0 0-10.835-5.854A7 7 0 0 0 12.2 21.418V24.8h5.6v-3.382A7 7 0 0 0 22 15Z"
        />
    </Svg>
)
export default SvgComponent
