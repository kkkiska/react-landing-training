import Category from "./Category";
import { categoriesData } from "./categoriesData";

export default function CategorySection() {
    const categories = categoriesData.map((category) =>
        <Category 
            link={category.link} 
            category={category.category} 
            posts={category.posts} 
        />
    )

    return(
        <section className="sidebar-section">
            <div className="sidebar-section-title">Categories</div>
            {categories}
        </section>
    )
}