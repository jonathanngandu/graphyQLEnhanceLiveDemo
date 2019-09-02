const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        getEvent(id: String): Event
        getEvents(date: Int, eid: Int): [Event]
    }

    type Event {
        eid: String
        matchId: Int,
        sportId: Int,
        competitionId: Int,
        isEnhanced: Boolean,
        hasInGameClips: Boolean
    }
`;

module.exports = typeDefs;