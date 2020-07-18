import moment from 'moment'
import axios from 'axios'
import md5 from 'md5'


enum SmiteMethods {
    CreateSession = 'createsession'
}

axios.defaults.baseURL = '';

export class SmiteAPI {
    private sessionId: string = '';
    private devId: string;
    private authKey: string;
    private format = 'JSON';

    constructor(devId: string, authKey: string, format?: string) {
        console.log(`Constructing SmiteAPI instance with\ndevId:${devId}\nauthKey:${authKey}`)
        this.devId = devId;
        this.authKey = authKey;
        this.format = format ? format : this.format;
    }

    public async createSession() {
        console.log('Creating Smite Session.')
        // axios.get(this.getEndPoint(SmiteMethods.CreateSession)).then(res => {
        //     console.log(res);
        //     console.log(`Session created with session id: ${res.data.session_id}`);
        //     this.sessionId = res.data.session_id;
        // });
    }

    private getSignature(methodName: string, timestamp: string) {
        return md5(`${this.devId}${methodName}${this.authKey}${timestamp}`).toString();
    }

    private getEndPoint(methodName: string) {
        const timestamp = moment().utc().format('YYYYMMDDHHmmss');
        const signature = this.getSignature(methodName, timestamp)
        return `/${methodName}${this.format}/${this.devId}/${signature}/${timestamp}`;
    }

    public getGod(godName: string) {
        console.log(godName);
        return godName;

    }

    public getItem(itemName: string) {

    }
}

