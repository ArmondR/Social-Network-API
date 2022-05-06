const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        require: true
    },
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

// get total reactions a thought has
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});