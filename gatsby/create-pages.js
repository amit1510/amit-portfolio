const path = require('path')
const createCategoriesPages = require('./pagination/create-categories-pages.js')
const createTagsPages = require('./pagination/create-tags-pages.js')
const createPostsPages = require('./pagination/create-posts-pages.js')
const { getAllCategories } = require('./constants/categories')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const allCategories = await getAllCategories(graphql)

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  })

  // // Tags list
  // createPage({
  //   path: '/tags',
  //   component: path.resolve('./src/templates/tags-list-template.js'),
  //   context: { allCategories }
  // })

  // // Categories list
  // createPage({
  //   path: '/categories',
  //   component: path.resolve('./src/templates/categories-list-template.js'),
  //   context: { allCategories }
  // })

  createPage({
    path: '/',
    component: path.resolve('./src/templates/index-template.js')
  })

  // Feeds
  // await createTagsPages(graphql, actions)
  // await createCategoriesPages(graphql, actions)
  // await createPostsPages(graphql, actions)
}

module.exports = createPages
