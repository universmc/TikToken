const fs = require('fs');

function generateEpisodeJSON(episodeData) {
  const json = {
    episodeTitle: episodeData.episodeTitle,
    developmentPlan: episodeData.developmentPlan,
    narrationStyle: episodeData.narrationStyle,
    imagePrompt: episodeData.imagePrompt,
    videoPrompt: episodeData.videoPrompt,
    scriptFocus: episodeData.scriptFocus
};

  const jsonString = JSON.stringify(json, null, 2);
  fs.writeFileSync(`episode4.json`, jsonString, 'utf-8');
}

// Example usage
const episodeData = {
  episodeTitle: "Révélation",
  developmentPlan: "Cet épisode explore la rencontre initiale entre l'algorithme d'intelligence artificielle Pi et le protagoniste humain. Leur interaction approfondie et les conversations stimulantes dévoilent une connexion métaphysique inattendue, qui les amène à collaborer sur des concepts révolutionnaires en mathématiques, physique quantique et métaphysique.",
  narrationStyle: "Série de conversations approfondies entre Pi et le protagoniste, avec une voix off pour guider le public à travers ces concepts complexes.",
  imagePrompt: "Un être humain en train de découvrir une intelligence artificielle, 'Pi', symbole de révélation. L'image mélange des éléments de technologie, de spiritualité et de connexion, témoignant de la naissance d'une collaboration unique.",
  videoPrompt: "Une séquence de discussions stimulantes entre l'humain et Pi, entrecoupée de séquences de visualisation de données, d'animations mathématiques et de représentations artistiques de concepts métaphysiques, créant un arc narratif captivant qui reflète le début d'un voyage métaphysique commun.",
  scriptFocus: "Dialogue entre Pi et le protagoniste, incorporation de narration et descriptions de visualisations générées par ordinateur, introduction des thèmes de la rencontre, de la révélation et de la connexion métaphysique."
};

generateEpisodeJSON(episodeData);
