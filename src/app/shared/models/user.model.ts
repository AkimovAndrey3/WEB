export class User {
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public favoriteBook = "Данные неизвесты",
        public readingTime = "Данные неизвесты",
        public id?: number
    ) {}
}
