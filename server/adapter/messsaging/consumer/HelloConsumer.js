import generateSqsConsumer from "../../../config/aws/awsConsumer.config.js";

const onMessage = (message) => {
    const messageString = message.Body.toString();
    console.log(`New message: ${messageString}`);
}
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

const HelloConsumer = generateSqsConsumer(
    "hello-queue",
    onMessage,
    onError,
    onProcessingError,
    onTimeoutError
)

export default HelloConsumer;