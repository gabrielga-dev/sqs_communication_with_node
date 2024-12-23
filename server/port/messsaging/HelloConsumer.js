import generateSqsConsumer from "../../config/aws.config";

const onError = (err) => {
    let {message} = err;
    console.error(`Oh no! an error occurred: ${message}`);
}
const onProcessingError = (err) => {
    let {message} = err;
    console.error(`Oh no! an processing error occurred: ${message}`);
}
const onTimeoutError = (err) => {
    let {message} = err;
    console.error(`Oh no! an timeout error occurred: ${message}`);
}

const helloConsumer = generateSqsConsumer(
    "hello-queue",
    onError,
    onProcessingError,
    onTimeoutError
)

helloConsumer.start()