import {GATEWAY_CONFIG} from "../configs/constants";
import {
    CreateEventRequest, CreateEventResponse,
    CreateTopicRequest, CreateTopicResponse,
    GetTopicRequest, GetTopicResponse,
    WallRequest,
    WallResponse,
    SignInRequest, SignInResponse,
    SignUpRequest, SignUpResponse,
    SubscribeEventRequest, SubscribeEventResponse,
    SubscribeTopicRequest, SubscribeTopicResponse
} from "../types/rest";
import SessionService from "./SessionService";
import {UserSession} from "../context/types";

const GatewayService = {
    getWall: async (request: WallRequest, token: string) => {
        const response = await apiRequestCall<WallResponseWrapper>({"wallRequest": request}, token);
        return response["wallResponse"];
    },
    login: async (request: SignInRequest) => {
        const response = await apiAuthCall<SignInResponseWrapper>({"signInRequest": request});
        const result = response["signInResponse"];
        await SessionService.storeSession({
            username: result.data.user_id,
            email: result.data.email,
            firstName: result.data.name,
            lastName: result.data.surname,
            imageUrl: result.data.photo_url,
            token: result.token
        } as UserSession);
    },
    updateTopicSubscription: async (request: SubscribeTopicRequest, token: string) => {
        const response = await apiRequestCall<SubscribeTopicResponseWrapper>({"subscribeTopicRequest": request}, token);
        return response["subscribeTopicResponse"];
    },
    updateEventSubscription: async (request: SubscribeEventRequest, token: string) => {
        const response = await apiRequestCall<SubscribeEventResponseWrapper>({"subscribeEventRequest": request}, token);
        return response["subscribeEventResponse"];
    },
}

const apiRequestCall = async <T>(request: WallRequestWrapper |
                                     GetTopicRequestWrapper |
                                     CreateTopicRequestWrapper |
                                     SubscribeTopicRequestWrapper |
                                     CreateEventRequestWrapper |
                                     SubscribeEventRequestWrapper,
                                 token: string): Promise<T> => {
    return await apiCall(GATEWAY_CONFIG.requestEndpoint, request,{'x-auth-token': token}) as T;
}

const apiAuthCall = async <T>(request): Promise<T> => {
    return await apiCall(GATEWAY_CONFIG.authEndpoint, request) as T;
}

const apiCall = async <T>(endpoint, request, additionalHeaders?): Promise<T> => {
    const url = GATEWAY_CONFIG.host + endpoint;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': 'ce602c1f-865f-44c2-bda0-184766fbb805',
            ...additionalHeaders
        },
        body: JSON.stringify(request)
    });

    if (response.status === 200) {
        return await response.json() as T;
    } else {
        throw new Error('Error');
    }
}

type Wrapper<T> = {
    [key: string]: T;
};

type WallRequestWrapper = Wrapper<WallRequest>;
type GetTopicRequestWrapper = Wrapper<GetTopicRequest>;
type CreateTopicRequestWrapper = Wrapper<CreateTopicRequest>;
type SubscribeTopicRequestWrapper = Wrapper<SubscribeTopicRequest>;
type CreateEventRequestWrapper = Wrapper<CreateEventRequest>;
type SubscribeEventRequestWrapper = Wrapper<SubscribeEventRequest>;
type SignInRequestWrapper = Wrapper<SignInRequest>;
type SignUpRequestWrapper = Wrapper<SignUpRequest>;

type WallResponseWrapper = Wrapper<WallResponse>;
type GetTopicResponseWrapper = Wrapper<GetTopicResponse>;
type CreateTopicResponseWrapper = Wrapper<CreateTopicResponse>;
type SubscribeTopicResponseWrapper = Wrapper<SubscribeTopicResponse>;
type CreateEventResponseWrapper = Wrapper<CreateEventResponse>;
type SubscribeEventResponseWrapper = Wrapper<SubscribeEventResponse>;
type SignInResponseWrapper = Wrapper<SignInResponse>;
type SignUpResponseWrapper = Wrapper<SignUpResponse>;

export default GatewayService;