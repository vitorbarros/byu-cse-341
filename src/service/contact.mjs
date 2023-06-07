import Contact from '../model/contact.mjs';

export default class ContactService {
  constructor() {
    this.contact = null;
  }

  create = ({ firstName, lastName, email, favoriteColor, birthday }) => {
    this.contact = new Contact({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });

    return this.contact.create();
  };

  update = ({ id, firstName, lastName, email, favoriteColor, birthday }) => {
    this.contact = new Contact({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });

    return this.contact.update({ id });
  };

  delete = ({ id }) => {
    this.contact = new Contact({});
    return this.contact.delete({ id });
  };

  findById = ({ id }) => {
    this.contact = new Contact({});
    return this.contact.findBy({ field: '_id', value: id });
  };

  findAll = () => {
    this.contact = new Contact({});
    return this.contact.findAll();
  };
}
