import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
  site: 'https://brierfieldpathway.github.io',
  base: '/pathway-public-docs',
  integrations: [starlight({
    title:'Brierfield Pathway',
    description:'Public project information and documentation.',
    customCss:['./src/styles/pathway.css'],
    social:[{icon:'github',label:'GitHub organisation',href:'https://github.com/brierfieldpathway'}],
    sidebar:[
      {slug:'index',label:'Welcome'},
      {slug:'start-here',label:'Start here'},
      {label:'Brierfield Labs',items:[{slug:'labs'},{slug:'labs/public-projects'}]},
      {label:'Brierfield Publishing',items:[{slug:'publishing'}]},
      {label:'Inner Pathway Counselling',items:[{slug:'inner-pathway'}]},
      {label:'Shared Services',items:[{slug:'shared-services'}]},
      {slug:'about',label:'About this site'}
    ],
    editLink:{baseUrl:'https://github.com/brierfieldpathway/pathway-public-docs/edit/main/'}
  })]
});
