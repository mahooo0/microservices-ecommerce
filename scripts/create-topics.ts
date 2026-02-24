import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "admin",
  brokers: ["5.189.161.29:9092"],
});

const admin = kafka.admin();

async function main() {
  await admin.connect();
  console.log("Admin connected");

  const created = await admin.createTopics({
    topics: [
      { topic: "user.created", numPartitions: 1, replicationFactor: 1 },
      { topic: "order.created", numPartitions: 1, replicationFactor: 1 },
      { topic: "payment.successful", numPartitions: 1, replicationFactor: 1 },
      { topic: "product.created", numPartitions: 1, replicationFactor: 1 },
      { topic: "product.deleted", numPartitions: 1, replicationFactor: 1 },
    ],
  });
  console.log("Topics created:", created);

  const topics = await admin.listTopics();
  console.log("Existing topics:", topics);

  await admin.disconnect();
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
