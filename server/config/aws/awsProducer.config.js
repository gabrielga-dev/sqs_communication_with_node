import config from "config";
import {Producer} from 'sqs-producer';
import {SQSClient} from '@aws-sdk/client-sqs';

const sqsUrl = config.get("aws.url");
const accessKeyId = config.get("aws.access_key_id");
const secretKey = config.get("aws.secret_access_key");
const region = config.get("aws.region");

const generateSqsProducer = (queueName) => (
    Producer.create({
        queueUrl: `${sqsUrl}/${queueName}`,
        region: region,
        sqs: new SQSClient({
            endpoint: `${sqsUrl}/${queueName}`,
            region: region,
            credentials: {
                accessKeyId: accessKeyId,
                secretAccessKey: secretKey
            }
        }),
    })
);

export default generateSqsProducer;