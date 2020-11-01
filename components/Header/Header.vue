<template>
  <header class="header">
    <element
      :is="logoTag"
      class="header__logo"
    >
      ShopIt
    </element>
    <ul class="header__menu">
      <li
        class="header__link"
        v-for="element of headerMenu"
        :key="element.title"
      >
        <nuxt-link :to="element.href">
          {{ element.title }}
        </nuxt-link>
      </li>
    </ul>
    <ul class="header__icons">
      <li class="header__icon">
        <SearchIcon />
      </li>
      <li class="header__icon">
        <WishlistIcon />
      </li>
      <li class="header__icon">
        <CartIcon />
      </li>
      <li class="header__icon">
        <AccountIcon />
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
  data () {
    return {
      headerMenu: [
        {
          title: 'Home',
          href: '/'
        },
        {
          title: 'About',
          href: '/about'
        },
        {
          title: 'Blog',
          href: '/blog'
        },
        {
          title: 'Shop',
          href: '/category'
        }
      ]
    }
  },
  computed: {
    logoTag (): string {
      if (this.$route.path === '/') return 'h1'
      else return 'h2'
    }
  }
}
</script>

<style lang="scss" src="./Header.scss">
