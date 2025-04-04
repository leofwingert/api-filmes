import { Movie } from "./movie";

export class Review {
  private _content: string;
  private _rating: number;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _movieId: string;
  private _movie: Movie;

  constructor(
    _content: string,
    _rating: number,
    _movieId: string,
  ) {
    this._content = _content;
    this._rating = _rating;
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this._movieId = _movieId;
    this._movie = new Movie(_movieId);
  }

  public get movieId(): string {
    return this._movieId;
  }

  public get rating(): number {
    return this._rating;
  }

  public get content(): string {
    return this._content;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public set content(value: string) {
    this._content = value;
  }

  public set rating(value: number) {
    this._rating = value;
  }

  public set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  public get movie(): Movie {
    return this._movie;
  }  
}