Template.stringInput.helpers({
  length: function () {
    return Session.get("string").length;
  },
  words: function () {
    if (Session.get("string").length === 0) {
      return 0;
    }
    return Session.get("string").split(/\s+\b/).length;    
  },
  reverse: function () {
    return Session.get("string").split('').reverse().join('');
  }
});

Template.stringInput.events({
  'click button': function (event, template) {
    Session.set("string", document.getElementById('string').value.trim());
  }
});
