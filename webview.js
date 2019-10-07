// Last edit Oct. 7, 2019 - Giulio Gabrieli

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;
    // This reads the number of unread emails in the Inbox
    count = parseInt(window.frames[0].document.getElementsByClassName('badge pull-right count')[0].innerHTML, 10);	

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    count = parseInt(count, 10);
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
