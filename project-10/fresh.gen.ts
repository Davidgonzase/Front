// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.tsx";
import * as $cart from "./routes/cart.tsx";
import * as $checkout from "./routes/checkout.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $products_product_ from "./routes/products/[product].tsx";
import * as $AddProduct from "./islands/AddProduct.tsx";
import * as $CartPrice from "./islands/CartPrice.tsx";
import * as $CheckOutButton from "./islands/CheckOutButton.tsx";
import * as $CitySelect from "./islands/CitySelect.tsx";
import * as $CountrySelect from "./islands/CountrySelect.tsx";
import * as $DecreaseProduct from "./islands/DecreaseProduct.tsx";
import * as $NumCarrito from "./islands/NumCarrito.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.tsx": $_middleware,
    "./routes/cart.tsx": $cart,
    "./routes/checkout.tsx": $checkout,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/products/[product].tsx": $products_product_,
  },
  islands: {
    "./islands/AddProduct.tsx": $AddProduct,
    "./islands/CartPrice.tsx": $CartPrice,
    "./islands/CheckOutButton.tsx": $CheckOutButton,
    "./islands/CitySelect.tsx": $CitySelect,
    "./islands/CountrySelect.tsx": $CountrySelect,
    "./islands/DecreaseProduct.tsx": $DecreaseProduct,
    "./islands/NumCarrito.tsx": $NumCarrito,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
