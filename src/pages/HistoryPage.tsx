import { ArrowRight, Award, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clubHonors, milestones } from '../data';

export function HistoryPage() {
  return (
    <>
      <section className="history-hero"><div className="history-hero__image" /><div className="history-hero__overlay" /><div className="wrap history-hero__content"><span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Od roku 1927</span><h1>Dejiny, ktoré<br /><em>žijú ďalej.</em></h1><p>Príbeh Dynama Kyjev je príbehom mesta, generácií hráčov a nezlomnej oddanosti futbalu.</p><Link className="button button--white" to="/hraci">Spoznajte tím <ArrowRight size={16} /></Link></div><div className="history-hero__year">1927</div></section>
      <section className="history-intro wrap"><span className="eyebrow"><span className="eyebrow__line" /> Kapitoly klubovej histórie</span><h2>Viac než <em>deväť desaťročí</em><br />v modrej a bielej.</h2><p>Dynamo Kyjev vzniklo v roku 1927. Klub sa stal významnou súčasťou ukrajinského športu a získal popredné miesto v európskom futbale. Nižšie uvedené míľniky stručne približujú jeho cestu.</p></section>
      <section className="history-timeline wrap"><div className="timeline-heading"><CalendarDays size={17} /><span>ČASOVÁ OS · VYBRANÉ MOMENTY</span></div><div className="timeline-list">{milestones.map((item, index) => <article className="timeline-item" key={item.year}><div className="timeline-item__year">{item.year}</div><div className="timeline-item__marker"><i /></div><div className="timeline-item__content"><span>MÍĽNIK {String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></section>
      <section className="history-honors"><div className="wrap history-honors__inner"><div><span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Európske a domáce úspechy</span><h2>Trofeje, ktoré<br /><em>píšu dejiny.</em></h2><p>Historické úspechy klubu v skratke.</p></div><div className="history-honors__list">{clubHonors.map((honor) => <div key={honor.label}><Award size={20} /><strong>{honor.value}</strong><span>{honor.label}</span></div>)}</div></div><div className="wrap history-source-note">* Počet domácich titulov vychádza z historických klubových súťaží a môže závisieť od spôsobu započítania.</div></section>
    </>
  );
}
