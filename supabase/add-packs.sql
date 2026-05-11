alter table public.products
add column if not exists product_type text not null default 'product';

alter table public.products
drop constraint if exists products_product_type_check;

alter table public.products
add constraint products_product_type_check
check (product_type in ('product', 'pack'));

update public.products
set product_type = 'product'
where product_type is null
   or product_type not in ('product', 'pack');

create index if not exists products_product_type_idx on public.products (product_type);

create index if not exists products_product_type_active_idx
on public.products (product_type, active, featured, created_at desc);
