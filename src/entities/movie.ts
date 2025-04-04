import { Review } from "./review";

export class Movie {
    private _title: string;
    private _details?: string;
    private _director?: string;
    private _releaseDate?: Date;
    private _genre?: string;
    private _reviews: Review[];
    private _slug: string;

  constructor(
    _title: string,
    _details?: string,
    _director?: string,
    _releaseDate?: Date,
    _genre?: string,
  ) {
    this._title = _title;
    this._details = _details;
    this._director = _director;
    this._releaseDate = _releaseDate;
    this._genre = _genre;
    this._reviews = [];
    this._slug = this._title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get details(): string | undefined {
        return this._details;
    }

    public set details(value: string | undefined) {
        this._details = value;
    }

    public get director(): string | undefined {
        return this._director;
    }

    public set director(value: string | undefined) {
        this._director = value;
    }

    public get releaseDate(): Date | undefined {
        return this._releaseDate;
    }

    public set releaseDate(value: Date | undefined) {
        this._releaseDate = value;
    }

    public get genre(): string | undefined {
        return this._genre;
    }

    public set genre(value: string | undefined) {
        this._genre = value;
    }

    public get reviews(): Review[] {
        return this._reviews;
    }

    public get slug(): string {
        return this._slug;
    }
}