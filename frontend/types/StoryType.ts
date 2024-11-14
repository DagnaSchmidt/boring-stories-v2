export type StoryType = {
    id: string,
    title: string,
    prevImg: string,
    altText: string,
    localization: string,
    description: string,
    images: string[],
    imagesURLs?: string[],
    createdAt?: Date
};
