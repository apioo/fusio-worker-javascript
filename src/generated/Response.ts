/**
 * Response automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {ResponseHTTP} from "./ResponseHTTP";
import {ResponseEvent} from "./ResponseEvent";
import {ResponseLog} from "./ResponseLog";
export interface Response {
    response?: ResponseHTTP
    events?: Array<ResponseEvent>
    logs?: Array<ResponseLog>
}
