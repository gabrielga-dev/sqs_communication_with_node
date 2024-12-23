import {Consumer} from "sqs-consumer";
import {SQSClient} from "@aws-sdk/client-sqs";
import config from "config";

const sqsUrl = config.get("aws.url");
const accessKeyId = config.get("aws.access_key_id");
const secretKey = config.get("aws.secret_access_key");
const region = config.get("aws.region");

const generateSqsConsumer = (
    queueName,
    handleMessage,
    onError = (err) => console.error(err.message),
    onProcessingError = (err) => console.error(err.message),
    onTimeoutError = (err) => console.error(err.message),
) => {
    const sqsConsumer = Consumer.create({
        queueUrl: `${sqsUrl}/${queueName}`,

        handleMessage: handleMessage,
        sqs: new SQSClient({
            endpoint: `${sqsUrl}/${queueName}`,
            region: region,
            credentials: {
                accessKeyId: accessKeyId,
                secretAccessKey: secretKey,
            },
        }),
        useQueueUrlAsEndpoint: false
    });
    sqsConsumer.on("error", onError);
    sqsConsumer.on("processing_error", onProcessingError);
    sqsConsumer.on("timeout_error", onTimeoutError);
    return sqsConsumer
}

export default generateSqsConsumer;