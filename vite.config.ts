import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

function dynamoHistoryFallback() {
  const rewrite = (request, _response, next) => {
    const [pathname, query] = (request.url ?? '').split('?', 2);
    if (pathname.startsWith('/dynamo/') && !/\.[^/]+$/.test(pathname)) {
      request.url = `/dynamo/index.html${query ? `?${query}` : ''}`;
    }
    next();
  };

  return {
    name: 'dynamo-history-fallback',
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
}

export default defineConfig({
  plugins: [react(), dynamoHistoryFallback()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        dynamo: resolve(projectRoot, 'dynamo/index.html'),
        portfolio: resolve(projectRoot, 'portfolio/index.html'),
      },
    },
  },
});
