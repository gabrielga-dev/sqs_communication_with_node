#!/usr/bin/env bash

export SQS_ENDPOINT=http://localhost:4566

# queues
aws --endpoint-url $SQS_ENDPOINT sqs create-queue --queue-name hello-queue --region us-east-1
