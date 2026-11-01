# Restauration de la section Skills historique

Source de référence : commit `0666f10bcde3033920178a6f0d1fa1e215c31b6a`, fichier `components/CinematicIntro.tsx`.

Le composant `SkillsWindow` commence à la ligne 758 de cette version ; ses données et composants auxiliaires commencent à la ligne 476. L'image originale provient de `public/assets/ai-brain.png`.

Le commit `e4d31a4cd32c25502100e09fc5f420294e0e9570` (« Deploy new Vite portfolio », 30 octobre 2026) supprime cette implémentation Next.js et ses images. Il introduit une grille différente dans `source/src/pages/Skills.jsx`, mais ne crée aucun lien Skills dans `SideNavigation.jsx`. Le routage `#skills` et l'id `skills` existent déjà dans la version Vite : leur absence n'est pas la cause du problème.

## Contenu restauré

`src/components/SkillsControlCenter.tsx` reprend les données, classes Tailwind, SVG, positions, panneaux et animations Framer Motion de la dernière version historique. Les sept catégories sont AI & Machine Learning, Full Stack Development, Mobile Development, Databases & Data, Tools & DevOps, Cloud Architecture et Cybersecurity.

Les libellés et compteurs historiques sont conservés tels quels, y compris « 65+ Technologies », « 13 Projects Completed » et « 4 AWS Certifications ». Aucun inventaire de technologies ni chiffre n'a été réinventé ou actualisé.

Adaptations nécessaires à Vite : imports autonomes, export du composant, remplacement de `next/image` par `img` utilisant l'image originale importée, et remplacement de `priority` par `fetchPriority="high"`. Le bouton de retour utilise le hash `#home` du routeur actuel.

## Isolation du design

`src/pages/Skills.jsx` conserve l'en-tête et la navigation du portfolio actuel autour du composant restauré. Le conteneur `#skills-legacy` remplace uniquement le contexte de fenêtre de l'ancien bureau Next.js.

Le générateur `scripts/build-skills-css.mjs` utilise Tailwind 3.4.17, comme l'ancien projet, pour reproduire les classes historiques. Tous les sélecteurs, y compris les resets, sont limités à `#skills-legacy`. Les variantes sombres suivent l'attribut `data-theme` du portfolio actuel. La police Inter historique est chargée uniquement pour la fenêtre Skills.

Le seuil de disposition bureau `lg` est porté à 1280 px pour tenir compte de la largeur réservée à la navigation actuelle : à 1024 px, les panneaux historiques en position absolue rognaient certains badges. Sous ce seuil, la disposition empilée et défilante d'origine est conservée. Le contenu, les classes JSX et les animations restent ceux du composant historique.

La fenêtre bureau réserve au minimum 800 px de hauteur pour que le panneau Cloud conserve tous ses badges sur les écrans moins hauts.

La navigation possède maintenant un lien `href="#skills"`, une icône Code2 et les libellés « Compétences » / « Skills ». Le lien actif utilise `aria-current="page"`.

## Reconstruction

Depuis `source/` :

```powershell
npm ci
npm run build
npm run lint
```

La compilation régénère automatiquement `src/styles/skills-legacy.css`, puis produit le site dans `source/dist/`. Les fichiers publiables doivent être copiés à la racine du dépôt, conformément à son organisation actuelle sur GitHub Pages. Les fichiers déjà reconstruits sont fournis dans la livraison.

Les fichiers About, Projects, Experience, Contact et Certifications, leurs données, leurs images et leurs styles restent inchangés.
