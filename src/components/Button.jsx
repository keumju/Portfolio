function Button({name, link, img}){
    return(
    <>
        <button className="button">
            <a href={link} target="_blank">
                <div><img src={img}/></div>
                <span>{name}</span>
            </a>
        </button>
    </>
    )
}

export default Button