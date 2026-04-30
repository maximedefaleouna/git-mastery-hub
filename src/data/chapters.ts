import githubImg from "@/assets/github.png";
import GitImg from "@/assets/gitM.webp";
import BrancheImg from "@/assets/branche.webp";
import conflitImg from "@/assets/conflit.png";
import actionImg from "@/assets/actions.webp";
import pullIMg from "@/assets/pull.png";

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  sections: Section[];
  image?: string;
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
    image: GitImg,
    description:
      "Comprendre le contrôle de version et pourquoi Git est essentiel",
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
  - **GitHub** est une plateforme d'hébergement pour les dépôts Git (cloud)`,
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

  
  Modifier → Ajouter (stage) → Commiter → Pousser
  

  Ce cycle se répète pour chaque ensemble de modifications que vous souhaitez sauvegarder.`,
      },
    ],
  },
  {
    id: "installation",
    number: 2,
    title: "Installation et Configuration",
    description:
      "Installer Git et configurer votre environnement de développement",
    icon: "Download",
    sections: [
      {
        id: "overview-installation",
        title: "Vue d'ensemble de l'installation",
        content: `Avant de commencer à utiliser Git, vous devez l'installer sur votre système. Git est disponible pour tous les principaux systèmes d'exploitation.

### Systèmes d'exploitation supportés

- **Windows** : Toutes versions récentes (7, 8, 10, 11)
- **macOS** : macOS 10.9 ou supérieur
- **Linux** : Toutes distributions principales (Ubuntu, Debian, Fedora, Arch, etc.)

### Vérifier si Git est déjà installé

Ouvrez votre terminal (Command Prompt, PowerShell, Terminal, ou iTerm) et tapez :`,
        code: [
          {
            language: "bash",
            code: "git --version",
            description: "Vérifier la version de Git installée",
          },
        ],
      },
      {
        id: "windows-installation",
        title: "Installation sur Windows",
        content: `### Méthode 1 : Installateur officiel (recommandé)

1. **Télécharger l'installateur** depuis le site officiel :
   - https://git-scm.com/download/win

2. **Exécuter l'installateur** :
   - Acceptez les termes de licence
   - Sélectionnez les composants (gardez les options par défaut)
   - Choisissez l'éditeur par défaut (Vim ou VS Code recommandé)
   - Pour le terminal, choisissez "Use Git from Git Bash only"
   - Configurez les fins de ligne : "Checkout Windows-style, commit Unix-style"
   - Terminal : "Use MinTTY"
   - Fonctions expérimentales : décochez les options

3. **Valider l'installation** :
   Ouvrez **Git Bash** depuis le menu Démarrer et vérifiez la version.

### Méthode 2 : Winget (Windows Package Manager)

Si vous avez Windows 10/11 avec Winget :`,
        code: [
          {
            language: "bash",
            code: "# Installer via Winget\nwinget install --id Git.Git -e --source winget\n\n# Vérifier l'installation\ngit --version",
            description: "Installation rapide avec Winget (Windows moderne)",
          },
        ],
      },
      {
        id: "windows-git-bash",
        title: "Git Bash et configuration Windows",
        content: `### Qu'est-ce que Git Bash ?

Git Bash est un émulateur de terminal pour Windows qui fournit un environnement de type Unix, incluant les commandes bash les plus courantes.

### Configurations importantes

1. **Activer Git dans PowerShell/CMD** :
   Lors de l'installation, choisissez "Git from the command line and also from 3rd-party software"

2. **Conseils pour Windows** :
   - Utilisez **Windows Terminal** (disponible sur Microsoft Store) pour une meilleure expérience
   - Configurez **VS Code** comme éditeur par défaut

