import { CalendarDays, ChevronRight, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { matches, type Match } from '../data';

function MatchRow({ match }: { match: Match }) {
  const played = match.status === 'played';
  return (
    <Link className="match-row" to={`/zapas/${match.id}`}>
      <div className="match-row__date"><strong>{match.date.split(' ')[0]}</strong><span>{match.date.split(' ').slice(1).join(' ')}</span><small>{match.time}</small></div>
      <div className="match-row__competition"><span>{match.competition}</span><small><MapPin size={13} /> {match.venue}</small></div>
      <div className="match-row__teams"><span>{match.home}</span><b>{played ? `${match.homeScore} : ${match.awayScore}` : 'PROTI'}</b><span>{match.away}</span></div>
      <div className="match-row__status"><span className={`status-dot${played ? ' status-dot--played' : ''}`} />{played ? 'Odohrané' : 'Nadchádzajúce'}<ChevronRight size={17} /></div>
    </Link>
  );
}

export function MatchesPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'played'>('all');
  const visibleMatches = matches.filter((match) => filter === 'all' || match.status === filter);
  const filters = [
    { value: 'all', label: 'Všetky zápasy' },
    { value: 'upcoming', label: 'Nadchádzajúce' },
    { value: 'played', label: 'Odohrané' },
  ] as const;

  return (
    <>
      <section className="page-hero page-hero--blue">
        <div className="wrap page-hero__inner"><div><span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Sezóna · ukážkový prehľad</span><h1>Zápasy a<br /><em>výsledky.</em></h1><p>Prehľad programu a výsledkov. Všetky zápasové údaje na stránke sú demonštračné.</p></div><div className="page-hero__number">01<span>/03</span></div></div>
      </section>
      <section className="section wrap matches-section">
        <div className="section-heading section-heading--compact"><div><span className="eyebrow"><span className="eyebrow__line" /> Kalendár klubu</span><h2>Na ihrisku</h2></div><div className="filter-tabs" role="group" aria-label="Filtrovať zápasy">{filters.map((item) => <button type="button" className={filter === item.value ? 'is-selected' : ''} onClick={() => setFilter(item.value)} key={item.value}>{item.label}</button>)}</div></div>
        <div className="matches-list">{visibleMatches.map((match) => <MatchRow key={match.id} match={match} />)}</div>
        <p className="data-note"><CalendarDays size={15} /> Ukážkové termíny, výsledky a štatistiky nie sú aktuálnym oficiálnym rozpisom.</p>
      </section>
    </>
  );
}
