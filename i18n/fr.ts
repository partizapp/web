import type { Dictionary } from './en'

export const fr: Dictionary = {
  meta: {
    title: 'Jeux de soirée entre amis',
    description:
      '6 jeux de soirée endiablés. Autant de joueurs que tu veux. Zéro WiFi nécessaire.',
  },
  nav: {
    lang_label: 'English',
    lang_href: '/en',
    blog: 'Blog',
  },
  hero: {
    tagline: 'Jeux de soirée\nentre amis',
    sub: '6 jeux endiablés. Autant de joueurs que tu veux. Zéro WiFi nécessaire.',
    download_ios: "Télécharger sur l'App Store",
    download_android: 'Disponible sur Google Play',
    scroll_hint: 'Découvrir les jeux',
    coming_soon: 'Bientôt disponible',
  },
  games: {
    title: '6 jeux pour enflammer votre soirée',
    subtitle: 'Choisissez votre favori ou laissez le hasard décider.',
    random_desc: 'Laissez le hasard décider pour vous',
    items: [
      {
        name: 'ACTION OU VÉRITÉ',
        desc: 'Questions épicées & défis fous',
        emoji: '🎭',
        color: '#f97316',
      },
      {
        name: 'TU PRÉFÈRES',
        desc: 'Des choix impossibles, des débats sans fin',
        emoji: '🤔',
        color: '#06b6d4',
      },
      {
        name: "JE N'AI JAMAIS",
        desc: 'Découvrez qui a fait quoi',
        emoji: '🙈',
        color: '#eab308',
      },
      {
        name: 'LE PLUS PROBABLE',
        desc: 'Votez & désignez vos amis',
        emoji: '👉',
        color: '#ec4899',
      },
      {
        name: 'CATÉGORIES',
        desc: 'Nommez avant que le temps soit écoulé',
        emoji: '🎯',
        color: '#22c55e',
      },
      {
        name: 'IMPOSTEUR',
        desc: 'Tout le monde a le même mot — sauf un. Trouvez-le.',
        emoji: '🕵️',
        color: '#ef4444',
      },
    ],
  },
  features: {
    title: 'Pourquoi Partiz ?',
    items: [
      {
        icon: '🚀',
        title: 'Zéro configuration',
        desc: "Pas de compte, pas d'internet. Ouvre l'app et joue en quelques secondes.",
      },
      {
        icon: '👥',
        title: 'Joueurs illimités',
        desc: 'De 2 amis à toute la bande.',
      },
      {
        icon: '🌍',
        title: 'FR & EN',
        desc: 'Change de langue à tout moment dans les paramètres.',
      },
      {
        icon: '🔥',
        title: 'Toujours en évolution',
        desc: 'De nouveaux jeux et packs de contenu ajoutés régulièrement.',
      },
    ],
  },
  cta: {
    title: 'Prêts à faire la fête ?',
    sub: 'Aucune configuration. Aucun compte. Ouvrez et jouez.',
    download_ios: 'App Store',
    download_android: 'Google Play',
    coming_soon: 'Bientôt disponible',
  },
  blog: {
    title: 'Blog',
    subtitle: 'Conseils, règles et idées pour votre prochaine soirée.',
    meta_description:
      'Conseils, règles et idées pour les jeux de soirée. Apprenez à jouer à Action ou Vérité, Je n\'ai jamais, et plus.',
    back: 'Retour',
    empty: 'Aucun article pour le moment.',
  },
  footer: {
    privacy: 'Politique de confidentialité',
    rights: '© 2026 Partiz. Tous droits réservés.',
  },
  privacy: {
    title: 'Politique de confidentialité',
    meta_description:
      'Politique de confidentialité Partiz. Nous ne collectons, ne stockons ni ne partageons aucune donnée personnelle.',
    back: '← Retour',
    last_updated: 'Dernière mise à jour : janvier 2026',
    intro:
      "Partiz (« nous ») s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous traitons les informations lorsque vous utilisez l'application mobile Partiz.",
    sections: [
      {
        title: 'Informations collectées',
        content:
          "Partiz ne collecte, ne stocke et ne transmet aucune information personnelle. L'application fonctionne entièrement sur votre appareil sans nécessiter de compte ni de connexion internet. Les noms des joueurs et les données de jeu n'existent que dans la mémoire de l'application et ne sont pas sauvegardés après sa fermeture.",
      },
      {
        title: 'Aucun stockage de données',
        content:
          "Nous n'utilisons pas de bases de données, de serveurs ou de stockage en ligne. Aucune information saisie dans l'application (comme les noms des joueurs) n'est conservée sur votre appareil après la session ou transmise à nous ou à des tiers.",
      },
      {
        title: 'Aucune analyse ni suivi',
        content:
          "Partiz n'utilise pas d'outils d'analyse, de logiciels de suivi, ni de SDK tiers collectant des données comportementales. Nous ne suivons pas votre utilisation de l'application.",
      },
      {
        title: 'Aucune publicité',
        content:
          "Partiz n'affiche pas de publicités et ne partage aucune donnée avec des réseaux publicitaires.",
      },
      {
        title: 'Vie privée des enfants',
        content:
          "Partiz ne collecte sciemment aucune information d'enfants de moins de 13 ans. Puisque nous ne collectons aucune donnée, l'application est sûre pour tous les âges.",
      },
      {
        title: 'Modifications de cette politique',
        content:
          'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera reflétée sur cette page avec une date de mise à jour.',
      },
      {
        title: 'Nous contacter',
        content:
          'Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à : hello@partiz.app',
      },
    ],
  },
}
