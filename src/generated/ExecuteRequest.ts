import {ExecuteRequestContext} from "./ExecuteRequestContext";
export interface ExecuteRequest {
    arguments?: Record<string, string>
    payload?: any
    context?: ExecuteRequestContext
}
