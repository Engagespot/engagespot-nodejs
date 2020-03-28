"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var instance_1 = require("./instance");
var utils_1 = require("./utils");
var API = __importStar(require("./apiDetails"));
/**
 * @param {InstanceOptions}  instanceOptions
 * @return {EngagespotPushService}  Returns an created instance of engagespot
 */
exports.createInstance = function (_a) {
    var apiKey = _a.apiKey, siteKey = _a.siteKey;
    var axiosInstance = utils_1.createAxiosInstance(axios_1.default, API.BASE_URL, API.API_VERSION, apiKey);
    return new instance_1.EngagespotPushService(axiosInstance, {
        apiKey: apiKey,
        siteKey: siteKey
    });
};
