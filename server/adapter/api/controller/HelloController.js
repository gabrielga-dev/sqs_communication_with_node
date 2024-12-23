import HelloProducer from "../../messsaging/producer/HelloProducer.js";
import { v4 as uuidV4 } from 'uuid';

const generateDefaultHelloMessage = () => ({
    id: uuidV4(),
    body: 'Hello world!'
});

const HelloController = {
    sendHello(req, res) {
        const message = generateDefaultHelloMessage();
        let status = 0;
        let responseMessage = '';

        HelloProducer.send([message])
            .then(_ => {
                console.log('Message sent!');
                status = 201;
                responseMessage = 'OK!';
            })
            .catch(err => {
                console.log(err)
                status = 400;
                responseMessage = err;
            })
            .finally(() => res.status(status).json(responseMessage));
    }
}

export default HelloController;