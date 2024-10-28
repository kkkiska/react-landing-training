export default function Category({link, category, posts}) {
    return (
        <div className="category-item">
            <a href={link} className="category-name">{category}</a>
            <div className="category-posts">({posts})</div>
        </div>
    )
}