function Button2({name, link, img}){
    return(
    <>
        <button className="button">
            <a href={link} download>
                <div><img src={img}/></div>
                <span>{name}</span>
            </a>
        </button>
    </>
    )
}

export default Button2