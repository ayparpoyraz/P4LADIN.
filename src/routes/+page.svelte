<script>
  let title = "P4LADIN";
  let subtitle = "Hoş Geldiniz";
</script>

<main>
  <div class="frame">
    <h1 class="title">{title}</h1>
    <p class="subtitle">{subtitle}</p>

    <div class="divider"></div>

    <p class="text">
      "Sokaklar Yeni Arenan, Tarzın En Güçlü Zırhın."
    </p>

    <button class="btn">GİRİŞ YAP</button>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&display=swap');

  
  main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cinzel', serif;
  }

  .frame {
    width: 420px;
    padding: 40px;
    border: 2px solid #b08d57;
    background: rgba(10, 10, 10, 0.7);
    box-shadow: 0 0 30px rgba(176, 141, 87, 0.3);
    text-align: center;
    position: relative;
  }
  .frame::before,
  .frame::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border: 2px solid #b08d57;
  }

  .frame::before {
    top: -10px;
    left: -10px;
    border-right: none;
    border-bottom: none;
  }

  .frame::after {
    bottom: -10px;
    right: -10px;
    border-left: none;
    border-top: none;
  }

  .title {
    font-size: 1.8rem;
    letter-spacing: 3px;
    color: #f5e6b3;
    text-shadow: 0 0 10px rgba(176, 141, 87, 0.4);
  }

  .subtitle {
    margin-top: 8px;
    font-size: 0.9rem;
    opacity: 0.8;
    color: #d6c28a;
  }

  .divider {
    margin: 20px auto;
    width: 60%;
    height: 1px;
    background: linear-gradient(to right, transparent, #b08d57, transparent);
  }

  .text {
    font-size: 0.9rem;
    line-height: 1.6;
    opacity: 0.9;
    color: #d6c28a;
    font-style: italic;
  }

  .btn {
    margin-top: 20px;
    padding: 12px 24px;
    background: transparent;
    border: 1px solid #b08d57;
    color: #f5e6b3;
    cursor: pointer;
    transition: 0.3s;
    font-family: inherit;
    letter-spacing: 2px;
    font-weight: 600;
  }

  .btn:hover {
    background: #b08d57;
    color: #000;
    box-shadow: 0 0 15px rgba(176, 141, 87, 0.5);
  }
</style>