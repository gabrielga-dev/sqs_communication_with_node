import generateSqsProducer from "../../../config/aws/awsProducer.config.js";


const HelloQueueProducer = generateSqsProducer("hello-queue")

export default HelloQueueProducer;