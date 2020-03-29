(function() {
  const content = document.querySelector('.content');
  const loading = document.querySelector('.loading');
  
  let nextPage = 1;

  function renderUsers(users) {
    users.results.map(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = user.email;
      content.appendChild(userDiv);
    });
  }

  async function getUsers(page) {
    const userData = await fetch(
      `https://randomuser.me/api/?page=${page}&results=50`
    );
    const users = await userData.json();
    return users;
  }

  // ----------------------------
  // START HERE
  // ----------------------------
})();
