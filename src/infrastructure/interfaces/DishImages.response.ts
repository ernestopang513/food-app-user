export interface DishImagesResponse {
    id:          string;
    price:       number;
    name:        string;
    description: string;
    image:      Image;
}

export interface Image {
    id:        string;
    url_image: string;
}
