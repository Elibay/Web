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
    id:string;
    title: string;
    poster: string;
    address: string;
    phone: string;
    desciption: string;
}

export interface IAuthResponse {
    token: string;
  }

export interface Schedule {
    id: number;
    movie: Movie;
    cinema: Cinema;
    fixture: string;
    adult_price: string;
    child_price: string;
    student_price: string;
}

export interface Hall {
    id: number;
    row: number;
    column: number;
    is_reserved: false;
    schedule: number;
}