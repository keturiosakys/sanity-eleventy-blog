export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '607379b5bef19251b77d9ca5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-burynosn',
                  apiId: '07e49fc3-1197-4c1f-905d-ccf4b0889541'
                },
                {
                  buildHookId: '607379b50da3935908be0d9d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ywebv6b2',
                  apiId: 'dc098fbd-6206-4310-a48b-e0b76cbccc63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/keturiosakys/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ywebv6b2.netlify.app', category: 'apps'}
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
