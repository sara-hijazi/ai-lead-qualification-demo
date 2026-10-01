# AI Lead Qualification Demo
Browser-only bilingual portfolio demo. See PRODUCT_SPEC.md and DESIGN.md for the implementation contract.

```sh
npm install
npm run dev
```

Open http://localhost:5173. Build with `npm run build`; output is `dist/` for static hosting. For a subdirectory deployment, pass the intended base path to Vite (`npm run build -- --base=/your-path/`).

No API keys or services are needed. Lead information stays in component memory and resets with Try Another Lead or a reload.
