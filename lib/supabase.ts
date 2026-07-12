import { createClient } from "@supabase/supabase-js";
import { CatalogProduct } from "@/data/catalog";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables. Please check your .env.local file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchProducts(): Promise<CatalogProduct[]> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      sizes:product_sizes(*),
      reviews:product_reviews(*)
    `);
    
  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  
  // Format the returned data to match CatalogProduct interface
  return data.map((product: any) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    tagline: product.tagline,
    description: product.description,
    imagePath: product.image_path,
    rating: Number(product.rating),
    reviewCount: product.review_count,
    notes: {
      top: product.notes_top,
      heart: product.notes_heart,
      base: product.notes_base
    },
    images: product.images || [],
    sizes: (product.sizes || []).map((s: any) => ({
      size: s.size,
      price: Number(s.price),
      originalPrice: Number(s.original_price)
    })),
    reviews: (product.reviews || []).map((r: any) => ({
      id: r.id,
      author: r.author,
      rating: Number(r.rating),
      date: r.date,
      comment: r.comment,
      verified: r.verified
    }))
  }));
}

export async function fetchProductById(id: string): Promise<CatalogProduct | null> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      sizes:product_sizes(*),
      reviews:product_reviews(*)
    `)
    .eq("id", id)
    .single();
    
  if (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
  
  return {
    id: data.id,
    name: data.name,
    category: data.category,
    tagline: data.tagline,
    description: data.description,
    imagePath: data.image_path,
    rating: Number(data.rating),
    reviewCount: data.review_count,
    notes: {
      top: data.notes_top,
      heart: data.notes_heart,
      base: data.notes_base
    },
    images: data.images || [],
    sizes: (data.sizes || []).map((s: any) => ({
      size: s.size,
      price: Number(s.price),
      originalPrice: Number(s.original_price)
    })),
    reviews: (data.reviews || []).map((r: any) => ({
      id: r.id,
      author: r.author,
      rating: Number(r.rating),
      date: r.date,
      comment: r.comment,
      verified: r.verified
    }))
  };
}
