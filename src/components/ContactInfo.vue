<template>
  <footer>
    <section class="contact-info">
      <h3>Contact</h3>
      <p>High Street 1</p>
      <p>PO Box 1337</p>
      <p>City 17</p>
      <p>Weytani CORP</p>
      <p>
        <a class="to-top" href="#top">Back to top</a>
      </p>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: black;
  .contact-info {
    padding: 2rem;
    color: white;
    .to-top {
      padding-top: 1rem;
      font-size: 1rem;
      text-decoration: none;
      color: white;
      border-bottom: 1px solid white;
    }
  }
}
</style>