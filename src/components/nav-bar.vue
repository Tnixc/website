<template>
  <div class="navbar">
    <router-link to="/work" class="nav-link">Work</router-link>
    <router-link to="/about" class="nav-link">About Me</router-link>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>
<style lang="scss" scoped>
/* Style for the navbar container */
.navbar {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 9999;
  justify-content: center;
  background-color: transparent; /* No background */
  padding: 20px; /* Increased padding */
}

/* Style for the navigation links */
.navbar a {
  text-decoration: none;
  color: $text; /* Text color */
  margin: 0 20px; /* Spacing between links */
  font-size: 18px; /* Font size */
  position: relative; /* Needed for the animation */
  opacity: 0.6;
}

/* Style for the underline */
.navbar a::after {
  content: "";
  position: absolute;
  bottom: -5px; /* Distance between link text and underline */
  left: 0;
  right: 100%; /* Initially hidden to the left */
  height: 2px; /* Underline thickness */
  background-color: $text; /* Underline color */
  transition: right 0.3s ease; /* Animation */
  opacity: 0.6;
}

/* Animation for the underline */
.navbar a:hover::after {
  right: 0; /* Move to the right */
}

.nav-link.router-link-active,
.nav-link.router-link-active::after {
  opacity: 1;
}
</style>
