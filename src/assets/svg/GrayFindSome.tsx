import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={27}
        fill="none"
        {...props}
    >
        <Path
            fill="#A1A1A1"
            d="M11.556 27 0 20.614v-5.726h7.222v4.165h4.334V27ZM0 12.112V6.386L11.556 0v7.947H7.222v4.165H0Zm10.111 4.164v-5.552h5.778v5.552H10.11ZM14.444 27v-7.947h4.334v-4.165H26v5.726L14.444 27Zm4.334-14.888V7.947h-4.334V0L26 6.386v5.726h-7.222Z"
        />
    </Svg>
)
export default SvgComponent
