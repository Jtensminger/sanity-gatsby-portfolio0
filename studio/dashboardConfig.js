export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d12fddd175867e3b0cbb551',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio0-studio',
                  apiId: '31602f70-a0dd-453a-a030-59b2a117ffa8'
                },
                {
                  buildHookId: '5d12fddd18c6e317799d110a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio0',
                  apiId: '1c0fc7d4-657f-4bf6-a6af-b81d30ba4666'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jtensminger/sanity-gatsby-portfolio0',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio0.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
