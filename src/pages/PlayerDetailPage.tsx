import { ArrowLeft, ArrowRight, Ruler, UserRound } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { players } from '../data';
import { NotFoundPage } from './NotFoundPage';

export function PlayerDetailPage() {
  const { playerId } = useParams();
  const player = players.find((item) => item.id === playerId);
  if (!player) return <NotFoundPage />;
  const nextPlayer = players[(players.indexOf(player) + 1) % players.length];

  return (
    <>
      <section className="player-detail-hero">
        <div className="player-detail-hero__image"><img src={player.image} alt={`Ilustračný portrét hráča ${player.name}`} /></div><div className="player-detail-hero__wash" />
        <div className="wrap player-detail-hero__content"><Link className="back-link back-link--light" to="/hraci"><ArrowLeft size={16} /> Späť na hráčov</Link><div className="player-detail-hero__text"><span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> {player.position} · Modelový profil</span><h1>{player.name.split(' ')[0]}<br /><em>{player.name.split(' ').slice(1).join(' ')}</em></h1><div className="player-detail-hero__number">{String(player.number).padStart(2, '0')}</div></div><p className="player-detail-hero__note">Ilustračná fotografia. Informácie a štatistiky nie sú aktuálnymi údajmi klubu.</p></div>
      </section>
      <section className="section wrap player-profile-section">
        <div className="player-profile__main"><span className="eyebrow"><span className="eyebrow__line" /> Profil hráča</span><h2>Na ihrisku<br /><em>za tím.</em></h2><p>{player.bio}</p><Link className="text-link" to={`/hraci/${nextPlayer.id}`}>Ďalší hráč <ArrowRight size={16} /></Link></div>
        <div className="player-profile__details"><div className="profile-facts"><div><UserRound size={17} /><span>Vek</span><strong>{player.age} rokov</strong></div><div><Ruler size={17} /><span>Výška</span><strong>{player.height}</strong></div><div><span className="flag-mark">UA</span><span>Národnosť</span><strong>{player.nationality}</strong></div><div><span className="shirt-mark">{player.number}</span><span>Číslo dresu</span><strong>{String(player.number).padStart(2, '0')}</strong></div></div>
          <div className="profile-stats"><div className="profile-stats__heading"><h3>Štatistiky</h3><span>Ukážkové údaje</span></div><div><strong>{player.appearances}</strong><span>zápasy</span></div><div><strong>{player.goals}</strong><span>góly</span></div><div><strong>{player.assists}</strong><span>asistencie</span></div></div></div>
      </section>
    </>
  );
}
