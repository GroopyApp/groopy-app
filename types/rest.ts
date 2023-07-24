export type SignInRequest = {
    email: string;
    password: string;
};

export type OAuthRequest = {
    token: string;
    provider: string;
};

export type SignInResponse = {
    data: UserDetails;
    token: string;
};

export type SignUpRequest = {
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    photo_url: string;
    birth_date: string;
    phone: string;
    gender: string;
    preferred_language: string;
};

export type SignUpResponse = {
    data: UserDetails;
    token: string;
    local_id: string;
};

export type UserDetailsResponse = {
    data: UserDetails;
};

export type UserDetails = {
    user_id: string;
    name: string;
    surname: string;
    email: string;
    photo_url: string;
    birth_date: string;
};

export type WallRequest = {
    criteria: SearchCriteria;
};

export type WallResponse = {
    topics: Topic[];
};

export type GetTopicRequest = {
    id: string;
};

export type GetTopicResponse = {
    topic: Topic;
};

export type CreateTopicRequest = {
    wall_id: string;
    name: string;
    description: string;
    image_url: string;
    categories: string[];
    language: string;
};

export type CreateTopicResponse = {
    topic: Topic;
};

export type SubscribeTopicRequest = {
    topic_id: string;
    user_id: string;
};

export type SubscribeTopicResponse = {
    topic: Topic;
};

export type CreateEventRequest = {
    topic_id: string;
    name: string;
    description: string;
    location: Location;
    image_url: string;
    start_date: string;
    end_date: string;
};

export type CreateEventResponse = {
    topic: Topic;
};

export type SubscribeEventRequest = {
    event_id: string;
    user_id: string;
};

export type SubscribeEventResponse = {
    event: Event;
};

export type Topic = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    categories: string[];
    language: string;
    chatId: string;
    events?: Event[];
    subscribers?: User[];
};

export type Event = {
    id: string;
    name: string;
    description: string;
    location: Location;
    imageUrl: string;
    startDate: string;
    endDate: string;
    chatId: string;
    participants: User[];
};

export type User = {
    userId: string;
    name: string;
    surname: string;
    birthDate: string;
    email: string;
    phone: string;
    gender: string;
    language: string;
    photoUrl: string;
    subscribedTopics: string[];
    subscribedEvents: string[];
};

export type SearchCriteria = {
    location: Location;
    languages?: string[];
    hashtags?: string[];
    userId?: string;
};

export type Location = {
    location_id: string;
    latitude?: number;
    longitude?: number;
    short_address?: string;
};

export type ErrorResponse = {
    parameters: Record<string, string>;
};
