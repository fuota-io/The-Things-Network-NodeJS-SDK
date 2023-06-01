export declare class Mqtt {
    private host;
    private port;
    private api_key;
    private username;
    private clientId;
    private connectUrl;
    private password;
    client: any;
    constructor(host: string, port: number, username: string, api_key: string);
}
