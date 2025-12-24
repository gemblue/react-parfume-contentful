import { createClient } from 'contentful';

// Server-side Contentful client using server environment variables
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || process.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
});

function ensureUrl(url) {
  if (!url) return null;
  return url.startsWith('//') ? `https:${url}` : url;
}

function extractRichText(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (!field.content) return '';

  const traverse = (nodes) => {
    return nodes
      .map((n) => {
        if (n.nodeType === 'text') return n.value || '';
        if (n.content) return traverse(n.content);
        return '';
      })
      .join('');
  };

  return traverse(field.content);
}

export default async function (request) {
  try {
    const url = new URL(request.url);
    const featured = url.searchParams.get('featured');

    const query = {
      content_type: 'parfumes',
      order: '-sys.createdAt',
    };

    if (featured) query['fields.featured'] = true;

    const response = await client.getEntries(query);

    const items = response.items.map((item) => ({
      id: item.sys.id,
      name: item.fields?.name || 'Unnamed Product',
      description: extractRichText(item.fields?.description) || '',
      price: item.fields?.price || 0,
      image: ensureUrl(item.fields?.image?.fields?.file?.url || null),
      featured: Boolean(item.fields?.featured),
      category: item.fields?.category || '',
      notes: item.fields?.notes || '',
    }));

    return new Response(JSON.stringify({ items }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Products function error:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
