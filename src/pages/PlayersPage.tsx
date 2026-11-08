import { ArrowRight, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { players, type Player } from '../data';

const roles = ['Všetci', 'Brankár', 'Obranca', 'Stredopoliar', 'Útočník'] as const;

function PlayerCard({ player }: { player: Player }) {
  return (
    <Link className="player-card" to={`/hraci/${player.id}`}>
      <div className="player-card__image"><img src={player.image} alt={`Ukážkový portrét hráča ${player.name}`} loading="lazy" /><span className="player-card__number">{String(player.number).padStart(2, '0')}</span><span className="player-card__arrow"><ArrowRight size={18} /></span></div>
      <div className="player-card__info"><span>{player.position} <i>·</i> Modelový profil</span><h3>{player.name}</h3></div>
    </Link>
  );
}

export function PlayersPage() {
  const [role, setRole] = useState<(typeof roles)[number]>('Všetci');
  const [query, setQuery] = useState('');
  const filteredPlayers = useMemo(() => players.filter((player) => (role === 'Všetci' || player.position === role) && player.name.toLocaleLowerCase('sk').includes(query.toLocaleLowerCase('sk'))), [role, query]);

  return (
    <>
      <section className="page-hero page-hero--players">
        <div className="wrap page-hero__inner"><div><span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Prvý tím · modelové profily</span><h1>Hráči.<br /><em>Jedna rodina.</em></h1><p>Predstavujeme ukážkovú zostavu a profily vytvorené pre tento projekt. Nejde o aktuálnu súpisku klubu.</p></div><div className="page-hero__number">02<span>/03</span></div></div>
      </section>
      <section className="section wrap players-section">
        <div className="players-toolbar"><div className="filter-tabs filter-tabs--players" role="group" aria-label="Filtrovať podľa pozície">{roles.map((item) => <button type="button" className={role === item ? 'is-selected' : ''} onClick={() => setRole(item)} key={item}>{item}</button>)}</div><label className="search-field"><Search size={17} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Hľadať hráča" aria-label="Hľadať hráča podľa mena" /></label></div>
        <p className="players-count">{filteredPlayers.length} {filteredPlayers.length === 1 ? 'MODELOVÝ PROFIL' : 'MODELOVÉ PROFILY'}</p>
        {filteredPlayers.length ? <div className="players-grid">{filteredPlayers.map((player) => <PlayerCard player={player} key={player.id} />)}</div> : <div className="empty-state"><strong>Nenašli sa žiadni hráči.</strong><p>Skúste zmeniť pozíciu alebo vyhľadávanie.</p><button className="text-link" type="button" onClick={() => { setRole('Všetci'); setQuery(''); }}>Zobraziť celý tím <ArrowRight size={15} /></button></div>}
        <p className="data-note">Mená, fotografie a všetky štatistiky hráčov sú ukážkové. Fotografie sú ilustračné.</p>
      </section>
    </>
  );
}
