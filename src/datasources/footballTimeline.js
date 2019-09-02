const { RESTDataSource } = require('apollo-datasource-rest');

class FootballTimelineAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.condatis.sky/football/timeline/';
  }

  willSendRequest(request) {
    request.params.set('Authorization', 'ngandu');
    request.params.set('nocache', 'true');
    request.params.set('v', '1');
  };
 
  async getTimeline(matchId) {
    const response = await this.get(matchId);
    return response[0];
  };
}

module.exports = FootballTimelineAPI;
