import faker from "faker"
import Menu from "../models/MenuModels";

async function seedData() {
  try {
    // Generate fake data for menu
    const menus = [];
    for (let i = 0; i < 10; i++) {
      menus.push({
        name: faker.random.word(),
        status_menu: faker.random.arrayElement([
          "preparing",
          "prepare",
          "on the way",
          "delivered",
        ]),
        no_table: faker.random.number({ min: 1, max: 50 }),
      });
    }

    // Insert the generated menu data into the collection
    await Menu.insertMany(menus);

    console.log("Data seeded successfully");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    console.log("Disconnected from MongoDB");
  }
}

seedData();
