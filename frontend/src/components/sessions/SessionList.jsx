import SessionCard from "./SessionCard";

function SessionList({

    sessions,

    selectedSession,

    onSelect,

}) {

    if (!sessions.length) {

        return (

            <div className="text-center text-slate-400 mt-10">

                No sessions found

            </div>

        );

    }

    return (

        <div className="space-y-3">

            {sessions.map((session) => (

                <SessionCard

                    key={session.sessionId}

                    session={session}

                    selected={
                        selectedSession === session.sessionId
                    }

                    onSelect={onSelect}

                />

            ))}

        </div>

    );

}

export default SessionList;