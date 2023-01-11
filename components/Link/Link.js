const Link = (props) => {
    return (
        <a className={`${props.className} cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500`}
            href={props.href} >
            {props.children}
        </a>
    )
}

export default Link;