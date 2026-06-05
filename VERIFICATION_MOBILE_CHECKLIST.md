# ✅ CHECKLIST VÉRIFICATION MOBILE AVANT DÉPLOIEMENT

## 🎯 À VÉRIFIER SUR VOTRE TÉLÉPHONE OU EN MODE RESPONSIVE

### **Avant d'ouvrir les fichiers HTML :**
- [ ] Lire ce document complètement
- [ ] Télécharger les fichiers refactorisés
- [ ] Avoir style-global.css dans le même dossier que les .html

---

## 📱 VÉRIFICATIONS MOBILES PAR PAGE

### **ACCUEIL.html** (Page d'accueil)

**Sur téléphone (375-480px) :**
- [ ] Logo M en haut droit : **PETIT** (65px ou moins) ✓
- [ ] Titre "MIZOULPAN" : **Lisible** (1.4-1.6rem) ✓
- [ ] Sous-titre "Apprendre..." : **PETIT** (0.8-0.85rem) ✓
- [ ] 3 cartes empilées : **1 colonne, pas 2** ✓
- [ ] Texte cartes : **Petit mais lisible** (0.75-0.95rem) ✓
- [ ] Pas d'overflow horizontal ✓
- [ ] Boutons cliquables facilement ✓

**Sur tablette (768px) :**
- [ ] Logo M : 75px ✓
- [ ] Titre : 1.6rem (ok) ✓
- [ ] Sous-titre : 0.85rem (ok) ✓
- [ ] Cartes : 1-2 colonnes selon largeur ✓

