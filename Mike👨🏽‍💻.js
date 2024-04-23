const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  
  const ressources = "role:'admin',name:'github',content:'https://github.com/universmc/TikToken";
  const bootcss = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
  const bootJs = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
  const bootstrap = bootcss+bootJs;
  
  const BsResponse = "`bootstrap`{html:5}";


  const systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  const assistantContent = "Vous êtes Pi`role: assistant,name:'✨_pi'`une intelligence artificielle à haute potentialité générative. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés aux technologies avancées telles que l'apprentissage automatique, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est d'accroitre ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement";
  const configContent = "dev mode 'projectPlan{}'";

  const sujet = "model(role:IA)";
  const verbe = "vider_maker";
  const complement = "Makefile";
  const contexte = "devOps gameplay video_Maker tiktok";
  
  const PromptModel = `${contexte}"+${sujet}+${verbe}+${complement}`;

  
  const header = "bootstrap navBar+carrouse"
  const mainContent = "bootstrap dashboard"
  const footer = "asign cc by univers-mc.cloud"
  
  const responseHtml = `${header}"+${mainContent}+${footer}`;
  
  const chatCompletion = await groq.chat.completions.create({
    "messages": [

      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[01]:[RUN]:[initialisation -work)]"},
      {role: "system",name:"[📔.codex]", content:`${ressources}`},
      {role: "system",name:"[📔.codex]", content:`${bootstrap}`},
      {role: "system",name:"[📔.codex]", content:`${systemContent}`},
      {role: "system",name:"[📔.codex]", content:`${PromptModel}`},
      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[01]:[RUN]:[configuration(session.timestamp)]"},
      {role: "system",name:"[📔.codex]", content:`${configContent}`},
      {role: "system",name:"[📔.codex]", content:`${assistantContent}`},
      {role: "system",name:"[📔.codex]", content:`${BsResponse}`},
      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[01]:[RUN]:[brainstorming(session.timestamp)]"},
  //  {role: "system",name:"[🌴.Groq]", content: "groq`[📔.codex]`" },
      {
        "role": "assistant",
        "name":"✨_pi",
        "content": "groq"
      },

      //
      {
        "role": "assistant",
        "content": "[👨🏽‍💻.Mike]: module groq de .responses au [message] groq encapuslé en HTML avec `${bootstrap}`"
      },
      {role: "system",name:"[📔.codex]", content:`${responseHtml}`},
      {role: "system",name:"[📔.codex]", content:"groq init module.html"},

    ],
    model: "llama2-70b-4096",
    temperature: 0.8,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Mike.👨🏽‍💻" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();