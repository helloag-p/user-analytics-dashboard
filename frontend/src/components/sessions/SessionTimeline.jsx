import TimelineItem from "./TimelineItem";
import EmptyState from "../common/EmptyState";
function SessionTimeline({ events }) {
    if (!events.length) {

    return (

        <EmptyState

            title="No Events"

            description="Select a session to view the user journey."

        />

    );

}

    return (
        <div className="max-h-[360px] space-y-2 overflow-y-auto pr-2">

            {events.map((event) => (
                <TimelineItem
                    key={event._id}
                    event={event}
                />
            ))}

        </div>
    );
}

export default SessionTimeline;