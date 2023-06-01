export default class ContactController {
  constructor({ contactService }) {
    this.contactService = contactService;
  }

  create = async (req, res) => {
    if (!req.body) {
      return res.status(400).json({ message: 'Invalid body' });
    }

    if (!req.body.firstName || typeof req.body.firstName !== 'string') {
      return res.status(400).json({ message: 'Invalid firstName' });
    }

    if (!req.body.lastName || typeof req.body.lastName !== 'string') {
      return res.status(400).json({ message: 'Invalid lastName' });
    }

    if (!req.body.email || typeof req.body.email !== 'string') {
      return res.status(400).json({ message: 'Invalid email' });
    }

    if (!req.body.favoriteColor || typeof req.body.favoriteColor !== 'string') {
      return res.status(400).json({ message: 'Invalid favoriteColor' });
    }

    if (!req.body.birthday || typeof req.body.birthday !== 'string') {
      return res.status(400).json({ message: 'Invalid birthday' });
    }

    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    const contact = await this.contactService.create({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });

    return res.status(201).json(contact);
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
