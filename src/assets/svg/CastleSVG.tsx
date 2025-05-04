import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={44}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M.292 0v8.722l4.19 4.857v17.188H2.138L0 44h29l-2.139-13.233h-2.345V13.58l4.19-4.857V0h-4.89v4.13H20.84V0H15.95v4.13h-2.94V0H8.121v4.13h-2.94V0H.29Zm6.685 14.357H8.67v4.716H6.977v-4.716Zm6.67 0h1.694v4.716h-1.694v-4.716Zm6.722 0h1.694v4.716H20.37v-4.716Z"
        />
    </Svg>
)
export default SvgComponent
