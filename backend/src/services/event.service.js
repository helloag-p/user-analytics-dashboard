import Event from "../models/Event.js";

export const createEvent = async (eventData) => {
    return Event.create(eventData);
};

export const getSessions = async () => {

    return Event.aggregate([

        {
            $group: {
                _id: "$sessionId",
                totalEvents: {
                    $sum: 1
                },
                lastActivity: {
                    $max: "$timestamp"
                }
            }
        },

        {
            $project: {
                _id: 0,
                sessionId: "$_id",
                totalEvents: 1,
                lastActivity: 1
            }
        },

        {
            $sort: {
                lastActivity: -1
            }
        }

    ]);

};

export const getSessionEvents = async (sessionId) => {

    return Event.find({

        sessionId

    }).sort({

        timestamp: 1

    });

};

export const getHeatmapData = async (pageUrl) => {

    return Event.find({

        pageUrl,

        eventType: "click"

    }).select({

        _id: 0,

        "click.x": 1,

        "click.y": 1

    });

};