const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
        
            {
                role: "system",
                content: "Génère le code code source en JSON pour estre afficher dynamiquement  d'une page d'index en html,css,js"
            },
            {
                role: "assistant",
                content: "Voici le code /.json d'une page d'index simple :"
            },
        
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: "trés bien continu"
            }
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
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
        const jsonContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/json_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".json";
        fs.writeFileSync(outputFilePath, jsonContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();
