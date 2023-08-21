"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APICall = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * @classdesc The APICall class is a class that sends an API request to a server and returns the response.
 * @class
 */
class APICall {
    /**
     * It takes in an object with a url, method, data, and headers property, and returns a promise that
     * resolves to the data from the response, or rejects with the error from the response.
     */
    send(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, axios_1.default)(params.url, {
                method: params.method,
                data: params.data,
                headers: params.headers,
            })
                .then((response) => {
                return response.data;
            })
                .catch((error) => {
                return Promise.reject(error.response.data);
            });
        });
    }
}
exports.APICall = APICall;
