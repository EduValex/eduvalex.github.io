<template>
  <footer style="margin-top: 4rem; padding: 2rem 0; text-align: center; color: #64748b; font-size: 0.875rem;">
    <p>© {{ currentYear }} Eduardo Valenzuela — Construido con 💚 Vue</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>
