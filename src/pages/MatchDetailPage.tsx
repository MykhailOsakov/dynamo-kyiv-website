import { ArrowLeft, CalendarDays, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { matches } from '../data';
import { NotFoundPage } from './NotFoundPage';

export function MatchDetailPage() {
  const { matchId } = useParams();
  const match = matches.find((item) => item.id === matchId);
  if (!match) return <NotFoundPage />;
  const played = match.status === 'played';

  return (
    <>
      <section className="match-detail-hero">
        <div className="wrap"><Link className="back-link back-link--light" to="/zapas"><ArrowLeft size={16} /> Späť na zápasy</Link><div className="match-detail-hero__meta"><span>{match.competition}</span><span className="sample-tag">DEMONŠTRAČNÉ ÚDAJE</span></div>
          <div className="match-scoreboard">
            <div className="score-team"><span className="team-mark team-mark--large">Д</span><strong>{match.home}</strong><small>DOMÁCI</small></div>
            <div className="score-center"><span>{match.date} · {match.time}</span><strong>{played ? `${match.homeScore} : ${match.awayScore}` : 'PROTI'}</strong><small>{played ? 'UKÁŽKOVÝ VÝSLEDOK' : 'UKÁŽKOVÝ TERMÍN'}</small></div>
            <div className="score-team"><span className="team-mark team-mark--large team-mark--away">{match.away.slice(0, 1)}</span><strong>{match.away}</strong><small>HOSTIA</small></div>
          </div>
          <div className="match-detail-hero__venue"><CalendarDays size={15} /> {match.date} <span>·</span><MapPin size={15} /> {match.venue}</div>
        </div>
      </section>
      <section className="section wrap match-detail-content">
        <div className="section-heading section-heading--compact"><div><span className="eyebrow"><span className="eyebrow__line" /> Zápasový prehľad</span><h2>{played ? 'Štatistiky zápasu' : 'Informácie o zápase'}</h2></div></div>
        {!played ? <div className="upcoming-message"><CalendarDays size={22} /><div><strong>Predzápasový prehľad</strong><p>Zostavy a štatistiky budú dostupné po zápase. Uvedený termín je iba ukážkový.</p></div></div> : <>
          <div className="statistics-panel">{match.stats.map((stat) => {
            const total = stat.home + stat.away;
            const homeWidth = total > 0 ? (stat.home / total) * 100 : 50;
            return <div className="stat-row" key={stat.label}><div className="stat-row__values"><strong>{stat.home}{stat.unit ?? ''}</strong><span>{stat.label}</span><strong>{stat.away}{stat.unit ?? ''}</strong></div><div className="stat-bar"><span style={{ width: `${homeWidth}%` }} /><i style={{ width: `${100 - homeWidth}%` }} /></div></div>;
          })}</div>
          <div className="lineups-grid"><div className="lineup"><div className="lineup__heading"><span className="team-mark">Д</span><h3>{match.home}</h3><span>ZÁKLADNÁ ZOSTAVA</span></div><ol>{match.lineups.home.map((player, index) => <li key={player}><span>{String(index + 1).padStart(2, '0')}</span>{player}</li>)}</ol></div><div className="lineup"><div className="lineup__heading"><span className="team-mark team-mark--away">{match.away.slice(0, 1)}</span><h3>{match.away}</h3><span>ZÁKLADNÁ ZOSTAVA</span></div><ol>{match.lineups.away.map((player, index) => <li key={player}><span>{String(index + 1).padStart(2, '0')}</span>{player}</li>)}</ol></div></div>
        </>}
        <p className="data-note"><CalendarDays size={15} /> {match.note} Údaje slúžia výlučne na prezentáciu funkcií webu.</p>
      </section>
    </>
  );
}
