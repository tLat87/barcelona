import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={27}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M27.077 7.364v17.181c0 .651-.26 1.276-.721 1.736a2.465 2.465 0 0 1-1.74.719H2.461a2.465 2.465 0 0 1-1.741-.719A2.451 2.451 0 0 1 0 24.546V7.364c0-.651.26-1.276.721-1.736a2.465 2.465 0 0 1 1.74-.719h22.154c.653 0 1.28.259 1.741.719.462.46.72 1.085.72 1.736ZM29.538 0H6.154a1.233 1.233 0 0 0-1.23 1.227 1.226 1.226 0 0 0 1.23 1.228h23.385v18.409a1.226 1.226 0 0 0 1.23 1.227A1.233 1.233 0 0 0 32 20.864V2.454A2.45 2.45 0 0 0 31.279.72 2.465 2.465 0 0 0 29.539 0Z"
        />
    </Svg>
)
export default SvgComponent
