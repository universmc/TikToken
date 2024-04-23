const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Définir un message système optionnel. Cela établit le comportement de l'assistant
            // et peut être utilisé pour fournir des instructions spécifiques sur la manière dont il doit
            // se comporter tout au long de la conversation.
            {
                role: "system",
                content: "Vous êtes une intelligence artificielle à haute potentialité générative. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés aux technologies avancées telles que l'apprentissage automatique, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est d'accroitre ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement"
            },
            // Définir un message de l'assistant pour introduire la documentation ou la réponse.
            {
                role: "assistant",
                content: "Makefile"
            },
            // Définir un message de l'utilisateur pour lequel l'assistant doit répondre.
            {
                role: "user",
                content: "make assistant"
            }
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.9,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const cssContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/md_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, cssContent);
        console.log("Documentation généré et enregistré dans " + outputFilePath);
    });
}
main();
