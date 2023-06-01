import ContactService from '../service/contact.mjs';
import ContactController from '../controller/contact.mjs';

const contactFactory = () => {
  const contactService = new ContactService();
  return new ContactController({ contactService });
};

export default contactFactory;