3. **Dépannage Windows** :
   - Problèmes de permissions : Exécutez Git Bash en tant qu'administrateur
   - Caractères spéciaux : Utilisez UTF-8 dans les paramètres de terminal
   - Chemins longs : Activez le support des chemins longs dans Windows`,
        code: [
          {
            language: "bash",
            code: '# Configurer VS Code comme éditeur\ngit config --global core.editor "code --wait"\n\n# Pour Notepad++ (si installé)\ngit config --global core.editor "\'C:/Program Files/Notepad++/notepad++.exe\' -multiInst -notabbar -nosession -noPlugin"\n\n# Vérifier les paramètres\ngit config --list',
            description: "Configuration de l'éditeur sur Windows",
          },
        ],
      },
      {
        id: "macos-installation",
        title: "Installation sur macOS",
        content: `### Méthode 1 : Homebrew (recommandé pour développeurs)

Homebrew est un gestionnaire de paquets pour macOS. Installez-le d'abord si nécessaire.

### Méthode 2 : Installateur officiel

1. **Télécharger l'installateur** :
   - https://git-scm.com/download/mac
   
2. **Ouvrir le fichier .dmg**
3. **Suivre les instructions d'installation**

### Méthode 3 : Xcode Command Line Tools

Git est inclus avec les outils de ligne de commande Xcode :`,
        code: [
          {
            language: "bash",
            code: '# Installer Homebrew (si pas déjà installé)\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n\n# Installer Git avec Homebrew\nbrew install git\n\n# Mettre à jour Git\nbrew upgrade git',
            description:
              "Installation avec Homebrew (méthode la plus flexible)",
          },
          {
            language: "bash",
            code: "# Installer les Xcode Command Line Tools (inclut Git)\nxcode-select --install\n\n# Accepter la licence (si nécessaire)\nsudo xcodebuild -license accept\n\n# Vérifier l'installation\ngit --version",
            description: "Installation via Xcode Command Line Tools",
          },
        ],
      },
      {
        id: "macos-tips",
        title: "Conseils et configuration macOS",
        content: `### Configuration optimale pour macOS

