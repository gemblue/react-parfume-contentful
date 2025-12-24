import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
});

/**
 * Get all products from Contentful
 * @param {boolean} featuredOnly - Get only featured products
 */
export const getProducts = async (featuredOnly = false) => {
  try {
    const query = {
      content_type: 'parfumes',
      order: '-sys.createdAt',
    };

    if (featuredOnly) {
      query['fields.featured'] = true;
    }

    const response = await client.getEntries(query);

    return response.items.map(item => ({
        id: item?.sys.id,
        name: item?.fields.name || 'Unnamed Product',
        description: item?.fields.description.content[0].content[0].value || null,
        price: item?.fields.price || 0,
        image: item?.fields.image.content[0].content[0].value || null,
        featured: item?.fields.featured || false,
        category: item?.fields.category || '',
        notes: item?.fields.notes || '',
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default client;
