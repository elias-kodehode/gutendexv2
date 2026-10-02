# React + TypeScript + Vite

## GitHub Pages

In the repository's **Settings → Pages → Build and deployment**, set **Source**
to **GitHub Actions**. Push to `main`, or run **Deploy to GitHub Pages** manually
from the Actions tab.

The site deploys to https://elias-kodehode.github.io/gutendexv2/.
The Pages build uses `/gutendexv2/` for assets and hash routing (for example,
`/gutendexv2/#/`) so refreshing route links works on static hosting.
Development and normal builds continue to use browser routing.

To preview the Pages build locally:

```sh
npm run build:pages
npm run preview:pages
```

Open http://localhost:4173/gutendexv2/.
If the repository is renamed, update the Pages `base` in `vite.config.ts`.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
