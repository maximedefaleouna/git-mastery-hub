export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  content: string;
  code?: CodeExample[];
}

export interface CodeExample {
  language: string;
  code: string;
  description?: string;
}

export const chapters: Chapter[] = [
  {
    id: "introduction",
    number: 1,
    title: "Introduction à Git",
    description: "Comprendre le contrôle de version et pourquoi Git est essentiel",
    icon: "BookOpen",
    sections: [
      {
        id: "what-is-git",
        title: "Qu'est-ce que Git ?",
        content: `Git est un **système de contrôle de version distribué** créé par Linus Torvalds en 2005. Il permet de suivre les modifications apportées aux fichiers et de coordonner le travail entre plusieurs personnes.

### Pourquoi utiliser Git ?

- **Historique complet** : Chaque modification est enregistrée avec son auteur et sa date
- **Travail en équipe** : Plusieurs développeurs peuvent travailler simultanément
- **Branches** : Expérimenter sans affecter le code principal
- **Sauvegarde** : Votre code est sécurisé et récupérable

### Git vs GitHub

- **Git** est l'outil de contrôle de version (local)
- **GitHub** est une plateforme d'hébergement pour les dépôts Git (cloud)`
      },
      {
        id: "how-git-works",
        title: "Comment fonctionne Git ?",
        content: `Git fonctionne avec trois zones principales :

### Les trois états

1. **Working Directory** (Répertoire de travail)
   - Vos fichiers actuels sur le disque
   
2. **Staging Area** (Zone de transit)
   - Les fichiers prêts à être commités
   
3. **Repository** (Dépôt)
   - L'historique complet de votre projet

### Le flux de travail Git

\`\`\`
Modifier → Ajouter (stage) → Commiter → Pousser
\`\`\`

Ce cycle se répète pour chaque ensemble de modifications que vous souhaitez sauvegarder.`
      }
    ]
  },
  {
    id: "installation",
    number: 2,
    title: "Installation et Configuration",
    description: "Installer Git et configurer votre environnement",
    icon: "Download",
    sections: [
      {
        id: "install-git",
        title: "Installer Git",
        content: `### Windows

Téléchargez l'installateur depuis le site officiel et suivez les instructions.`,
        code: [
          {
            language: "bash",
            code: "# Vérifier l'installation\ngit --version",
            description: "Après installation, vérifiez que Git est bien installé"
          }
        ]
      },
      {
        id: "install-macos",
        title: "Installation sur macOS",
        content: `### macOS

Git est souvent pré-installé. Sinon, utilisez Homebrew :`,
        code: [
          {
            language: "bash",
            code: "# Avec Homebrew\nbrew install git\n\n# Ou via Xcode Command Line Tools\nxcode-select --install",
            description: "Deux méthodes pour installer Git sur macOS"
          }
        ]
      },
      {
        id: "install-linux",
        title: "Installation sur Linux",
        content: `### Linux

Utilisez le gestionnaire de paquets de votre distribution :`,
        code: [
          {
            language: "bash",
            code: "# Ubuntu/Debian\nsudo apt update\nsudo apt install git\n\n# Fedora\nsudo dnf install git\n\n# Arch Linux\nsudo pacman -S git",
            description: "Installation selon votre distribution Linux"
          }
        ]
      },
      {
        id: "configure-git",
        title: "Configuration initiale",
        content: `Avant de commencer, configurez votre identité Git. Ces informations seront attachées à chaque commit.`,
        code: [
          {
            language: "bash",
            code: `# Configurer votre nom
git config --global user.name "Votre Nom"

# Configurer votre email
git config --global user.email "votre.email@example.com"

# Vérifier la configuration
git config --list`,
            description: "Configuration de base obligatoire"
          },
          {
            language: "bash",
            code: `# Définir l'éditeur par défaut (optionnel)
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "nano"          # Nano
git config --global core.editor "vim"           # Vim

# Activer les couleurs
git config --global color.ui auto

# Définir la branche par défaut
git config --global init.defaultBranch main`,
            description: "Configurations optionnelles recommandées"
          }
        ]
      }
    ]
  },
  {
    id: "basics",
    number: 3,
    title: "Les Bases de Git",
    description: "init, add, commit - Les commandes essentielles",
    icon: "Terminal",
    sections: [
      {
        id: "git-init",
        title: "Initialiser un dépôt",
        content: `La commande \`git init\` crée un nouveau dépôt Git dans le répertoire actuel.`,
        code: [
          {
            language: "bash",
            code: `# Créer un nouveau projet
mkdir mon-projet
cd mon-projet

# Initialiser Git
git init

# Résultat : un dossier .git est créé`,
            description: "Créer un nouveau dépôt Git"
          }
        ]
      },
      {
        id: "git-status",
        title: "Vérifier l'état",
        content: `\`git status\` affiche l'état actuel de votre répertoire de travail et de la zone de staging.`,
        code: [
          {
            language: "bash",
            code: `# Voir l'état du dépôt
git status

# Version courte
git status -s`,
            description: "Toujours vérifier l'état avant de commiter"
          }
        ]
      },
      {
        id: "git-add",
        title: "Ajouter des fichiers",
        content: `\`git add\` déplace les fichiers vers la zone de staging, les préparant pour le commit.`,
        code: [
          {
            language: "bash",
            code: `# Ajouter un fichier spécifique
git add fichier.txt

# Ajouter plusieurs fichiers
git add fichier1.txt fichier2.txt

# Ajouter tous les fichiers modifiés
git add .

# Ajouter tous les fichiers d'un type
git add *.js`,
            description: "Différentes façons d'ajouter des fichiers"
          }
        ]
      },
      {
        id: "git-commit",
        title: "Créer un commit",
        content: `\`git commit\` enregistre les modifications de la zone de staging dans l'historique.

### Bonnes pratiques pour les messages de commit

- Utilisez l'impératif : "Ajoute" plutôt que "Ajouté"
- Soyez concis mais descriptif
- Première ligne : résumé (50 caractères max)
- Ligne vide puis détails si nécessaire`,
        code: [
          {
            language: "bash",
            code: `# Commit avec message
git commit -m "Ajoute la page d'accueil"

# Commit avec message détaillé
git commit -m "Ajoute l'authentification utilisateur

- Implémente le formulaire de connexion
- Ajoute la validation des champs
- Configure les sessions"

# Ajouter et commiter en une commande
git commit -am "Corrige le bug de navigation"`,
            description: "Créer des commits avec des messages clairs"
          }
        ]
      },
      {
        id: "git-log",
        title: "Voir l'historique",
        content: `\`git log\` affiche l'historique des commits.`,
        code: [
          {
            language: "bash",
            code: `# Historique complet
git log

# Historique condensé
git log --oneline

# Historique avec graphe
git log --oneline --graph --all

# Historique des 5 derniers commits
git log -5`,
            description: "Explorer l'historique de votre projet"
          }
        ]
      }
    ]
  },
  {
    id: "branches",
    number: 4,
    title: "Les Branches",
    description: "Créer, naviguer et gérer les branches",
    icon: "GitBranch",
    sections: [
      {
        id: "why-branches",
        title: "Pourquoi utiliser les branches ?",
        content: `Les branches permettent de développer des fonctionnalités isolément sans affecter le code principal.

### Cas d'utilisation

- **Nouvelles fonctionnalités** : Développer sans risque
- **Corrections de bugs** : Isoler les correctifs
- **Expérimentation** : Tester des idées
- **Versions** : Maintenir plusieurs versions`
      },
      {
        id: "create-branch",
        title: "Créer et changer de branche",
        content: `Gérez vos branches avec les commandes suivantes :`,
        code: [
          {
            language: "bash",
            code: `# Voir les branches existantes
git branch

# Créer une nouvelle branche
git branch nouvelle-fonctionnalite

# Changer de branche
git checkout nouvelle-fonctionnalite

# Créer ET changer en une commande
git checkout -b ma-branche

# Méthode moderne (Git 2.23+)
git switch ma-branche
git switch -c nouvelle-branche`,
            description: "Opérations de base sur les branches"
          }
        ]
      },
      {
        id: "delete-branch",
        title: "Supprimer une branche",
        content: `Après avoir fusionné une branche, vous pouvez la supprimer.`,
        code: [
          {
            language: "bash",
            code: `# Supprimer une branche locale (fusionnée)
git branch -d ma-branche

# Forcer la suppression (non fusionnée)
git branch -D ma-branche

# Supprimer une branche distante
git push origin --delete ma-branche`,
            description: "Nettoyer les branches inutiles"
          }
        ]
      }
    ]
  },
  {
    id: "merging",
    number: 5,
    title: "Fusion et Conflits",
    description: "Fusionner les branches et résoudre les conflits",
    icon: "GitMerge",
    sections: [
      {
        id: "git-merge",
        title: "Fusionner des branches",
        content: `La fusion combine les modifications de deux branches.`,
        code: [
          {
            language: "bash",
            code: `# Se placer sur la branche de destination
git checkout main

# Fusionner une branche
git merge ma-fonctionnalite

# Fusionner avec un message personnalisé
git merge ma-fonctionnalite -m "Intègre la nouvelle fonctionnalité"`,
            description: "Processus de fusion standard"
          }
        ]
      },
      {
        id: "resolve-conflicts",
        title: "Résoudre les conflits",
        content: `Un conflit survient quand Git ne peut pas fusionner automatiquement.

### Anatomie d'un conflit

\`\`\`
<<<<<<< HEAD
Code de votre branche actuelle
=======
Code de la branche à fusionner
>>>>>>> ma-branche
\`\`\`

### Étapes de résolution

1. Identifier les fichiers en conflit
2. Éditer manuellement les fichiers
3. Supprimer les marqueurs de conflit
4. Ajouter et commiter`,
        code: [
          {
            language: "bash",
            code: `# Voir les fichiers en conflit
git status

# Après résolution manuelle
git add fichier-resolu.txt

# Finaliser la fusion
git commit -m "Résout les conflits de fusion"

# Annuler une fusion en cours
git merge --abort`,
            description: "Gérer les conflits de fusion"
          }
        ]
      },
      {
        id: "git-rebase",
        title: "Rebase vs Merge",
        content: `Le rebase réécrit l'historique pour créer une ligne droite.

### Quand utiliser quoi ?

- **Merge** : Préserve l'historique complet, recommandé pour les branches partagées
- **Rebase** : Historique linéaire propre, uniquement sur les branches locales`,
        code: [
          {
            language: "bash",
            code: `# Rebase sur main
git checkout ma-branche
git rebase main

# Rebase interactif (modifier les commits)
git rebase -i HEAD~3

# En cas de conflit pendant le rebase
git rebase --continue  # Après résolution
git rebase --abort     # Pour annuler`,
            description: "Utilisation du rebase"
          }
        ]
      }
    ]
  },
  {
    id: "github-basics",
    number: 6,
    title: "GitHub : Les Bases",
    description: "Créer un compte et votre premier dépôt distant",
    icon: "Github",
    sections: [
      {
        id: "create-account",
        title: "Créer un compte GitHub",
        content: `### Étapes de création

1. Allez sur **github.com**
2. Cliquez sur **Sign up**
3. Entrez votre email, mot de passe et nom d'utilisateur
4. Vérifiez votre email
5. Configurez votre profil

### Conseils

- Choisissez un nom d'utilisateur professionnel
- Ajoutez une photo de profil
- Complétez votre bio`
      },
      {
        id: "create-repo",
        title: "Créer un dépôt",
        content: `### Sur GitHub

1. Cliquez sur **New repository** (bouton vert)
2. Nommez votre dépôt
3. Choisissez la visibilité (public/privé)
4. Optionnel : ajoutez README, .gitignore, licence

### Depuis le terminal`,
        code: [
          {
            language: "bash",
            code: `# Après avoir créé le repo sur GitHub

# Lier un dépôt local existant
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main

# Ou cloner un dépôt existant
git clone https://github.com/username/repo.git`,
            description: "Connecter votre dépôt local à GitHub"
          }
        ]
      },
      {
        id: "ssh-setup",
        title: "Configurer SSH",
        content: `L'authentification SSH est plus sécurisée et pratique que HTTPS.`,
        code: [
          {
            language: "bash",
            code: `# Générer une clé SSH
ssh-keygen -t ed25519 -C "votre.email@example.com"

# Démarrer l'agent SSH
eval "$(ssh-agent -s)"

# Ajouter la clé
ssh-add ~/.ssh/id_ed25519

# Copier la clé publique
cat ~/.ssh/id_ed25519.pub

# Coller sur GitHub : Settings > SSH Keys > New SSH Key

# Tester la connexion
ssh -T git@github.com`,
            description: "Configuration SSH pour GitHub"
          }
        ]
      }
    ]
  },
  {
    id: "remote-operations",
    number: 7,
    title: "Push, Pull, Clone",
    description: "Synchroniser votre code avec GitHub",
    icon: "Cloud",
    sections: [
      {
        id: "git-clone",
        title: "Cloner un dépôt",
        content: `\`git clone\` crée une copie locale d'un dépôt distant.`,
        code: [
          {
            language: "bash",
            code: `# Cloner via HTTPS
git clone https://github.com/user/repo.git

# Cloner via SSH
git clone git@github.com:user/repo.git

# Cloner dans un dossier spécifique
git clone https://github.com/user/repo.git mon-dossier

# Cloner une branche spécifique
git clone -b develop https://github.com/user/repo.git`,
            description: "Différentes façons de cloner"
          }
        ]
      },
      {
        id: "git-push",
        title: "Pousser les modifications",
        content: `\`git push\` envoie vos commits locaux vers le dépôt distant.`,
        code: [
          {
            language: "bash",
            code: `# Push standard
git push origin main

# Premier push d'une nouvelle branche
git push -u origin ma-branche

# Push forcé (ATTENTION : écrase l'historique distant)
git push --force origin main

# Push de toutes les branches
git push --all origin`,
            description: "Envoyer vos modifications"
          }
        ]
      },
      {
        id: "git-pull",
        title: "Récupérer les modifications",
        content: `\`git pull\` télécharge et intègre les modifications distantes.`,
        code: [
          {
            language: "bash",
            code: `# Pull standard (fetch + merge)
git pull origin main

# Pull avec rebase
git pull --rebase origin main

# Fetch sans merge (voir les changements d'abord)
git fetch origin
git log origin/main..main
git merge origin/main`,
            description: "Récupérer les mises à jour"
          }
        ]
      },
      {
        id: "git-remote",
        title: "Gérer les remotes",
        content: `Gérez les connexions aux dépôts distants.`,
        code: [
          {
            language: "bash",
            code: `# Voir les remotes
git remote -v

# Ajouter un remote
git remote add upstream https://github.com/original/repo.git

# Modifier l'URL d'un remote
git remote set-url origin git@github.com:user/repo.git

# Supprimer un remote
git remote remove upstream`,
            description: "Gestion des dépôts distants"
          }
        ]
      }
    ]
  },
  {
    id: "pull-requests",
    number: 8,
    title: "Pull Requests",
    description: "Collaborer avec les Pull Requests",
    icon: "GitPullRequest",
    sections: [
      {
        id: "what-is-pr",
        title: "Qu'est-ce qu'une Pull Request ?",
        content: `Une Pull Request (PR) est une demande de fusion de code. Elle permet :

- **Revue de code** : Les collègues examinent les modifications
- **Discussion** : Commentaires et suggestions
- **CI/CD** : Tests automatiques avant fusion
- **Documentation** : Historique des décisions

### Workflow typique

1. Créer une branche
2. Faire des commits
3. Pousser la branche
4. Ouvrir une PR
5. Revue et discussion
6. Fusionner`
      },
      {
        id: "create-pr",
        title: "Créer une Pull Request",
        content: `### Sur GitHub

1. Allez sur votre dépôt
2. Cliquez sur **Pull requests** > **New pull request**
3. Sélectionnez les branches (base ← compare)
4. Remplissez le titre et la description
5. Assignez des reviewers
6. Cliquez sur **Create pull request**

### Bonnes pratiques

- Titre clair et descriptif
- Description détaillée des changements
- Référencez les issues liées (#123)
- Ajoutez des captures d'écran si UI`
      },
      {
        id: "review-pr",
        title: "Réviser une Pull Request",
        content: `### Types de commentaires

- **Comment** : Simple remarque
- **Approve** : Approuve les changements
- **Request changes** : Demande des modifications

### Commandes utiles`,
        code: [
          {
            language: "bash",
            code: `# Récupérer une PR localement pour test
git fetch origin pull/ID/head:nom-branche
git checkout nom-branche

# Ou avec GitHub CLI
gh pr checkout 123`,
            description: "Tester une PR localement"
          }
        ]
      }
    ]
  },
  {
    id: "github-actions",
    number: 9,
    title: "GitHub Actions",
    description: "Automatiser avec CI/CD",
    icon: "Zap",
    sections: [
      {
        id: "what-is-actions",
        title: "Introduction aux GitHub Actions",
        content: `GitHub Actions permet d'automatiser des tâches :

- **CI** : Tests automatiques à chaque push
- **CD** : Déploiement automatique
- **Automation** : Tâches répétitives

### Concepts clés

- **Workflow** : Processus automatisé (.yml)
- **Job** : Ensemble de steps
- **Step** : Tâche individuelle
- **Action** : Code réutilisable`
      },
      {
        id: "first-workflow",
        title: "Premier Workflow",
        content: `Créez le fichier \`.github/workflows/ci.yml\` :`,
        code: [
          {
            language: "yaml",
            code: `name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build`,
            description: "Workflow CI basique pour Node.js"
          }
        ]
      },
      {
        id: "deploy-workflow",
        title: "Déploiement automatique",
        content: `Exemple de déploiement vers GitHub Pages :`,
        code: [
          {
            language: "yaml",
            code: `name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Build
        run: |
          npm ci
          npm run build
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,
            description: "Déploiement automatique sur GitHub Pages"
          }
        ]
      }
    ]
  },
  {
    id: "best-practices",
    number: 10,
    title: "Bonnes Pratiques",
    description: "Conventions et workflows professionnels",
    icon: "Award",
    sections: [
      {
        id: "commit-conventions",
        title: "Conventions de commits",
        content: `### Conventional Commits

Format : \`type(scope): description\`

**Types courants :**
- \`feat\` : Nouvelle fonctionnalité
- \`fix\` : Correction de bug
- \`docs\` : Documentation
- \`style\` : Formatage
- \`refactor\` : Refactoring
- \`test\` : Tests
- \`chore\` : Maintenance`,
        code: [
          {
            language: "bash",
            code: `# Exemples de commits conventionnels
git commit -m "feat(auth): ajoute la connexion Google"
git commit -m "fix(cart): corrige le calcul du total"
git commit -m "docs(readme): met à jour les instructions"
git commit -m "refactor(api): simplifie la gestion des erreurs"`,
            description: "Exemples de Conventional Commits"
          }
        ]
      },
      {
        id: "gitflow",
        title: "Gitflow Workflow",
        content: `### Branches principales

- \`main\` : Production stable
- \`develop\` : Développement actif

### Branches de support

- \`feature/*\` : Nouvelles fonctionnalités
- \`release/*\` : Préparation des versions
- \`hotfix/*\` : Corrections urgentes`,
        code: [
          {
            language: "bash",
            code: `# Nouvelle fonctionnalité
git checkout develop
git checkout -b feature/nouvelle-feature
# ... développement ...
git checkout develop
git merge feature/nouvelle-feature

# Hotfix urgent
git checkout main
git checkout -b hotfix/bug-critique
# ... correction ...
git checkout main
git merge hotfix/bug-critique
git checkout develop
git merge hotfix/bug-critique`,
            description: "Workflow Gitflow"
          }
        ]
      },
      {
        id: "gitignore",
        title: "Fichier .gitignore",
        content: `Le \`.gitignore\` exclut les fichiers du suivi Git.`,
        code: [
          {
            language: "gitignore",
            code: `# Dépendances
node_modules/
vendor/

# Build
dist/
build/
*.min.js

# Environnement
.env
.env.local
*.env

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Cache
.cache/
*.cache`,
            description: "Exemple de .gitignore complet"
          }
        ]
      },
      {
        id: "useful-commands",
        title: "Commandes utiles",
        content: `Commandes Git avancées pour le quotidien :`,
        code: [
          {
            language: "bash",
            code: `# Annuler le dernier commit (garde les changements)
git reset --soft HEAD~1

# Modifier le dernier commit
git commit --amend -m "Nouveau message"

# Stash : mettre de côté temporairement
git stash
git stash pop
git stash list

# Voir les différences
git diff
git diff --staged

# Blâmer (voir l'auteur de chaque ligne)
git blame fichier.txt

# Nettoyer les fichiers non suivis
git clean -fd

# Cherry-pick un commit
git cherry-pick abc123`,
            description: "Commandes avancées utiles"
          }
        ]
      }
    ]
  }
];
