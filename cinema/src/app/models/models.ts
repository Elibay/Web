export class Movie {
    id: number;
    title: string;
    poster: string;
    genre: string;
    country: string;
    premiere: string;
    duration: string;
    age: number;
    description: string;
    comments: Array<Comment>;
}

export class Comment {
    author: string;
    text: string;
    date: string;
}


export class Cinema {
    title: string;
    address: string;
    phone: string;
    desciption: string;
}


