import { createClient } from 'contentful';

// Client-side Contentful client (VITE_ envs are inlined at build time)
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
});

const ensureUrl = (url) => {
  if (!url) return null;
  return url.startsWith('//') ? `https:${url}` : url;
};

const extractRichText = (field) => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (!field.content) return '';

  const traverse = (nodes) => nodes
    .map(n => {
      if (n.nodeType === 'text') return n.value || '';
      if (n.content) return traverse(n.content);
      return '';
    })
    .join('');

  return traverse(field.content);
};

/**
 * Get all products from Contentful (client-side)
 */
export const getProducts = async (featuredOnly = false) => {
  try {
    const query = {
      content_type: 'parfumes',
      order: '-sys.createdAt',
    };

    if (featuredOnly) query['fields.featured'] = true;

    const response = await client.getEntries(query);

    return response.items.map(item => ({
      id: item?.sys?.id,
      name: item?.fields?.name || 'Unnamed Product',
      description: extractRichText(item?.fields?.description) || '',
      price: item?.fields?.price || 0,
      image: ensureUrl(item?.fields?.image?.fields?.file?.url || null),
      featured: Boolean(item?.fields?.featured),
      category: item?.fields?.category || '',
      notes: item?.fields?.notes || '',
    }));
  } catch (error) {
    console.error('Error fetching products from Contentful:', error);
    return [];
  }
};

export default client;

