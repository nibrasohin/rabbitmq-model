const amqp = require("amqplib");

const message = { number: 19 };
const connect = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");
    channel.consume("jobs", (msg) => {
      const input = JSON.parse(msg.content.toString());
      console.log(`Received job with input ${input.number}`);
      channel.ack(msg);
    });
    console.log("Waiting for messages ...");
  } catch (ex) {}
};

connect();
