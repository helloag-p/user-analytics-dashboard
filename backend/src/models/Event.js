import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        sessionId: {
            type: String,
            required: true,
            index: true,
        },

        eventType: {
            type: String,
            required: true,
            enum: ["page_view", "click"],
        },

        pageUrl: {
            type: String,
            required: true,
            index: true,
        },

        timestamp: {
            type: Date,
            default: Date.now,
        },

        click: {
            x: Number,
            y: Number,
        },
    },
    {
        versionKey: false,
    }
);

eventSchema.index({
    sessionId: 1,
    timestamp: 1,
});

export default mongoose.model("Event", eventSchema);