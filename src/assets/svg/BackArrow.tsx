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
            d="M14.802 26.433a1.926 1.926 0 0 0 .564-1.366 1.935 1.935 0 0 0-.564-1.365l-8.237-8.273H30.08c.51 0 .998-.203 1.358-.565a1.932 1.932 0 0 0 0-2.726 1.915 1.915 0 0 0-1.358-.565H6.565l8.237-8.276a1.936 1.936 0 0 0 0-2.731 1.919 1.919 0 0 0-2.72 0L.565 12.134a1.93 1.93 0 0 0-.418 2.105c.097.234.239.447.418.626l11.517 11.568a1.92 1.92 0 0 0 2.096.42c.233-.098.445-.24.624-.42Z"
        />
    </Svg>
)
export default SvgComponent
