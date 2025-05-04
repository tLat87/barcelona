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
            d="M17.198 26.433a1.926 1.926 0 0 1-.564-1.366 1.935 1.935 0 0 1 .564-1.365l8.237-8.273H1.92c-.51 0-.998-.203-1.358-.565a1.932 1.932 0 0 1 0-2.726c.36-.362.849-.565 1.358-.565h23.515l-8.237-8.276a1.936 1.936 0 0 1 0-2.731 1.919 1.919 0 0 1 2.72 0l11.517 11.568A1.928 1.928 0 0 1 32 13.499a1.935 1.935 0 0 1-.565 1.366L19.918 26.433a1.92 1.92 0 0 1-2.096.42 1.918 1.918 0 0 1-.624-.42Z"
        />
    </Svg>
)
export default SvgComponent
