var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, "James Nelson"),
        React.createElement('a', {href: 'mailto:james@jamesknelson.com'}, 'james@jamesknelson.com')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, "Joe Citizen"),
        React.createElement('a', {href: 'mailto:joe@example.com'}, 'joe@example.com')
      )
    )
  )

ReactDOM.render(rootElement, document.getElementById('react-app'))