1. **Utiliser Git avec macOS** :
   - Le terminal par défaut fonctionne bien avec Git
   - Pour une meilleure expérience, utilisez **iTerm2** (https://iterm2.com)
   - Configurez **Oh My Zsh** pour des fonctionnalités Git avancées

2. **Mise à jour de Git** :
   Si vous avez installé Git via Xcode, il peut être obsolète.

3. **Problèmes courants macOS** :
   - **Permissions** : Évitez d'utiliser sudo avec Git sauf nécessaire
   - **Keychain** : Git peut utiliser le keychain macOS pour stocker les identifiants
   - **Finder** : Activez l'affichage des fichiers cachés pour voir le dossier .git`,
        code: [
          {
            language: "bash",
            code: '# Installer Oh My Zsh (optionnel mais recommandé)\nsh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n\n# Recharger la configuration\nsource ~/.zshrc',
            description: "Améliorer l'expérience Git avec Oh My Zsh",
          },
          {
            language: "bash",
            code: "# Mettre à jour Git (si installé via Xcode)\nbrew install git\n\n# Forcer l'utilisation de la version Homebrew\necho 'export PATH=\"/usr/local/bin:$PATH\"' >> ~/.zshrc\nsource ~/.zshrc\n\n# Vérifier le chemin\ntype -a git",
            description: "Mettre à jour et utiliser la version Homebrew de Git",
          },
        ],
      },
      {
        id: "linux-installation",
        title: "Installation sur Linux",
        content: `### Distribution spécifique

Git est disponible dans les dépôts officiels de toutes les distributions Linux majeures.`,
        code: [
          {
            language: "bash",
            code: "# Ubuntu, Debian, Linux Mint\nsudo apt update\nsudo apt install git git-doc git-man gitk\n\n# Vérifier la version\ngit --version",
            description: "Installation sur Debian/Ubuntu et dérivés",
          },
          {
            language: "bash",
            code: "# Fedora\nsudo dnf install git git-all\n\n# RHEL / CentOS 8+\nsudo yum install git\n\n# CentOS 7\nsudo yum install epel-release\nsudo yum install git",
            description: "Installation sur Fedora/RHEL/CentOS",
          },
          {
            language: "bash",
            code: "# Arch Linux / Manjaro\nsudo pacman -S git\n\n# Vérifier\npacman -Qi git",
            description: "Installation sur Arch Linux",
          },
          {
            language: "bash",
            code: "# openSUSE\nsudo zypper install git",
            description: "Installation sur openSUSE",
          },
        ],
      },
      {
        id: "configure-git",
        title: "Configuration initiale de Git",
        content: `### Configuration essentielle

Après l'installation, configurez votre identité Git. Ces informations seront associées à chaque commit que vous effectuerez.

### Paramètres recommandés

1. **Identité** : Nom et email (reflète votre identité professionnelle)
2. **Éditeur par défaut** : Votre éditeur de texte préféré
3. **Configuration des fins de ligne** : Important pour la compatibilité multi-plateforme
4. **Couleurs** : Activer les couleurs pour une meilleure lisibilité
5. **Branche par défaut** : Configurez 'main' comme branche par défaut`,
        code: [
          {
            language: "bash",
            code: '# Configuration essentielle (OBLIGATOIRE)\ngit config --global user.name "Votre Nom"\ngit config --global user.email "votre.email@entreprise.com"\n\n# Pour les contributeurs open source\ngit config --global user.email "votre.nom@users.noreply.github.com"\n\n# Vérification\ngit config --global user.name\ngit config --global user.email',
            description: "Configuration de base obligatoire",
          },
          {
            language: "bash",
            code: '# Configuration de l\'éditeur par défaut\n\n# Pour VS Code (recommandé)\ngit config --global core.editor "code --wait"\n\n# Pour Nano\ngit config --global core.editor "nano"\n\n# Pour Vim\ngit config --global core.editor "vim"\n\n# Pour Sublime Text (macOS)\ngit config --global core.editor "subl -n -w"\n\n# Pour Atom\ngit config --global core.editor "atom --wait"',
            description: "Configuration de différents éditeurs",
          },
        ],
      },
      {
        id: "advanced-configuration",
        title: "Configuration avancée",
        content: `### Paramètres recommandés

Ces paramètres améliorent l'expérience Git et préviennent les erreurs courantes.

### Configuration des fins de ligne

Important pour travailler entre Windows et Unix. Configurez Git pour gérer automatiquement les fins de ligne :

- **Windows** : checkout Windows-style, commit Unix-style
- **macOS/Linux** : Pas de conversion

### Autres paramètres utiles

1. **Alias** : Créez des raccourcis pour les commandes fréquentes
2. **Credential helper** : Gestionnaire d'identifiants`,
        code: [
          {
            language: "bash",
            code: "# Activer les couleurs\ngit config --global color.ui auto\ngit config --global color.branch auto\ngit config --global color.diff auto\ngit config --global color.status auto\n\n# Fins de ligne (Cross-platform)\n# Pour Windows\ngit config --global core.autocrlf true\n\n# Pour macOS/Linux\ngit config --global core.autocrlf input\n\n# Branche par défaut\ngit config --global init.defaultBranch main",
            description: "Paramètres de configuration avancés",
          },
          {
            language: "bash",
            code: "# Alias utiles\ngit config --global alias.co checkout\ngit config --global alias.br branch\ngit config --global alias.ci commit\ngit config --global alias.st status\ngit config --global alias.unstage 'reset HEAD --'\ngit config --global alias.last 'log -1 HEAD'\ngit config --global alias.lg \"log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit\"\n\n# Pour voir tous les alias\ngit config --global alias.alias '!git config --get-regexp ^alias\\. | sed -e s/^alias\\.//'",
            description: "Alias Git pour gagner du temps",
          },
        ],
      },
      {
        id: "verify-installation",
        title: "Vérifier et tester l'installation",
        content: `### Tests de validation

Après installation et configuration, vérifiez que tout fonctionne correctement.

### Étapes de vérification

1. **Version de Git** : Vérifiez la version installée
2. **Configuration** : Vérifiez tous les paramètres
3. **Premier dépôt** : Créez un dépôt test
4. **Opérations de base** : Testez add, commit, status`,
        code: [
          {
            language: "bash",
            code: '# Vérifier l\'installation\ngit --version\n\n# Afficher toute la configuration\ngit config --list --show-origin\n\n# Tester Git avec un dépôt temporaire\nmkdir test-git && cd test-git\ngit init\necho "# Test Git" > README.md\ngit add README.md\ngit commit -m "Initial commit"\ngit status\ngit log --oneline\n\n# Nettoyer\ncd .. && rm -rf test-git',
            description: "Tests complets de l'installation Git",
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Dépannage et FAQ",
        content: `### Problèmes courants et solutions

#### Git n'est pas reconnu comme commande
- **Windows** : Redémarrer après installation ou vérifier le PATH
- **macOS** : Vérifier que /usr/local/bin est dans le PATH
- **Linux** : Vérifier l'installation avec le gestionnaire de paquets

#### Problèmes de permissions
- Évitez d'utiliser sudo avec Git
- Vérifiez les permissions du dossier .gitconfig

#### Problèmes de fins de ligne
- Configurez correctement core.autocrlf
- Utilisez .gitattributes pour les projets multi-plateformes

### Ressources utiles
- **Documentation officielle** : https://git-scm.com/doc
- **Pro Git book** : https://git-scm.com/book
- **Stack Overflow** : https://stackoverflow.com/questions/tagged/git
- **GitHub Docs** : https://docs.github.com`,
        code: [
          {
            language: "bash",
            code: "# Résoudre les problèmes de PATH\n\n# macOS/Linux\necho 'export PATH=\"/usr/local/bin:$PATH\"' >> ~/.zshrc\nsource ~/.zshrc\n\n# Vérifier\nwhich git\n\n# Réparer les permissions\nsudo chown -R $(whoami) ~/.gitconfig\nsudo chown -R $(whoami) ~/.ssh",
            description: "Résolution des problèmes courants",
          },
        ],
      },
      {
        id: "next-steps",
        title: "Prochaines étapes",
        content: `### Vous êtes prêt à commencer !

Maintenant que Git est installé et configuré, vous pouvez :

1. **Créer votre premier dépôt** :
   - Initialisez un nouveau projet
   - Clonez un dépôt existant depuis GitHub

2. **Apprendre les commandes de base** :
   - git init : Créer un nouveau dépôt
   - git clone : Copier un dépôt existant
   - git status : Vérifier l'état
   - git add : Ajouter des fichiers
   - git commit : Sauvegarder les changements

### Ressources pour continuer

- **Tutoriel interactif** : https://try.github.io
- **Jeu d'apprentissage** : https://ohmygit.org
- **Cours gratuit** : https://gitimmersion.com
- **Référence des commandes** : https://git-scm.com/docs

### Conseils pour débutants

- Commencez avec des projets personnels
- Utilisez git status fréquemment
- Faites des commits petits et fréquents
- Ne paniquez pas si vous faites une erreur - Git a des commandes pour réparer presque tout !`,
      },
    ],
  },
  //   {
  //     id: "installation",
  //     number: 2,
  //     title: "Installation et Configuration",
  //     description: "Installer Git et configurer votre environnement",
  //     icon: "Download",
  //     sections: [
  //       {
  //         id: "install-git",
  //         title: "Installer Git",
  //         content: `### Windows

  // Téléchargez l'installateur depuis le site officiel et suivez les instructions.`,
  //         code: [
  //           {
  //             language: "bash",
  //             code: "# Vérifier l'installation\ngit --version",
  //             description:
  //               "Après installation, vérifiez que Git est bien installé",
  //           },
  //         ],
  //       },
  //       {
  //         id: "install-macos",
  //         title: "Installation sur macOS",
  //         content: `### macOS

  // Git est souvent pré-installé. Sinon, utilisez Homebrew :`,
  //         code: [
  //           {
  //             language: "bash",
  //             code: "# Avec Homebrew\nbrew install git\n\n# Ou via Xcode Command Line Tools\nxcode-select --install",
  //             description: "Deux méthodes pour installer Git sur macOS",
  //           },
  //         ],
  //       },
  //       {
  //         id: "install-linux",
  //         title: "Installation sur Linux",
  //         content: `### Linux

  // Utilisez le gestionnaire de paquets de votre distribution :`,
  //         code: [
  //           {
  //             language: "bash",
  //             code: "# Ubuntu/Debian\nsudo apt update\nsudo apt install git\n\n# Fedora\nsudo dnf install git\n\n# Arch Linux\nsudo pacman -S git",
  //             description: "Installation selon votre distribution Linux",
  //           },
  //         ],
  //       },
  //       {
  //         id: "configure-git",
  //         title: "Configuration initiale",
  //         content: `Avant de commencer, configurez votre identité Git. Ces informations seront attachées à chaque commit.`,
  //         code: [
  //           {
  //             language: "bash",
  //             code: `# Configurer votre nom
  // git config --global user.name "Votre Nom"

  // # Configurer votre email
  // git config --global user.email "votre.email@example.com"

  // # Vérifier la configuration
  // git config --list`,
  //             description: "Configuration de base obligatoire",
  //           },
  //           {
  //             language: "bash",
  //             code: `# Définir l'éditeur par défaut (optionnel)
  // git config --global core.editor "code --wait"  # VS Code
  // git config --global core.editor "nano"          # Nano
  // git config --global core.editor "vim"           # Vim

  // # Activer les couleurs
  // git config --global color.ui auto

  // # Définir la branche par défaut
  // git config --global init.defaultBranch main`,
  //             description: "Configurations optionnelles recommandées",
  //           },
  //         ],
  //       },
  //     ],
  //   },
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
            description: "Créer un nouveau dépôt Git",
          },
        ],
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
            description: "Toujours vérifier l'état avant de commiter",
          },
        ],
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
            description: "Différentes façons d'ajouter des fichiers",
          },
        ],
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
            description: "Créer des commits avec des messages clairs",
          },
        ],
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
            description: "Explorer l'historique de votre projet",
          },
        ],
      },
    ],
  },
  {
    id: "branches",
    number: 4,
    image: BrancheImg,
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
- **Versions** : Maintenir plusieurs versions`,
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
            description: "Opérations de base sur les branches",
          },
        ],
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
            description: "Nettoyer les branches inutiles",
          },
        ],
      },
    ],
  },
  {
    id: "merging",
    number: 5,
    image: conflitImg,
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
            description: "Processus de fusion standard",
          },
        ],
      },
      {
        id: "resolve-conflicts",
        title: "Résoudre les conflits",
        content: `Un conflit survient quand Git ne peut pas fusionner automatiquement.

### Anatomie d'un conflit

\`\`\`
Code de la branche à fusionner
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
            description: "Gérer les conflits de fusion",
          },
        ],
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
            description: "Utilisation du rebase",
          },
        ],
      },
    ],
  },
  {
    id: "github-basics",
    number: 6,
    title: "GitHub : Les Bases",
    description: "Créer un compte et votre premier dépôt distant",
    icon: "Github",
    image: githubImg,
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
- Complétez votre bio`,
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
            description: "Connecter votre dépôt local à GitHub",
          },
        ],
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
            description: "Configuration SSH pour GitHub",
          },
        ],
      },
    ],
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
            description: "Différentes façons de cloner",
          },
        ],
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
            description: "Envoyer vos modifications",
          },
        ],
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
            description: "Récupérer les mises à jour",
          },
        ],
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
            description: "Gestion des dépôts distants",
          },
        ],
      },
    ],
  },
  {
    id: "pull-requests",
    number: 8,
    image: pullIMg,
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
6. Fusionner`,
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
- Ajoutez des captures d'écran si UI`,
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
            description: "Tester une PR localement",
          },
        ],
      },
    ],
  },
  {
    id: "github-actions",
    image: actionImg,
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
- **Action** : Code réutilisable`,
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
            description: "Workflow CI basique pour Node.js",
          },
        ],
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
            description: "Déploiement automatique sur GitHub Pages",
          },
        ],
      },
    ],
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
            description: "Exemples de Conventional Commits",
          },
        ],
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
            description: "Workflow Gitflow",
          },
        ],
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
            description: "Exemple de .gitignore complet",
          },
        ],
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
            description: "Commandes avancées utiles",
          },
        ],
      },
    ],
  },
];
