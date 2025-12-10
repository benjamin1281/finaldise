
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/finaldise"
  },
  {
    "renderMode": 2,
    "route": "/finaldise/granjas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4093, hash: 'c838ae755b84d6cc85d338016af2874e98cf3f147e59615b0493aff3862ee72f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4332, hash: '77820ce826a473c1ad50c4507cd9ed2aa2bc8a4b10aea85a9a4b14bd02c4498b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'finaldise/granjas/index.html': {size: 15091, hash: '415275aafa58623c93d4d2780e2f88e1090c13e596be322bb8e2cb2b881a0406', text: () => import('./assets-chunks/finaldise_granjas_index_html.mjs').then(m => m.default)},
    'finaldise/index.html': {size: 11430, hash: '2d03cbcffcde5becd7a21d66bac902ebbec5f049b4006d5ad3e5a4ca86f3bcd1', text: () => import('./assets-chunks/finaldise_index_html.mjs').then(m => m.default)},
    'styles-6ONG2ZQV.css': {size: 457, hash: 'yQmwbAz5JnU', text: () => import('./assets-chunks/styles-6ONG2ZQV_css.mjs').then(m => m.default)}
  },
};