**Sur desktop (900px+) :**
- [ ] Logo M : 120px ✓
- [ ] Titre : 2.5rem (grand, c'est normal) ✓
- [ ] Sous-titre : 1.1rem ✓

---

### **DICO.html** (Dictionnaire)

**Sur téléphone (375-480px) :**
- [ ] Header avec drapeaux : **Bien formaté** ✓
- [ ] Grille catégories : **2-3 colonnes max** ✓
- [ ] Icônes catégories : **Petites** (1.8rem emoji) ✓
- [ ] Noms catégories : **PETIT** (0.75rem) ✓
- [ ] Tableau scrollable : **Horizontal scroll OK** ✓
- [ ] Texte hébreu tableau : **Lisible** (0.9rem) ✓
- [ ] Texte français tableau : **PETIT** (0.65-0.75rem) ✓
- [ ] Input recherche : **Facile à taper** ✓
- [ ] Pas de coupure de contenu ✓

**Sur tablette (768px) :**
- [ ] Catégories : grille 3-4 colonnes ✓
- [ ] Icônes : 2rem ✓
- [ ] Tableau : moins de scrolling ✓
- [ ] Font tailles : 0.75-1rem (tableau) ✓

**Sur desktop (900px+) :**
- [ ] Catégories : grille 5-6 colonnes ✓
- [ ] Icônes : 2.2rem ✓
- [ ] Tableau : full width ✓
- [ ] Font tailles : 0.95-1.1rem ✓

---

### **EXERCICES.html** (Exercices de dictée)

**Sur téléphone (375-480px) :**

**PAGE SETUP :**
- [ ] Logo M : **PETIT** (65px) ✓
- [ ] Titre "Exercices" : **1.1rem** ✓
- [ ] Buttons "Sens" et "Niveau" : **Petit texte** (0.8rem) ✓
- [ ] Pills (boutons choix) : **Compacts** ✓
- [ ] Bouton "Commencer" : **Visible et cliquable** ✓
- [ ] Pas d'overflow horizontal ✓

**PAGE PHASE DICTÉE :**
- [ ] Header présent (logo + drapeaux) : **✓ CRITIQUE !** ✓
- [ ] Question hébreu : **Lisible** (1.2rem, pas 1.8rem!) ✓
- [ ] Boutons audio/micro : **Petits** (1.8rem emojis) ✓
- [ ] Input réponse : **Accessible au toucher** ✓
- [ ] Boutons validation : **Compacts** (0.75rem texte) ✓
- [ ] Score/stats : **0.8rem font** (pas 3rem!) ✓
- [ ] Pas d'overflow ✓

**PAGE RÉSULTAT :**
- [ ] Emoji trophy : **Bon size** (2.5rem) ✓
- [ ] Score final : **Lisible** (1.8rem, pas 4rem!) ✓
- [ ] Boutons : **Compacts mais cliquables** ✓

**Sur tablette (768px) :**
- [ ] Question : 1.4rem ✓
- [ ] Score : 2.2rem ✓
- [ ] Emoji : 3rem ✓
- [ ] Input : 1rem ✓

**Sur desktop (900px+) :**
- [ ] Question : 1.8rem ✓
- [ ] Score : 3rem ✓
- [ ] Emoji : 4rem ✓
- [ ] Input : 1.1rem ✓

---

### **QUIZ/INDEX.html** (Quiz)

**Sur téléphone (375-480px) :**
- [ ] Header bleu : **Redesigné** (pas l'ancienne version) ✓
- [ ] Logo M : **65px** ✓
- [ ] Drapeaux affichés ✓
- [ ] Titre "Mizoulpan Quiz" : **Petit** (1.1-1.3rem) ✓
- [ ] Onglets catégories : **Scrollables horizontal** ✓
- [ ] Question FR : **1rem** (pas 1.45rem!) ✓
- [ ] Question HE : **1.4rem** (pas 1.9rem!) ✓
- [ ] Boutons réponse : **1.15rem** (pas 1.5rem!) ✓
- [ ] Boutons réponse HE : **1.2rem** (pas 1.55rem!) ✓
- [ ] Pas d'overflow ✓

**PAGE RÉSULTAT :**
- [ ] Score : **Lisible** (1.3rem, pas 2rem!) ✓
- [ ] Stats : **0.65rem label** ✓
- [ ] Boutons : **Compacts** ✓

**Sur tablette (768px) :**
- [ ] Question FR : 1.2rem ✓
- [ ] Question HE : 1.6rem ✓
- [ ] Boutons : 1.3rem ✓
- [ ] Score : 1.6rem ✓

**Sur desktop (900px+) :**
- [ ] Question FR : 1.45rem ✓
- [ ] Question HE : 1.9rem ✓
- [ ] Boutons : 1.5rem ✓
- [ ] Score : 2rem ✓

---

## 🧪 COMMENT TESTER

### **Test 1 : Mode Responsive du navigateur**
```
1. Ouvrir la page dans navigateur (Chrome/Firefox/Safari)
2. F12 (ouvrir DevTools)
3. Cliquer icône "Responsive" en haut
4. Sélectionner appareils prédéfinis :
   - iPhone SE (375px)
   - iPhone 12 (390px)
   - Samsung Galaxy S21 (360px)
   - iPad (768px)
5. Tester chaque breakpoint
```

### **Test 2 : Sur vrai téléphone**
```
1. Ouvrir sur téléphone réel
2. Vérifier que :
   - Rien n'est coupé à droite
   - Texte est lisible (pas trop gros, pas trop petit)
   - Boutons sont tactiles (≥44px)
   - Pas de scrolling horizontal involontaire
```

### **Test 3 : Breakpoints spécifiques**
```
Tester exactement sur ces largeurs (DevTools) :
- 375px (iPhone SE)
- 480px (Android petit)
- 768px (Tablette)
- 900px (Desktop min)
```

---

## ⚠️ RED FLAGS À ÉVITER

### **Si vous voyez ça, c'est MAUVAIS ❌**

- [ ] **Texte trop gros sur mobile** → Scroll horizontal forcé
- [ ] **Logo M énorme** (>75px sur 375px) → Prend trop de place
- [ ] **Titre "MIZOULPAN" > 1.5rem sur 375px** → Déborde
- [ ] **Tableau sans scroll** → Coupé à droite
- [ ] **Boutons < 44px** → Impossible à toucher
- [ ] **Input réponse minuscule** → Impossible à taper
- [ ] **Question hébreu > 1.5rem sur 375px** → Déborde
- [ ] **Score/results > 2rem sur 375px** → Déborde
- [ ] **Padding > 20px sur mobile** → Perte d'espace
- [ ] **Grille 1 carte devient 2 sur mobile** → Mauvais responsive

---

## ✅ POINTS POSITIFS À VOIR

### **Si vous voyez ça, c'est BON ✅**

- [ ] Tout est lisible sans scroll horizontal
- [ ] Texte adapté à chaque taille écran
- [ ] Logo progressif (120px → 75px → 65px)
- [ ] Boutons facilement cliquables
- [ ] Zéro débordement de contenu
- [ ] Header cohérent sur toutes les pages
- [ ] Drapeaux affichés correctement
- [ ] Hébreu lisible malgré direction RTL
- [ ] Grilles responsive (1 col → 2 → 4 cols)
- [ ] Pas de changement du JavaScript

---

## 📊 TABLEAU DE VÉRIFICATION RAPIDE

```
┌─────────────────┬──────────┬──────────┬──────────┐
│ ÉLÉMENT         │ 375px    │ 768px    │ 900px+   │
├─────────────────┼──────────┼──────────┼──────────┤
│ Logo M          │ 65px ✓   │ 75px ✓   │ 120px ✓  │
│ H1 MIZOULPAN    │ 1.4rem ✓ │ 1.6rem ✓ │ 2.5rem ✓ │
│ H2/H3           │ 1rem ✓   │ 1.1rem ✓ │ 1.3rem ✓ │
│ Corps texte     │ 0.8rem ✓ │ 0.9rem ✓ │ 1rem ✓   │
│ Hébreu tableau  │ 0.9rem ✓ │ 1rem ✓   │ 1.1rem ✓ │
│ Question hébreu │ 1.2rem ✓ │ 1.4rem ✓ │ 1.8rem ✓ │
│ Réponse choices │ 1.15rem ✓│ 1.3rem ✓ │ 1.5rem ✓ │
│ Score final     │ 1.8rem ✓ │ 2.2rem ✓ │ 3rem ✓   │
│ Padding card    │ 16px ✓   │ 20px ✓   │ 40px ✓   │
└─────────────────┴──────────┴──────────┴──────────┘
```

---

## 🎯 RÉSUMÉ FINAL

### **Avant déploiement, vérifier :**

- [ ] Accueil sur 375px : Logo petit, titre 1.4rem, cartes 1 col
- [ ] Dico sur 375px : Catégories 2-3 cols, tableau scrollable
- [ ] Exercices PHASE sur 375px : Header présent (!), question 1.2rem
- [ ] Quiz sur 375px : Question FR 1rem, HE 1.4rem, score 1.8rem
- [ ] Aucun overflow horizontal sur 375px
- [ ] Tous les boutons sont cliquables (≥44px)
- [ ] Logo M progressif (65px → 75px → 120px)

**Si tout ✓ → DÉPLOYER EN CONFIANCE 🚀**
**Si ❌ sur un point → ALERTER AVANT DÉPLOIEMENT ⚠️**

---

**VERSION** : Checklist Mobile v1.0
**DERNIÈRE MAJ** : Juin 2026
**STATUS** : À TESTER AVANT DÉPLOIEMENT
