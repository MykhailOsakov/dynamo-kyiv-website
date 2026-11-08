import { ArrowRight, CalendarDays, ChevronRight, MapPin, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles, clubHonors, matches } from '../data';

export function HomePage() {
  const nextMatch = matches.find((match) => match.status === 'upcoming')!;
  const latestMatch = matches.find((match) => match.status === 'played')!;

  return (
    <>
      <section className="hero">
        <div className="hero__image" />
        <div className="hero__scrim" />
        <div className="hero__content wrap">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Futbalový klub · Kyjev</span>
            <h1>Srdce Kyjeva.<br /><span>Sila Dynama.</span></h1>
            <p>Klub, ktorý spája generácie. Príbeh napísaný odvahou, hrdosťou a modro-bielymi farbami.</p>
            <div className="hero__actions">
              <Link className="button button--white" to="/historia">Spoznajte klub <ArrowRight size={17} /></Link>
              <Link className="text-link text-link--light" to="/zapas">Všetky zápasy <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="hero__index"><span>01</span><i /><small>KLUB OD ROKU 1927</small></div>
        </div>
        <div className="hero__bottom wrap"><span>VŽDY SPOLU</span><span>50°27′00″N 30°31′00″E</span></div>
      </section>

      <section className="match-band">
        <div className="wrap match-band__inner">
          <div className="match-band__next">
            <div className="section-label"><CalendarDays size={16} /><span>Najbližší zápas</span><span className="sample-tag">UKÁŽKA</span></div>
            <div className="fixture fixture--compact">
              <div className="fixture__team"><span className="team-mark">Д</span><strong>Dynamo<br />Kyjev</strong></div>
              <div className="fixture__center"><span className="fixture__date">{nextMatch.date}</span><strong className="fixture__vs">PROTI</strong><span className="fixture__time">{nextMatch.time} · {nextMatch.competition}</span></div>
              <div className="fixture__team fixture__team--away"><span className="team-mark team-mark--away">K</span><strong>{nextMatch.away}</strong></div>
            </div>
            <Link className="text-link" to={`/zapas/${nextMatch.id}`}>Detail zápasu <ArrowRight size={16} /></Link>
          </div>
          <div className="match-band__latest">
            <div className="section-label"><Trophy size={16} /><span>Posledný výsledok</span><span className="sample-tag">UKÁŽKA</span></div>
            <Link to={`/zapas/${latestMatch.id}`} className="result-card">
              <span className="result-card__meta">{latestMatch.date} · {latestMatch.competition}</span>
              <div className="result-card__teams"><strong>Dynamo Kyjev</strong><b>{latestMatch.homeScore} : {latestMatch.awayScore}</b><strong>{latestMatch.away}</strong></div>
              <span className="result-card__link">Zobraziť štatistiky <ChevronRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section wrap home-news">
        <div className="section-heading">
          <div><span className="eyebrow"><span className="eyebrow__line" /> Klubový magazín</span><h2>Príbehy z <em>Dynama</em></h2></div>
          <Link className="text-link" to="/novinky">Všetky novinky <ArrowRight size={16} /></Link>
        </div>
        <div className="news-grid news-grid--home">
          {articles.slice(0, 3).map((article, index) => (
            <Link className={`news-card${index === 0 ? ' news-card--featured' : ''}`} to={`/novinky/${article.id}`} key={article.id}>
              <div className="news-card__image"><img src={article.image} alt="Futbalové ihrisko a atmosféra zápasu" loading="lazy" /><span className="news-card__category">{article.category}</span></div>
              <div className="news-card__body"><span className="news-card__date">{article.date} <span>· Ukážkový článok</span></span><h3>{article.title}</h3><p>{article.excerpt}</p><span className="news-card__more">Čítať článok <ArrowRight size={15} /></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="club-band">
        <div className="wrap club-band__inner">
          <div className="club-band__copy"><span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Viac než futbal</span><h2>Hrdosť, ktorá<br />nepozná hranice.</h2><p>Od roku 1927 píše Dynamo príbeh, v ktorom sa stretáva tradícia s túžbou po víťazstve.</p><Link className="button button--outline-light" to="/historia">História klubu <ArrowRight size={16} /></Link></div>
          <div className="honors-grid">{clubHonors.map((honor) => <div className="honor" key={honor.label}><span>{honor.value}</span><small>{honor.label}</small></div>)}<p className="honors-note">* Historické klubové prvenstvá. Prehľad slúži ako stručná ukážka.</p></div>
        </div>
      </section>

      <section className="section wrap home-bottom">
        <div className="home-bottom__intro"><span className="eyebrow"><span className="eyebrow__line" /> Modro-biela rodina</span><h2>Klub tvorí<br /><em>každý z nás.</em></h2><p>Objavte hráčov, ktorí na ihrisku reprezentujú farby Kyjeva. Profily a štatistiky sú súčasťou ukážkového projektu.</p><Link className="text-link" to="/hraci">Spoznajte tím <ArrowRight size={16} /></Link></div>
        <div className="home-bottom__photo"><img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=85" alt="Futbalový tím na ihrisku" loading="lazy" /><div><MapPin size={16} /><span>Kyjev · Ukrajina</span></div></div>
      </section>
    </>
  );
}
