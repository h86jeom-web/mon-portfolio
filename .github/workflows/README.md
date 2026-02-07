# Workflows GitHub Actions

## 🚀 Pipeline CI/CD

Ce repository utilise GitHub Actions pour automatiser le processus de test et de déploiement.

### Workflow : `deploy.yml`

**Déclencheurs :**
- Push sur la branche `main`
- Pull requests vers `main`

**Pipeline en 2 étapes :**

#### 1️⃣ Tests & Vérifications
- ✅ Validation HTML
- ✅ Linting CSS (stylelint)
- ✅ Linting JavaScript (eslint)
- ✅ Vérification des fichiers requis
- ✅ Validation JSON (projects.json)

#### 2️⃣ Déploiement
- 🚀 Déploiement automatique sur GitHub Pages
- 🌐 Site accessible à : https://h86jeom-web.github.io/mon-portfolio/

### Comment ça fonctionne

```
1. Push vers main
   ↓
2. GitHub Actions démarre
   ↓
3. Tests & Vérifications
   ├─ Validation HTML
   ├─ Linting CSS/JS
   ├─ Vérification fichiers
   └─ Validation JSON
   ↓
4. Si tous les tests passent ✅
   ↓
5. Déploiement sur GitHub Pages 🚀
   ↓
6. Site mis à jour automatiquement
```

### Badges de statut

Vous pouvez ajouter ce badge dans votre README principal :

```markdown
![Deploy Status](https://github.com/h86jeom-web/mon-portfolio/actions/workflows/deploy.yml/badge.svg)
```

### Logs et débogage

Pour voir les résultats des workflows :
1. Allez dans l'onglet **Actions** du repository
2. Cliquez sur un workflow spécifique
3. Consultez les logs de chaque étape

### Durée moyenne

- Tests : ~2 minutes
- Déploiement : ~1 minute
- **Total : ~3 minutes** de la push au site en ligne

### En cas d'échec

Si les tests échouent :
1. Le déploiement est **bloqué** ❌
2. Consultez les logs pour voir l'erreur
3. Corrigez le problème localement
4. Poussez à nouveau

Le site n'est déployé que si tous les tests passent ! 🛡️
