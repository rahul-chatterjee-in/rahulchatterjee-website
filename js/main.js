// Mobile nav
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
  }
  // Shared footer contact address
  var connectLists = document.querySelectorAll('footer .footer-grid > div');
  connectLists.forEach(function (column) {
    var heading = column.querySelector('h4');
    var list = column.querySelector('ul');
    if (heading && heading.textContent.trim() === 'Connect' && list &&
        !list.querySelector('a[href="mailto:rahul.chatterjee@sansparshgrs.com"]')) {
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = 'mailto:rahul.chatterjee@sansparshgrs.com';
      link.textContent = 'rahul.chatterjee@sansparshgrs.com';
      link.style.overflowWrap = 'anywhere';
      item.appendChild(link);
      var gmail = list.querySelector('a[href="mailto:chatts555@gmail.com"]');
      if (gmail) {
        gmail.parentElement.insertAdjacentElement('afterend', item);
      } else {
        list.appendChild(item);
      }
    }
  });
  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  // Speaking enquiry form -> prefilled email (no backend on static hosting)
  var form = document.getElementById('speaking-enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var subject = 'Speaking enquiry - ' + (f.get('org') || f.get('name'));
      var body = 'Name: ' + f.get('name') + '\nOrganisation: ' + f.get('org') +
        '\nEmail: ' + f.get('email') + '\nEvent type: ' + f.get('type') +
        '\nPreferred dates: ' + f.get('dates') + '\n\n' + f.get('message');
      window.location.href = 'mailto:chatts555@gmail.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
});
