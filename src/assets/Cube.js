

export default function Cube (props) {
    return (
        <div style={{ position: "absolute", left: props.left ? props.left : 0, top: props.top ? props.top : 0 }}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : 50} height={props.size ? props.size : 50}>
                <rect class="shadow" x="10" y="10" width="100" height="50" fill={props.color? props.color: "#c66"} />
            </svg>
        </div>
    )
}