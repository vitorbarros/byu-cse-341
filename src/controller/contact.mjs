export default class ContactController {
  constructor({ contactService }) {
    this.contactService = contactService;
  }

  create = async (req, res) => {
    const isInvalidString = (property) =>
      !req.body[property] || typeof req.body[property] !== 'string';

    if (!req.body) {
      return res.status(400).json({ message: 'Invalid body' });
    }

    const requiredProperties = [
      'firstName',
      'lastName',
      'email',
      'favoriteColor',
      'birthday',
    ];

    let invalidProperty = null;

    requiredProperties.forEach((property) => {
      if (isInvalidString(property)) {
        invalidProperty = property;
      }
    });

    if (invalidProperty) {
      return res.status(400).json({ message: `Invalid ${invalidProperty}` });
    }

    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    const contact = await this.contactService.create({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });

    return res.status(201).json({ id: contact.insertedId });
  };

  update = async (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    try {
      await this.contactService.update({
        id: req.params.id,
        firstName,
        lastName,
        email,
        favoriteColor,
        birthday,
      });

      return res.status(204).json({});
    } catch (e) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  delete = async (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    try {
      await this.contactService.delete({ id: req.params.id });

      return res.status(200).json({ message: 'Contact deleted' });
    } catch (e) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  findOne = async (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    const contact = await this.contactService.findById({ id: req.params.id });

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    return res.status(200).json(contact);
  };

  findAll = async (req, res) => {
    const contacts = await this.contactService.findAll();

    if (!contacts) {
      return res.status(404).json({ message: 'Contacts not found' });
    }

    return res.status(200).json(contacts);
  };
}
