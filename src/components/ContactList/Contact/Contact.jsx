import PropTypes from "prop-types";

const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Contact;
