export interface Recipe {
    id: number
    name: string
    game: string
    description: string
    ingredients: string
    steps: string
    image_url: string | null
}
