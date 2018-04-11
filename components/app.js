var App = React.createElement({
	render: function() {
		return (
			React.createElement('div', {className: 'app'},
				React.createElement(contactForm, {contact: contactForm}),
				React.createElement(contacts, {items: contacts}, {})
			)
		);
	}
});