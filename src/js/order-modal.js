const orderModal = document.getElementById('send-btn');
const orderForm = document.getElementById('order-form');
const username = document.getElementById('username');
const email = document.getElementById('email');

orderForm.addEventListener('submit', e => {
  e.preventDefault();
});

orderModal.addEventListener('click', () => {
  if (username.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'The fields are filled in incorrectly or empty!',
    });
    username.style.outline = '2px solid #de2020';
  } else if (email.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'The fields are filled in incorrectly or empty!',
    });
    username.style.outline = '2px solid #de2020';
  } else {
    Swal.fire('Good job!', 'Your order has been accepted!', 'success');
    username.style.outline = '1px solid rgba(252, 249, 249, 0.1)';
  }
});

console.log(12);
