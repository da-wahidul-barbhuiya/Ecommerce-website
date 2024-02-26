<template>
    <div class="home">
      <!-- Header -->
      <header class="header">
        <div class="header-left">
          <h1 class="website-name">Heaven Forest</h1>
        </div>
        <div class="header-right">
          <!-- Login credentials -->
          <span v-if="!loggedIn">Login</span>
          <span v-else>Welcome, User</span>
          <!-- You can replace the "Login" text with actual login functionality -->
        </div>
      </header>
  
      <!-- Main content -->
      <main class="main">
        <!-- Dashboard info section (1/4 of the page) -->
        <div class="dashboard-info">
          <h2>Dashboard</h2>
        <!-- Dropdown menus -->
        <div class="dropdown">
          <button class="dropbtn">Ecommerce</button>
          <div class="dropdown-content">
            <!-- Dropdown options for Ecommerce -->
            <router-link to="/ecommerce/products">Products</router-link>
            <router-link to="/ecommerce/orders">Orders</router-link>
            <router-link to="/ecommerce/customers">Customers</router-link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Customer</button>
          <div class="dropdown-content">
            <!-- Dropdown options for Customer -->
            <router-link to="/customer/profile">Profile</router-link>
            <router-link to="/customer/orders">Orders</router-link>
            <router-link to="/customer/settings">Settings</router-link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Contact</button>
          <div class="dropdown-content">
            <!-- Dropdown options for Contact -->
            <router-link to="/contact/email">Email</router-link>
            <router-link to="/contact/phone">Phone</router-link>
            <router-link to="/contact/location">Location</router-link>
          </div>
        </div>
      </div>
  
        <!-- Products info section (3/4 of the page) -->
        <div class="products-info">
          <!-- Place your products info components/content here -->
          <h2>Products Info</h2>
          <!-- Example: Display product listings, categories, etc. -->
        </div>
      </main>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  export default {
    data() {
      return {
        loggedIn: false // Set to true if user is logged in
      };
    }
  };
  </script>
  
  <style scoped>
  /* Header styles */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
  }
  
  .header-left {
    flex: 1;
  }
  
  .header-right {
    flex: 1;
    text-align: right;
  }
  
  .website-name {
    margin: 0;
  }
  
  /* Main content styles */
  .main {
    display: flex;
  }
  
  .dashboard-info {
    flex: 1;
    padding: 20px;
    background-color: #e0e0e0;
  }
  
  .products-info {
    flex: 3;
    padding: 20px;
    background-color: #f9f9f9;
  }
  </style>
  