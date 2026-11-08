import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout';
import { HomePage } from './pages/HomePage';
import { MatchesPage } from './pages/MatchesPage';
import { MatchDetailPage } from './pages/MatchDetailPage';
import { PlayersPage } from './pages/PlayersPage';
import { PlayerDetailPage } from './pages/PlayerDetailPage';
import { NewsPage, ArticleDetailPage } from './pages/NewsPage';
import { HistoryPage } from './pages/HistoryPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="zapas" element={<MatchesPage />} />
        <Route path="zapas/:matchId" element={<MatchDetailPage />} />
        <Route path="hraci" element={<PlayersPage />} />
        <Route path="hraci/:playerId" element={<PlayerDetailPage />} />
        <Route path="novinky" element={<NewsPage />} />
        <Route path="novinky/:articleId" element={<ArticleDetailPage />} />
        <Route path="historia" element={<HistoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
