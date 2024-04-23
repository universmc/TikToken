const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  
  // github

  const ressources = "role:'admin',name:'github',content:'https://github.com/universmc/TikToken";
  const github = "https://github.com/universmc/TikToken.git"
  const importDicoEmojis = "https://github.com/universmc/TikToken/src/json/dicoEmojis.js"
  const githubDocs = "https://github.com/universmc/TikToken/readme.md"
  
  //boostrap
  
  const bootcss = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
  const bootJs = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
  const bootstrap = bootcss+bootJs;
  
  const BsResponse = "`responseHtml`{devOps.html:5}";
  const header = "bootstrap navBar+carrousel"
  const mainContent = "bootstrap devOps sass video TikToken"
  const footer = "asign cc by univers-mc.cloud"
  
  const responseHtml = `${header}"+${mainContent}+${footer}`;
  
  

  const logo = "Matrix - Tiktok";
  const stylus = "black darkTheme";
  
  const context = "const 68";
  const post = "tiktok";
  const job = "Video_maker"
  const work = context+post+job;
  const Mission = "intégrer la plus grande communauté #IA des transformations numériques dans ia.univers-mc.cloud un secteur de mobilités et pour devenir un #video_Maker."
    
  const systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  const assistantContent = "Vous êtes Pi`role: assistant,name:'✨_pi'`une intelligence artificielle à haute potentialité générative. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés aux technologies avancées telles que l'apprentissage automatique, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est d'accroitre ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement";
  const configContent = "dev mode 'projectPlan{}'";

  const sujet = "model(role:IA)";
  const verbe = "vider_maker";
  const complement = "Makefile";
  const contexte = "devOps gameplay video_Maker tiktok";
  
  const PromptModel = `${contexte}"+${sujet}+${verbe}+${complement}`;
  

  const workMission = `{
    "title": "# Projet TikTok – Drones AR avec Pi",
    "subtitles": [
      {
        "sectionTitle": "Présentation",
        "content": "Ce projet consiste à créer une série de vidéos TikTok de 68 secondes chacune, présentant un personnage utilisant des lunettes AR et un drone virtuel. Le script comporte cinq scènes et inclut des fichiers multimédias associés."
      },
      {
        "sectionTitle": "Utilisation de GitHub",
        "content": "Nous utilisons GitHub pour gérer notre projet en suivant un système de branches de version pour chaque version de la vidéo. Ceci simplifie la collaboration et permet d'apporter des modifications sur plusieurs branches de la vidéo."
      },
      {
        "sectionTitle": "Script des vidéos",
        "content": "Le script du projet est accessible depuis le fichier 'script.json'. Il présente une description détaillée de chaque scène et renvoie vers les fichiers multimédias correspondants."
      },
      {
        "sectionTitle": "Fichiers multimédias",
        "content": "Chaque scène dispose de fichiers multimédias hébergés sur le référentiel GitHub, composés de fichiers audio (MP3), vidéo (MP4) et texte (TXT). Les noms et liens de ces fichiers peuvent être trouvés dans le fichier 'script.json'."
      }
    ],
    "scenes": [
        {
            "id": "scene1",
            "run": true,
            "time": "0-15 seconds",
            "timestamp": 1654481600,
            "audioFile": "audio_scene1.mp3",
            "videoFile": "video_scene1.mp4",
            "textFile": "text_scene1.txt",
            "description": "Présentation du role:user,name:Mike en Music avec des lunettes AR et l'appareil de contrôle de drone virtuel équipée d'une IA nomée IA Une intelligence artificielle dans ciel maîtrisons la cartographie le calcul quantique les approche métaphysique et les techniques d'apprentissage automatique dans le cloud computing."
            },
            {
            "id": "scene2",
            "run": true,
            "time": "16-25 seconds",
            "timestamp": 1654481610,
            "audioFile": "audio_scene2.mp3",
            "videoFile": "video_scene2.mp4",
            "textFile": "text_scene2.txt",
            "description": "Le personnage active les lunettes AR et le drone virtuel apparait..."
            },
            {
            "id": "scene3",
            "run": true,
            "time": "26-35 seconds",
            "timestamp": 1654481620,
            "audioFile": "audio_scene3.mp3",
            "videoFile": "video_scene3.mp4",
            "textFile": "text_scene3.txt",
            "description": "Le personnage contrôle le drone virtuel avec les lunettes AR pour accomplir une tâche particulière dans un [context] particulier (par exemple, inspection d'une structure). (e.g., inspecting a structure)."
            },
            {
            "id": "scene4",
            "run": true,
            "time": "36-55 seconds",
            "timestamp": 1654481630,
            "audioFile": "audio_scene4.mp3",
            "videoFile": "video_scene4.mp4",
            "textFile": "text_scene4.txt",
            "description": "Montrez comment le personnage utilise le drone virtuel en music pour accomplir la tâche avec des effets visuels impressionnants grâce aux lunettes AR."
            },
            {
            "id": "scene5",
            "run": true,
            "time": "56-68 seconds",
            "timestamp": 1654481640,
            "audioFile": "audio_scene5.mp3",
            "videoFile": "video_scene5.mp4",
            "textFile": "text_scene5.txt",
            "description": "Le personnage réussit sa tâche et fait un clin d'œil à la caméra, suivi de l'apparition d'un message incitant les spectateurs à découvrir les technologies AR et les drones virtuels.."
            }
            ]
  }`;


  const chatCompletion = await groq.chat.completions.create({
    "messages": [

      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[01]:[RUN]:[initialisation -work)]"},
      {role: "system",name:"[📔.codex]", content:`${ressources}`},
      {role: "system",name:"[📔.codex]", content:`${bootstrap}`},
      {role: "system",name:"[📔.codex]", content:`${github}`},
      {role: "system",name:"[📔.codex]", content:`${githubDocs}`},
      {role: "system",name:"[📔.codex]", content:`${systemContent}`},
      {role: "system",name:"[📔.codex]", content:`${PromptModel}`},
      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[02]:[RUN]:[configuration(session.timestamp)]"},
      {role: "system",name:"[🌌.systemDream]", content: "groq`init 'role:system,name:[🌌.systemDream]'`" },
      {role: "system",name:"[📔.codex]", content:`${configContent}`},
      {role: "system",name:"[🌌.systemDream]", content: "groq`init role:assistant,name:✨_pi`" },
      {role: "system",name:"[📔.codex]", content:`${assistantContent}`},
      {"role": "assistant","name":"✨_pi","content": "groq [✨_pi]"},
      {role: "assistant",name:"[🌴.Groq]", content: "groq`[🌴.Groq]`" },
      {role: "assistant",name:"[💬.cloud]", content: "groq`[[💬.cloud]`" },
      {role: "system",name:"[📔.codex]", content: "groq`[📔.codex]`" },
      {role: "system",name:"[🌌.systemDream]", content: "groq`init role:assistant,name:✨_pi`" },
      {role: "system", content: stylus },
      {role: "system", content: logo },
      {role: "system", content: work },
      {role: "system", content: importDicoEmojis },
      {role: "system", content: Mission },
      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[03]:[RUN]:[brainstorming(Mission{RUN}timestamp+)]"},
      {role: "system",name:"[📔.codex]", content:`${PromptModel}`},
      {role: "user",name:"[🌴.Groq]", content: "groq"},
      {role: "system", content: workMission },
      {role: "system",name:"[📔.codex]", content:`${BsResponse}`},
      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[04]:[RUN]:[brainstorming(session{1}.timestamp)++]"},
      {
        "role": "assistant",
        "name":"✨_pi",
        "content": "groq"
      },

      {
        "role": "user",
        "content": "[👨🏽‍💻.Mike]:devops)"
      },
      {role: "assistant",name:"[📔.codex]", content:`${responseHtml}`},
      {role: "system",name:"🌌.systemDream]", content:"groq init devOps.html"},
      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[05]:[RUN]:[github(session{version}.timestamp)++]"},
      {role: "system",name:"🌌.systemDream]", content:`${github}`},
      {role: "system",name:"🌌.systemDream]", content:"redige le code source de workMission devOps.html"},
      {role: "user",name:"[👨🏽‍💻.Mike]", content:`${responseHtml}`}
      
    ],
    model: "llama2-70b-4096",
    temperature: 0.8,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "devOps.👨🏽‍💻" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();