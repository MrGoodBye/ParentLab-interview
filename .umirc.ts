import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/chat/:result?', component: '@/pages/chat' },
    { path: '/tags', component: '@/pages/tags' },
    { path: '/slider/:tag', component: '@/pages/slider' },
  ],
});
