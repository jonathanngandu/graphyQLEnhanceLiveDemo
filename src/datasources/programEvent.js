import { RESTDataSource } from 'apollo-datasource-rest';

class ProgramEventAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.condatis.sky/tv/programme/';
  }

  willSendRequest(request) {
    request.params.set('Authorization', 'ngandu');
    request.params.set('nocache', 'true');
    request.params.set('v', '1');
  }
 
  async getEvent(id) {
    const response = await this.get('event', { eids: id });
    return response[0];
  }
  
  getEventsByIds({events}) {
    return Promise.all(
        events.map(event => this.getEvent(event.eid)),
    );
  }
}

export default ProgramEventAPI;