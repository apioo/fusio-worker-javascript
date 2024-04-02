export interface ExecuteRequestContext {
    type?: string
    uriFragments?: Record<string, string>
    method?: string
    path?: string
    queryParameters?: Record<string, string>
    headers?: Record<string, string>
}
