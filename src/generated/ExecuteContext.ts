import {ExecuteContextApp} from "./ExecuteContextApp";
import {ExecuteContextUser} from "./ExecuteContextUser";
export interface ExecuteContext {
    operationId?: number
    baseUrl?: string
    tenantId?: string
    action?: string
    app?: ExecuteContextApp
    user?: ExecuteContextUser
}
