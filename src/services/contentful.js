// Client-side product service: call your serverless API (no secret tokens in client)
export const getProducts = async (featuredOnly = false) => {
  try {
    const url = new URL('/api/products', window.location.origin);
    if (featuredOnly) url.searchParams.set('featured', '1');

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Failed to fetch products from server API');

    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching products from API:', error);
    return [];
  }
};

