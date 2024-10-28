import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SectionPosts from './components/section-posts/SectionPosts';
import CategorySection from './components/sidebar/categories/CategorySection';

export default function App() {
  const mainCard = {
    category: 'Vehicle',
    title: 'One of Saturn’s largest rings may be newer than anyone',
    date: (new Date(2019, 5, 6)).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    author: 'Rickie Baroch',
    comments: 4
  };

  return (
    <>
    <Header />
    <main>
      <section className="main-screen">
        <div className="main-screen-text-container">
          <div className="main-screen-category">{mainCard.category}</div>
          <h1 className="main-screen-title">{mainCard.title}</h1>
          <div className="main-screen-description"><div>{mainCard.date}</div> <div><span>By</span> {mainCard.author}</div> <div>{mainCard.comments} comments</div></div>
        </div>
      </section>
      <section className="blog">
        <SectionPosts />
        <aside className="sidebar">
          <CategorySection />
        </aside>
      </section>
    </main>
    <Footer />
    </>
  );
} 

