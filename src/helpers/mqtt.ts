import * as mqtt from 'mqtt';

export class Mqtt {
  private host: string;
  private port: string;
  private api_key: string;
  private username: string;
  private clientId: string;
  private connectUrl: string;
  private password: string;
  public client: any;

  constructor(host: string, port: number, username: string, api_key: string) {
    this.host = host;
    this.port = port.toString();
    this.username = username;
    this.api_key = api_key;
    this.clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
    this.connectUrl = `mqtts://${this.host}:${this.port}`;
    this.password = this.api_key;

    this.client = mqtt.connect(this.connectUrl, {
      clientId: this.clientId,
      clean: true,
      username: this.username,
      password: this.password,
    });
  }
}