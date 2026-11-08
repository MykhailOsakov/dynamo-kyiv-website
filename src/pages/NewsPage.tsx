import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { articles } from '../data';
import { NotFoundPage } from './NotFoundPage';

export function NewsPage() {
  return (
    <>
      <section className="page-hero page-hero--news"><div className="wrap page-hero__inner"><div><span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Klubový magazín</span><h1>Novinky.<br /><em>Život klubu.</em></h1><p>Ukážkové články o futbale, histórii a fanúšikoch. Nejde o aktuálne klubové správy.</p></div><div className="page-hero__number">03<span>/03</span></div></div></section>
      <section className="section wrap news-section"><div className="section-heading section-heading--compact"><div><span className="eyebrow"><span className="eyebrow__line" /> Z klubového magazínu</span><h2>V centre diania</h2></div><span className="section-aside">{articles.length} ukážkové príbehy</span></div><div className="news-grid news-grid--listing">{articles.map((article, index) => <Link className={`news-card${index === 0 ? ' news-card--featured' : ''}`} to={`/novinky/${article.id}`} key={article.id}><div className="news-card__image"><img src={article.image} alt="Futbalová atmosféra v klubových farbách" loading="lazy" /><span className="news-card__category">{article.category}</span></div><div className="news-card__body"><span className="news-card__date">{article.date} <span>· Ukážkový článok</span></span><h3>{article.title}</h3><p>{article.excerpt}</p><span className="news-card__more">Čítať článok <ArrowRight size={15} /></span></div></Link>)}</div></section>
    </>
  );
}

export function ArticleDetailPage() {
  const { articleId } = useParams();
  const article = articles.find((item) => item.id === articleId);
  if (!article) return <NotFoundPage />;

  return (
    <>
      <section className="article-hero"><img src={article.image} alt="Futbalové ihrisko a atmosféra zápasu" /><div className="article-hero__overlay" /><div className="wrap article-hero__content"><Link className="back-link back-link--light" to="/novinky"><ArrowLeft size={16} /> Späť na novinky</Link><span className="article-category">{article.category} · Ukážkový článok</span><h1>{article.title}</h1><div className="article-meta">{article.date}<span>·</span><Clock3 size={15} />{article.readingTime}</div></div></section>
      <article className="article-body wrap"><aside className="article-body__aside"><span>KLUBOVÝ<br />MAGAZÍN</span><i /></aside><div className="article-body__content"><p className="article-lead">{article.excerpt}</p><div className="article-demo-callout">Tento text je ukážkový obsah univerzitného projektu, nie aktuálna správa.</div>{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link className="text-link" to="/novinky">Všetky novinky <ArrowRight size={16} /></Link></div></article>
    </>
  );
}
