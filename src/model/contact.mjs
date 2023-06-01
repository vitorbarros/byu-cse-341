import { ObjectId } from 'mongodb';
import client from '../infra/database/mongodb.mjs';
import envs from '../config/envs.mjs';

export default class Contact {
  constructor({ firstName, lastName, email, favoriteColor, birthday }) {
    this.collection = 'contacts';
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.favoriteColor = favoriteColor;
    this.birthday = birthday;
  }

  create = () =>
    client.db(envs.MONGO_DB_NAME).collection(this.collection).insertOne({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      favoriteColor: this.favoriteColor,
      birthday: this.birthday,
    });

  findBy = ({ field, value }) => {
    let parsedValue = value;
    if (field === '_id') {
      parsedValue = new ObjectId(value);
    }

    return client
      .db(envs.MONGO_DB_NAME)
      .collection(this.collection)
      .findOne({ [field]: parsedValue });
  };

  findAll = async () => {
    const cursor = await client
      .db(envs.MONGO_DB_NAME)
      .collection(this.collection)
      .find({});

    return cursor.toArray();
  };
}
