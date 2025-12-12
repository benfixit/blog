export type PostType = {
    slug: string;
    content: string;
    metadata: PostMetadataType;
};

export type PostMetadataType = {
    title: string;
    created: string;
    thumbnail: string;
    description: string;
    published: boolean;
}