import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={29}
        fill="none"
        {...props}
    >
        <Path
            stroke="#fff"
            d="M14.586 1.306A.44.44 0 0 1 15 1a.432.432 0 0 1 .414.306l3.006 9.366a.441.441 0 0 0 .414.305h9.731a.432.432 0 0 1 .414.304.446.446 0 0 1-.158.493l-7.87 5.79a.44.44 0 0 0-.16.493l3.006 9.365a.445.445 0 0 1-.157.492.431.431 0 0 1-.511.001l-7.873-5.79a.431.431 0 0 0-.512 0l-7.87 5.79a.431.431 0 0 1-.672-.22.446.446 0 0 1 0-.273l3.006-9.367a.446.446 0 0 0-.156-.493l-7.873-5.787a.44.44 0 0 1-.158-.492.44.44 0 0 1 .414-.304h9.73a.433.433 0 0 0 .415-.305l3.006-9.368Z"
        />
    </Svg>
)
export default SvgComponent
