import Image from "next/image";

const ToolPill = (props) => {
    return (
        <div className="flex items-center mr-12 mt-4">
            <Image src={props.path} alt={props.text} width={45} height={45} className="mr-2"/>
            <div>{props.text}</div>
        </div>
    )
}

export default ToolPill;