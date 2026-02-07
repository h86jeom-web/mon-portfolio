# MonPortfolio

Portfolio professionnel de Jérôme Hengan, développeur web en formation.

## 🚀 Technologies

- **HTML5** : Sémantique et accessible
- **CSS3** : Vanilla CSS avec custom properties
- **JavaScript** : ES6+ vanilla
- **Aucun framework** : Site statique pur

## ✨ Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Thème sombre/clair avec persistance
- ✅ Navigation mobile avec menu hamburger
- ✅ Animations au scroll (Intersection Observer)
- ✅ Formulaire de contact
- ✅ Accessibilité WCAG AA
- ✅ Optimisé pour le SEO

## 📊 Audit de Qualité (Février 2026)

### Accessibilité ✅
- [x] ARIA labels complets sur tous les éléments interactifs
- [x] `aria-expanded` pour le menu mobile
- [x] `aria-pressed` pour le toggle de thème
- [x] Liens descriptifs pour les lecteurs d'écran
- [x] Skip link "Aller au contenu principal"
- [x] Attributs `autocomplete` sur le formulaire
- [x] Hiérarchie sémantique des headings (h1 → h2 → h3)

### Performance ✅
- [x] CSS critique inline dans le `<head>`
- [x] JavaScript chargé avec `defer`
- [x] Google Fonts avec `font-display: swap`
- [x] Preconnect et preload pour ressources critiques
- [x] Respect de `prefers-reduced-motion`

### SEO ✅
- [x] Meta tags Open Graph complets
- [x] Twitter Cards configurées
- [x] Structured Data (Schema.org) pour Person et WebSite
- [x] Meta description optimisée (150-160 caractères)
- [x] Canonical URL définie
- [x] Favicon configuré (à créer)

### Sémantique HTML ✅
- [x] Structure HTML5 sémantique
- [x] Un seul `<h1>` par page
- [x] Pas de saut dans la hiérarchie des headings
- [x] Utilisation appropriée de `<article>`, `<section>`, `<nav>`

## 📝 Tâches Restantes

### Images à Créer
- [ ] Créer `assets/images/og-image.jpg` (1200x630px pour Open Graph)
- [ ] Créer `assets/images/favicon-32x32.png`
- [ ] Créer `assets/images/favicon-16x16.png`
- [ ] Créer `assets/images/apple-touch-icon.png` (180x180px)
- [ ] Remplacer le placeholder photo dans la section "À propos"

### Fonctionnalités Futures
- [ ] Implémenter la validation du formulaire de contact
- [ ] Ajouter un backend pour le formulaire (Netlify Forms ou équivalent)
- [ ] Ajouter des vraies images de projets
- [ ] Créer la section Blog (en cours)
- [ ] Ajouter un sitemap.xml
- [ ] Ajouter un robots.txt
- [ ] Optimiser les images (WebP avec fallback)

## 🏃 Lancement Local

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Puis ouvrir `http://localhost:8000` dans votre navigateur.

## 📁 Structure du Projet

```
/
├── index.html           # Page principale
├── blog/                # Section blog (à venir)
│   ├── index.html
│   └── posts/
├── css/
│   └── style.css       # Styles principaux
├── js/
│   └── main.js         # JavaScript interactions
├── assets/
│   ├── images/         # Images et favicons
│   └── fonts/          # Polices personnalisées (si nécessaire)
├── templates/          # Templates pour générateur de blog
├── scripts/            # Scripts Node.js (génération blog)
├── package.json        # Dépendances Node.js
├── CLAUDE.md           # Instructions pour Claude Code
├── CLAUDE.local.md     # Informations personnelles
└── README.md           # Ce fichier
```

## 🎨 Palette de Couleurs

### Thème Sombre (par défaut)
- Background Primary: `#0a0a0a`
- Background Secondary: `#1a1a1a`
- Background Tertiary: `#2a2a2a`
- Text Primary: `#e0e0e0`
- Text Secondary: `#b0b0b0`
- Accent: `#64ffda`

### Thème Clair
- Background Primary: `#ffffff`
- Background Secondary: `#f5f5f5`
- Background Tertiary: `#e0e0e0`
- Text Primary: `#1a1a1a`
- Text Secondary: `#4a4a4a`
- Accent: `#0d9373`

## 📱 Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## ⚡ Performance

- First Contentful Paint optimisé avec CSS critique inline
- JavaScript non-bloquant (defer)
- Fonts optimisées (display=swap)
- Animations respectant `prefers-reduced-motion`

## 🔒 Sécurité

- `rel="noopener noreferrer"` sur tous les liens externes
- Validation côté client pour le formulaire
- Pas de dépendances externes (zéro vulnérabilités)

## 📄 Licence

Portfolio personnel - Tous droits réservés © 2026 Jérôme Hengan

## 🤝 Contact

- GitHub: [@h86jeom-web](https://github.com/h86jeom-web)
- Portfolio: [h86jeom-web.github.io](https://h86jeom-web.github.io/)

---

**Construit avec Claude Code** 🤖
