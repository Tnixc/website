<template>
  <div class="navbar">
    <router-link to="/work">Work</router-link>
    <router-link to="/about">About Me</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'navBar',
}
</script>
<style scoped>
        /* Style for the navbar container */
        .navbar {
          display: flex;
          justify-content: center;
          background-color: transparent; /* No background */
          padding: 20px; /* Increased padding */
      }

      /* Style for the navigation links */
      .navbar a {
          text-decoration: none;
          color: var(--text); /* Text color */
          margin: 0 20px; /* Spacing between links */
          font-size: 18px; /* Font size */
          position: relative; /* Needed for the animation */
      }

      /* Style for the underline */
      .navbar a::after {
          content: '';
          position: absolute;
          bottom: -5px; /* Distance between link text and underline */
          left: 0;
          right: 100%; /* Initially hidden to the left */
          height: 2px; /* Underline thickness */
          background-color: var(--text); /* Underline color */
          transition: right 0.3s ease; /* Animation */
      }

      /* Animation for the underline */
      .navbar a:hover::after {
          right: 0; /* Move to the right */
      }
</style>