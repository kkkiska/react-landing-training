import Tag from "./Tag";
import { tagsData } from "./tagsData";

export default function TagsSection() {
    const tags = tagsData.map(tag => 
        <Tag>{tag.name}</Tag>
    )

    return (
        <section className="sidebar-section">
            <div className="sidebar-section-title">Tags</div>
            {tags}
        </section>
    )
}