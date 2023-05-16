const questions = [
    {
      "Citation": "Tu es là, dans une cérémonie officielle, tu te comportes comme il faut. Donc tu peux faire l'imbécile, mais aujourd'hui c'est la Marseillaise, le Chant des partisans, donc tu m'appelles […] “Monsieur”. D'accord? Voilà",
      "Author": "EM",
      "Source": "https://www.lefigaro.fr/politique/le-scan/2018/06/18/25001-20180618ARTFIG00201-tu-m-appelles-monsieur-le-president-macron-recadre-un-jeune-qui-l-appelle-manu.php",
      "Video": "https://www.youtube.com/watch?v=CkOOXvlUP3M"
    },
    {
      "Citation": "Le jour où tu veux faire la révolution, tu apprends d'abord à avoir un diplôme et à te nourrir toi-même, d'accord? Et à ce moment-là tu iras donner des leçons aux autres.",
      "Author": "EM",
      "Source": "https://www.lefigaro.fr/politique/le-scan/2018/06/18/25001-20180618ARTFIG00201-tu-m-appelles-monsieur-le-president-macron-recadre-un-jeune-qui-l-appelle-manu.php",
      "Video": "https://www.youtube.com/watch?v=CkOOXvlUP3M"
    },
    {
      "Citation": "c'est pas la faute de la France, pardon de le dire dans des termes aussi crus. Vous n'avez pas été capables de restaurer votre souveraineté. Ni militaire, ni sécuritaire, ni administrative, de votre pays, c'est aussi une réalité. Faut pas chercher des coupables à l'extérieur.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=hbYrU2SldeM",
      "Video": "https://www.youtube.com/watch?v=hbYrU2SldeM"
    },
    {
      "Citation": "-Je ne bois pas d'alcool.<br>Quelle drôle d'idée! Quelle religion peut être assez stupide pour priver ses fidèles d'un tel plaisir?<br>-La religion musulmane. [...]<br>-Ah j'ignorais.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=Hkrh0tZ2a2E",
      "Video": "https://www.youtube.com/watch?v=Hkrh0tZ2a2E"
    },
    {
      "Citation": "Quelque part vous me parlez, comme si j'étais toujours une puissance coloniale. Mais moi, je ne veux pas m'occuper d'électricité dans les universités au Burkina Faso. C'est le travail du président... Du coup, il s'en va... Reste là! Du coup, il est parti réparer la climatisation.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=ziqdRQrTmmY",
      "Video": "https://www.youtube.com/watch?v=ziqdRQrTmmY"
    },
    {
      "Citation": "On s'ra pas tout le temps là, on s'ra pas tout le temps là.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=avrmiFo2jcg",
      "Video": "https://www.youtube.com/watch?v=avrmiFo2jcg"
    },
    {
      "Citation": "S'ils veulent un responsable, il est devant vous, qu'ils viennent le chercher.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=_e0XFhEmiS4",
      "Video": "https://www.youtube.com/watch?v=_e0XFhEmiS4"
    },
    {
      "Citation": "Vous n'allez pas me faire peur avec votre tee-shirt. La meilleure façon de se payer un costard c'est de travailler.",
      "Author": "EM",
      "Source": "https://www.lexpress.fr/politique/macron-tee-shirt-et-costard-ce-qu-il-s-est-vraiment-passe_1796599.html",
      "Video": ""
    },
    {
      "Citation": "Je ne suis pas arrogant. Je dis et je fais ce que je veux.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=A2OYiyQ7eLw",
      "Video": "https://www.youtube.com/watch?v=A2OYiyQ7eLw"
    },
    {
      "Citation": "Une gare c'est un lieu où on croise les gens qui réussissent et les gens qui ne sont rien.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=z83hJ2LA3NI",
      "Video": "https://www.youtube.com/watch?v=z83hJ2LA3NI"
    },
    {
      "Citation": "C'est le vrai monde dehors. Et le vrai monde, il va chez le coiffeur.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=a2LnIv8lpxM",
      "Video": "https://www.youtube.com/watch?v=a2LnIv8lpxM"
    },
    {
      "Citation": "La politique sociale regardez: on met un pognon de dingues dans les minima sociaux, les gens ils sont quand même pauvres.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=z83hJ2LA3NI",
      "Video": "https://www.youtube.com/watch?v=z83hJ2LA3NI"
    },
    {
      "Citation": "Le problème avec l'arabe, c'est que ce n'est pas facilement lisible, même au niveau du son hein… mais enfin c'est joli, c'est joli quand même.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=v0LoF3V9_ls",
      "Video": "https://www.youtube.com/watch?v=v0LoF3V9_ls"
    },
    {
      "Citation": "C'est quand même bien mieux une voiture propre non?",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=v0LoF3V9_ls",
      "Video": "https://www.youtube.com/watch?v=v0LoF3V9_ls"
    },
    {
      "Citation": "Il s'agirait de grandir, il s'agirait de grandir.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=v0LoF3V9_ls",
      "Video": "https://www.youtube.com/watch?v=v0LoF3V9_ls"
    },
    {
      "Citation": "Le général de Gaulle n'a-t-il pas dit que toute la France était résistante?",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=v0LoF3V9_ls",
      "Video": "https://www.youtube.com/watch?v=v0LoF3V9_ls"
    },
    {
      "Citation": "-Tous les allemands ne sont pas nazis.<br>-Oui, j'ai déjà entendu cette théorie.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=v0LoF3V9_ls",
      "Video": "https://www.youtube.com/watch?v=v0LoF3V9_ls"
    },
    {
      "Citation": "Vous savez les hommes sont rarement des mères de famille.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=v0LoF3V9_ls",
      "Video": "https://www.youtube.com/watch?v=v0LoF3V9_ls"
    },
    {
      "Citation": "Attendez, attendez, c'est lesquels les Chinois qui étaient alliés aux nazis?",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=v0LoF3V9_ls",
      "Video": "https://www.youtube.com/watch?v=v0LoF3V9_ls"
    },
    {
      "Citation": "Si nous avons affaire à des Chinois de Chine, ça ne marche plus.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=v0LoF3V9_ls",
      "Video": "https://www.youtube.com/watch?v=v0LoF3V9_ls"
    },
    {
      "Citation": "Le dialogue a bel et bien été réengagé, mais il ne mène pour le moment pas très loin.",
      "Author": "EM",
      "Source": "https://www.lemonde.fr/international/live/2023/04/07/quel-bilan-pour-la-visite-d-emmanuel-macron-en-chine-posez-vos-questions-a-notre-correspondant_6168625_3210.html",
      "Video": ""
    },
    {
      "Citation": "Changer le monde, changer le monde, vous êtes bien sympathiques mais… faudrait déjà vous lever le matin.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=a2LnIv8lpxM&t=43s",
      "Video": "https://www.youtube.com/watch?v=a2LnIv8lpxM&t=43s"
    },
    {
      "Citation": "Il est complètement crétin c'gamin!",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=VpbhmR171N0",
      "Video": "https://www.youtube.com/watch?v=VpbhmR171N0"
    },
    {
      "Citation": "Changer le monde?! Quelle drôle d'idée! Il est très bien comme ça le monde, pourquoi le changer?",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=3uvMwT69WsY",
      "Video": "https://www.youtube.com/watch?v=3uvMwT69WsY"
    },
    {
      "Citation": "Je sais pas si vous êtes au courant mais le monde, il bouge, et il bouge vite, et vous n'allez pas tarder à rester sur le carreau, moi j'vous l'dis hein.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=a2LnIv8lpxM&t=43s",
      "Video": "https://www.youtube.com/watch?v=a2LnIv8lpxM&t=43s"
    },
    {
      "Citation": "J'ai très envie de les emmerder, on va continuer de le faire jusqu'au bout, c'est ça la stratégie.",
      "Author": "EM",
      "Source": "https://www.bfmtv.com/sante/macron-charge-les-non-vaccines-j-ai-tres-envie-de-les-emmerder-on-va-continuer-de-le-faire_AV-202201040466.html",
      "Video": ""
    },
    {
      "Citation": "C'est pas les casseroles qui feront avancer la France.",
      "Author": "EM",
      "Source": "https://www.youtube.com/shorts/Jr4jD28TY-I",
      "Video": "https://www.youtube.com/shorts/Jr4jD28TY-I"
    },
    {
      "Citation": "Ce qui est ici possible est lié à une culture, un peuple marqué par son histoire et ce peuple luthérien qui a vécu les transformations des dernières décennies, n'est pas exactement le Gaulois réfractaire au changement",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=3_6hDHIYSNg&t=4s&ab_channel=LeMonde",
      "Video": "https://www.youtube.com/watch?v=3_6hDHIYSNg&t=4s&ab_channel=LeMonde"
    },
    {
      "Citation": "nous avons tous quelque chose en commun, cette part d'Européen qui nous unit.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=3_6hDHIYSNg&t=4s&ab_channel=LeMonde",
      "Video": "https://www.youtube.com/watch?v=3_6hDHIYSNg&t=4s&ab_channel=LeMonde"
    },
    {
      "Citation": "Je ne cèderai rien, ni aux fainéants, ni aux cyniques, ni aux extrêmes, et je vous demande d'avoir chaque jour la même détermination.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=3_6hDHIYSNg&t=4s&ab_channel=LeMonde",
      "Video": "https://www.youtube.com/watch?v=3_6hDHIYSNg&t=4s&ab_channel=LeMonde"
    },
    {
      "Citation": "Les Françaises et les Français détestent les réformes.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=3_6hDHIYSNg",
      "Video": "https://www.youtube.com/watch?v=3_6hDHIYSNg"
    },
    {
      "Citation": "Mais enfin c'est absurde. Tout le monde rêve d'être français, à commencer par vous.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=JxTJYscKNKg",
      "Video": "https://www.youtube.com/watch?v=JxTJYscKNKg"
    },
    {
      "Citation": "ça m'en touche une sans bouger l'autre.",
      "Author": "EM",
      "Source": "https://twitter.com/BFMTV/status/1547080446869209088",
      "Video": "https://twitter.com/BFMTV/status/1547080446869209088"
    },
    {
      "Citation": "Il y a dans cette société une majorité de femmes, il y en a qui sont, pour beaucoup, illettrées.",
      "Author": "EM",
      "Source": "https://www.europe1.fr/economie/Macron-et-les-illettres-de-Gad-une-polemique-et-un-vrai-sujet-677004",
      "Video": ""
    },
    {
      "Citation": "L'argent que j'ai gagné dans ma vie, je l'ai gagné.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=YtA5IiNsS_k&ab_channel=RidiculeTV",
      "Video": "https://www.youtube.com/watch?v=YtA5IiNsS_k&ab_channel=RidiculeTV"
    },
    {
      "Citation": "C'est très important de s'aimer, et c'est très important de se respecter.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=YtA5IiNsS_k&ab_channel=RidiculeTV",
      "Video": "https://www.youtube.com/watch?v=YtA5IiNsS_k&ab_channel=RidiculeTV"
    },
    {
      "Citation": "L'argent ne se mange pas. Il ne se mange pas, je confirme. Il ne se respire pas. Il ne s'aime pas, ou alors on devient très dangereux.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=cdaRxwsP9-c&ab_channel=RidiculeTV",
      "Video": "https://www.youtube.com/watch?v=cdaRxwsP9-c&ab_channel=RidiculeTV"
    },
    {
      "Citation": "Parce que nous sommes des enracinés, il y a des arbres à côté de nous, il y a des rivières, il y a des poissons, il y a des frères et des sœurs. Et c'est ce commun notre trésor.",
      "Author": "EM",
      "Source": "https://www.youtube.com/watch?v=cdaRxwsP9-c&ab_channel=RidiculeTV",
      "Video": "https://www.youtube.com/watch?v=cdaRxwsP9-c&ab_channel=RidiculeTV"
    },
    {
      "Citation": "hôtels, cafés, restaurants, je traverse la rue, je vous en trouve [du travail]! Ils veulent simplement des gens qui sont prêts à travailler",
      "Author": "EM",
      "Source": "https://fr.wikipedia.org/wiki/Je_traverse_la_rue_et_je_vous_trouve_un_travail",
      "Video": ""
    },
    {
      "Citation": "-N'êtes-vous pas le meilleur ? <br>-Je vous répondrais « oui », ce serait de la prétention ; je vous répondrais « non », ce serait de la bêtise. ",
      "Author": "OSS",
      "Source": "https://fr.wikiquote.org/wiki/OSS_117_:_Alerte_rouge_en_Afrique_noire",
      "Video": ""
    },
    {
      "Citation": "Pour ma part, je ne crois pas au président \"normal\". Les Français n’attendent pas cela. Au contraire, un tel concept les déstabilise, les insécurise.",
      "Author": "EM",
      "Source": "https://www.challenges.fr/election-presidentielle-2017/interview-exclusive-d-emmanuel-macron-je-ne-crois-pas-au-president-normal_432886",
      "Video": ""
    },
    {
      "Citation": "Je n'ai évidemment jamais dit que je me voyais comme Jupiter!",
      "Author": "EM",
      "Source": "https://www.rtl.fr/actu/politique/macron-definit-l-image-du-president-jupiterien-dans-son-interview-au-point-7789901076",
      "Video": ""
    },
    {
      "Citation": "C’est l’inexpugnable arrogance de votre beauté qui m’asperge.",
      "Author": "OSS",
      "Source": "https://www.femmeactuelle.fr/actu/news-actu/oss-117-les-20-meilleures-repliques-cultes-de-la-saga-2117530",
      "Video": ""
    },
    {
      "Citation": "On a beau dire, mais la France ça reste quand même le pays des 400 fromages.",
      "Author": "OSS",
      "Source": "https://www.femmeactuelle.fr/actu/news-actu/oss-117-les-20-meilleures-repliques-cultes-de-la-saga-2117530",
      "Video": ""
    },
    {
      "Citation": "Ça fait un peu, Jacques a dit a dit pas de charcuterie.",
      "Author": "OSS",
      "Source": "https://www.femmeactuelle.fr/actu/news-actu/oss-117-les-20-meilleures-repliques-cultes-de-la-saga-2117530",
      "Video": ""
    },
    {
      "Citation": "On dirait une poissonnière de Ménilmontant!",
      "Author": "OSS",
      "Source": "https://hitek.fr/actualite/top-repliques-oss-117_15313",
      "Video": ""
    },
    {
      "Citation": "Les Africains sont joyeux, sympathiques, rigolards. Ils dansent bien. Il faut cependant nuancer ce constat: ils ne sont pas très soigneux, ni très responsables. Il faut toujours être derrière eux.",
      "Author": "OSS",
      "Source": "https://fr.wikiquote.org/wiki/OSS_117_:_Alerte_rouge_en_Afrique_noire",
      "Video": ""
    },
    {
      "Citation": "De toute façon, quand y en a pour un, y en a pour deux non?",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=avrmiFo2jcg",
      "Video": "https://www.youtube.com/watch?v=avrmiFo2jcg"
    },
    {
      "Citation": "développement, modernité,… Moi je veux bien, mais enfin, si y avait pas les Occidentaux…",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=avrmiFo2jcg",
      "Video": "https://www.youtube.com/watch?v=avrmiFo2jcg"
    },
    {
      "Citation": "On a jamais les bons papiers. Faut toujours revenir. Quand on revient, ils sont plus là. Où ils sont? Ça j'en sais rien. Hein? A la sieste ou à la prière ou partis manger des boulettes j'en sais rien, mais, c'est pas clair.",
      "Author": "OSS",
      "Source": "https://www.youtube.com/watch?v=avrmiFo2jcg",
      "Video": "https://www.youtube.com/watch?v=avrmiFo2jcg"
    },
  ]