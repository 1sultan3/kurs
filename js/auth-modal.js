const onScroll = document.addEventListener('scroll', () => {
    const windowHeight = scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if(windowHeight >= documentHeight / 2) {
      showModal();
      document.removeEventListener('scroll', onScroll)
      console.log(true)

    }

    function showModal() {
      const authModal = document.getElementById('auth-modal');
      authModal.removeAttribute('hidden');


      const closeModal = document.getElementById('close-modal')

      closeModal.addEventListener('click', () => {
        authModal.setAttribute('hidden', true)
        console.log('Closed')
      });
    }
});

