var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(contactForm, {contact: contactForm}),
        React.createElement(contacts, {item: contacts}, {})
      )
    );
  }
});

var contacts = React.createClass ({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
      return.React.createElement(contact, {item: contact, key: contact.id});
    });

    return (
      React.createElement('ul', {className: 'contactsList'}, contacts)
    );
  }
});

var contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Imię ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Nazwisko ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto: ' + this.props.item.email}, this.props.item.email)
      )
    )
  },
});