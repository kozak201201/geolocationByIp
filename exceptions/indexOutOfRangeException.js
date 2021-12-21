class IndexOutOfRangeException extends Error {
    constructor(message) {
        super(message);
        this.name = 'IndexOutOfRangeException';
        this.code = 400;
    }
}

module.exports = IndexOutOfRangeException;