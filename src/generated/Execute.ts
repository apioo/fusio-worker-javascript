import {ExecuteConnection} from "./ExecuteConnection";
import {ExecuteRequest} from "./ExecuteRequest";
import {ExecuteContext} from "./ExecuteContext";
export interface Execute {
    connections?: Record<string, ExecuteConnection>
    request?: ExecuteRequest
    context?: ExecuteContext
}
