import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return <section className="not-found wrap"><span className="eyebrow"><span className="eyebrow__line" /> Chybná prihrávka</span><strong>404</strong><h1>Táto stránka<br /><em>tu nie je.</em></h1><p>Požadovaný obsah sa nenašiel. Vráťte sa na prehľad klubu.</p><Link className="button button--blue" to="/"><ArrowLeft size={16} /> Späť na domov</Link></section>;
}
