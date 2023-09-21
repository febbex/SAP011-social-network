export default () => {
    const container = document.createElement('div');
  
      const template = `
  <section id="cadastro">
  <img src="./assets/logo_mytrip.png" alt="logo">

  <h1>My Trip</h1>
  <form action="" method="post">
  <fieldset>
    <legend>Login</legend>
  
    <label for="user">Nome</label>
    <input type="text" id="user" required autofocus>
  
    <label for="pass">Username</label>
    <input type="password" id="pass" required>

    <label for="pass">Senha</label>
    <input type="password" id="pass" required>

    <label for="pass">Confirmar Senha</label>
    <input type="password" id="pass" required>
  
    <input type="submit" value="Cadastrar">
  
  </fieldset>
  
  </form>
  </section>`;
  
  container.innerHTML = template;
  
  return container;
  }
  