import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={27}
        fill="none"
        {...props}
    >
        <Path
            fill="#A1A1A1"
            d="M13.5 27a2.599 2.599 0 0 1-1.906-.793A2.605 2.605 0 0 1 10.8 24.3V13.5c0-.742.265-1.378.794-1.906A2.606 2.606 0 0 1 13.5 10.8h10.8a2.6 2.6 0 0 1 1.907.794c.53.529.794 1.164.793 1.906v10.8c0 .742-.264 1.378-.793 1.907A2.593 2.593 0 0 1 24.3 27H13.5Zm-8.1-5.4V8.1c0-.742.265-1.378.794-1.906A2.606 2.606 0 0 1 8.1 5.4h13.5v2.7H8.1v13.5H5.4ZM0 16.2V2.7C0 1.957.265 1.322.794.794A2.606 2.606 0 0 1 2.7 0h13.5v2.7H2.7v13.5H0Z"
        />
    </Svg>
)
export default SvgComponent
