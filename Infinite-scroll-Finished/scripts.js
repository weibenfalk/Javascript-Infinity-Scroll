(function() {
  let nextPage = 1;
  const content = document.querySelector('.content');
  const loading = document.querySelector('.loading');

  function renderUsers(users) {
    users.results.map(user => {
      const element = document.createElement('div');
      element.classList.add('user');
      element.innerHTML = user.email;
      content.appendChild(element);
    });
  }

  async function getUsers(page) {
    const users = await (
      await fetch(`https://randomuser.me/api/?page=${page}&results=50`)
    ).json();
    return users;
  }

  async function loadMoreUsers() {
    const { scrollTop, clientHeight, scrollHeight } = content;
    console.log("Scrolltop: ", scrollTop);
    console.log("clientHeight: ", clientHeight);
    console.log("scrollHeight: ", scrollHeight);
    if (scrollHeight - scrollTop === clientHeight) {
      loading.classList.add('show');
      const users = await getUsers(nextPage);
      renderUsers(users);
      loading.classList.remove('show');
      nextPage += 1;
    }
  }

  loadMoreUsers();
  nextPage += 1;

  // Event listeners
  content.addEventListener('scroll', loadMoreUsers);
})();
