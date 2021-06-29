export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60daf343e983909b289b8f21',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6z1bdybe',
                  apiId: '13dbda2e-6fbb-4f6f-b7aa-511ade110d46'
                },
                {
                  buildHookId: '60daf343d7784c91c7e8d400',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vfghrmpe',
                  apiId: '645a9a65-1307-4573-b9b3-5231429cee4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kirthikavenkat/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vfghrmpe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
