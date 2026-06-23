import {

    createEvent,

    getSessions,

    getSessionEvents,

    getHeatmapData

} from "../services/event.service.js";

export const trackEvent = async (req, res, next) => {

    try {

        const event = await createEvent(req.body);

        res.status(201).json({

            success: true,

            data: event

        });

    }

    catch (error) {

        next(error);

    }

};

export const fetchSessions = async (req, res, next) => {

    try {

        const sessions = await getSessions();

        res.json({

            success: true,

            data: sessions

        });

    }

    catch (error) {

        next(error);

    }

};

export const fetchSessionEvents = async (req, res, next) => {

    try {

        const events = await getSessionEvents(

            req.params.sessionId

        );

        res.json({

            success: true,

            data: events

        });

    }

    catch (error) {

        next(error);

    }

};

export const fetchHeatmap = async (req, res, next) => {

    try {

        const heatmap = await getHeatmapData(

            req.query.pageUrl

        );

        res.json({

            success: true,

            data: heatmap

        });

    }

    catch (error) {

        next(error);

    }

};