import { RESTDataSource } from 'apollo-datasource-rest';

class AwkAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://awk.epgsky.com/hawk/linear/schedule/';
    }
 
    async getAwkData(date, sid) {
        const response = await this.get(`${date}/${sid}`);
        return response['schedule'][0];
    }
}

export default AwkAPI;
