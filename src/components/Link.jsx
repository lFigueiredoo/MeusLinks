const Link = ({href, target, rel, img}) => {
    return(
        <a
        href={href}
        target={target}
        rel={rel}
        >
         <img src={img}></img>
        </a>
    )
}

export default Link