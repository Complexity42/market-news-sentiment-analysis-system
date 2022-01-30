export interface User {
    id: string;
    avatar: string;
    name: string;
    bio: string;
    subscribed_keyword: string[];
    filtered_keyword: string[];
    created_at: string;
    updated_at: string;
}