import { cookies } from "next/headers";

export async function fetchProduct(productSlug) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}listings/${productSlug}/show`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch product');
  const data = await res.json();
  return data.data;
}

export async function fetchProductsForCategory(categoryId, page = 1) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  let url = categoryId
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}listings?category_id=${categoryId}&status=1&page=${page}`
    : `${process.env.NEXT_PUBLIC_API_BASE_URL}listings?page=${page}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data;
}

export async function fetchAllListings(categoryId) {
  try {
    const url = categoryId
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}listings?category_id=${categoryId}&status=1`
      : `${process.env.NEXT_PUBLIC_API_BASE_URL}listings?status=1`;
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch listings: ' + res.status);
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}

export async function fetchListingsByReservePrice(reservePrice) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}listings?reserve_price=${reservePrice}&status=1`;
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch listings: ' + res.status);
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
} 