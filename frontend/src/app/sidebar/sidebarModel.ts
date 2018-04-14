export class imageModel {
    constructor(
        public name: string,
        public image: string,
        public description: string
    ) {}
}

export class userModel {
    
    constructor(
        public name: string,
        public images: Array<imageModel>
    ) {}
}
