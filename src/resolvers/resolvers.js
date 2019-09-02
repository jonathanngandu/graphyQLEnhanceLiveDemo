module.exports = {
    Query: {
        getEvent: (_, { id }, { dataSources }) =>
        dataSources.programEventApi.getEvent(id),
        
        async getEvents(_, args, {dataSources}) {
            const awk = await dataSources.awkApi.getAwkData(args.date, args.eid);
            return dataSources.programEventApi.getEventsByIds(awk);
        },
    }
};
