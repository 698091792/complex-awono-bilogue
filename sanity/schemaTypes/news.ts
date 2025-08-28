import { defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'content', title: 'Content', type: 'text' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'image', title: 'Image', type: 'image' }
  ]
})
