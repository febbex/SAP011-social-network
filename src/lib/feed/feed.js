export default () => {
    const container = document.createElement('div');
    const template = `
    <section id="feed">
    <img src="./assets/logo_mytrip.png" alt="logo">
    <h1>Feed</h1>
    
    </form>
    </section>`;  
  container.innerHTML = template;  
  return container;
  }