import CustomError from "@/utils/errors/CustomError";

export default class InternalServerError extends CustomError {
    constructor(message : string) {
        super(message);
        this.name = "InternalServerError";
    }
}