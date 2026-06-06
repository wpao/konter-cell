pnpm json-server db.json --watch

## ===============

src/features/product/
├── api/
│ └── productApi.ts
│
├── components/
│ ├── ProductForm.tsx
│ └── ProductTable.tsx
│
├── hooks/
│ └── useProducts.ts
│
├── pages/
│ └── ProductPage.tsx
│
└── types/
└── product.ts

### CRUD Ngrok =========

Saat ini proxy meneruskan:

```txt
/api/products
```

menjadi:

```txt
http://localhost:3001/api/products
```

Padahal json-server hanya punya:

```txt
http://localhost:3001/products
```

Solusinya tambahkan `rewrite`:

```ts
proxy: {
  "/api": {
    target: "http://localhost:3001",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ""),
  },
},
```

Konfigurasi lengkap:

```ts
server: {
  host: "0.0.0.0",
  allowedHosts: true,

  proxy: {
    "/api": {
      target: "http://localhost:3001",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
},
```

---

Setelah itu restart:

```bash
Ctrl + C
pnpm dev
```

### buat domine ngrok tetap

//
Lihat menu:
Domains

// doctorially-exegetic-kensley.ngrok-free.dev
// url ini bisa membuat satu port apa saja jadi https ☺️🍋
// membuat FE localhost:5173 jadi https dan domine tetap
// jalankan di terminal / base
ngrok http --url=doctorially-exegetic-kensley.ngrok-free.dev 5173

### perintah melihat structure

// extension VSCode
Treematic: Project Tree Generator

// hasil
product
├── api
│ └── productApi.ts
├── components
│ ├── ProductForm.tsx
│ └── ProductTable.tsx
├── hooks
│ └── useProducts.ts
├── pages
│ └── ProductPage.tsx
└── types
└── product.ts
