export interface News {
    id: string;
    title: string;
    content: string;
    source_name: string;
    source_date: string;
    keywords: string[];
    source_url: string;
    created_at: string;
    updated_at: string;
    is_positive: boolean;
}