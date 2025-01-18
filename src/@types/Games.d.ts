export interface Game {
    id: number,
    cover: {
        id: number,
        image_id: string
    },
    category: number,
    name: string,
    rating: float,
    summary: string,
    collections: [{}],
}