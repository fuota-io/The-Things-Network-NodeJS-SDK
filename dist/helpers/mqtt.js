"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mqtt = void 0;
const mqtt = __importStar(require("mqtt"));
class Mqtt {
    constructor(host, port, username, api_key) {
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
exports.Mqtt = Mqtt;
