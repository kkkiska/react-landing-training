import './post.css'


export default function({link, imgPath, category, title, date, author, description}) {
    return (
        <a href={link} className='post'>
            <figure className='post-container'>
                <img src={imgPath} alt="" />
                <figcaption className="post-info-container">
                    <div className="post-category">{category}</div>
                    <h2 className="post-title">{title}</h2>
                    <div className="post-short-info">{date} <span>By</span> {author}</div>
                    {description && <div className='post-description'>{description}</div>}
                </figcaption>
            </figure>
        </a>
    )
}