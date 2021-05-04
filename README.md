# rabbitmq-model
rabbitmq consumer publisher model

To start up rabbitmq server using docker run

```
docker run --name rabbitmq -p 5672:5672 rabbitmq
```

To run publisher
```
npm run publish ${msgToSend}
```
To run consumer
```
npm run consume
```

This project covers demonstration of the following concepts in RabbitMQ

- Publisher
- Consumer
- Connection
- Channel
- Queue
- Spin RabbitMQ server with Docker
- Write a Publisher client NodeJs
- Write a Consumer client Nodejs

Tutorial followed from [here](https://www.youtube.com/watch?v=Cie5v59mrTg).

