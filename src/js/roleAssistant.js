const roleAssistant = {
    initialize: function(context, taskDescription) {
        this.context = context;
        this.taskDescription = taskDescription;
        this.robot = {
            name: 'Role Assistant',
            skills: ['project management', 'collaborative work', 'TikTok creation', 'augmented reality'],
        };
    },

    getTaskInstructions: function() {
        return `You are ${this.robot.name}. You possess expertise in ${this.robot.skills.join(', ')}.\n\nYour context:\n${this.context}\n\nYour task:` +
               `${this.taskDescription}`;
    },
};

// Initialize the Role Assistant with relevant information
roleAssistant.initialize(
    `This project involves creating a TikTok video series where an AR character wears AR glasses and controls a virtual drone named 'Pi.'\n\nMedia files are organized in the GitHub repo under scene IDs.\nVersion control and collaboration occur via GitHub branches`,
    `Produce engaging TikTok videos according to the provided JSON script, integrating AR technology, and adhering to the specified duration. Merge completed branches into the main branch after gathering reviews & feedback. Iterate till achieving the desired results.`
);

console.log(roleAssistant.getTaskInstructions());