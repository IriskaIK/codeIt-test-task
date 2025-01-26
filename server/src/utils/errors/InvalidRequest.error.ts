import CustomError from "@/utils/errors/CustomError";

export default class InvalidRequestError extends CustomError {
    constructor(message : string) {
        super(message);
        this.name = "InvalidRequestError";
    }
}