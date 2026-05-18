create or replace view public.products_public_cards as
select
  id,
  product_type,
  name,
  description,
  stock,
  featured,
  active,
  created_at,
  updated_at,
  weights,
  weight_prices,
  weight_compare_prices,
  coalesce(images ->> 0, '') as first_image,
  coalesce(images ->> 1, images ->> 0, '') as second_image
from public.products;

grant select on public.products_public_cards to anon, authenticated, service_role;
