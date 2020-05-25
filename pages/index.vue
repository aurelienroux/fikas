<template>
  <div class="container">
    <div>
      <AppBtn>test btn</AppBtn>
      <AppBtn btn-style="button--full">S'inscrire a l infolettre</AppBtn>
      <AppBtnYoutube />
      <AppBtnYoutube btn-style="link--footer" />
      <AppBtnFacebook />
      <AppBtnFacebook btn-style="link--footer" />
      <AppBtnInsta />
      <AppBtnInsta btn-style="link--footer" />

      <div style="background: red; padding: 2rem">
        <AppIconMore />
        <AppIconPrev />
        <AppIconNext />
        <AppIconMenuDrop />
        <AppIconVideoScroll />
        <AppIconClose />
        <AppIconClose icon-style="icon--menu" />
        <AppLogoFooter />
        <AppLogo />
        <div class="bg"></div>
        <div class="bg-two"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.bg {
  background-image: url('~assets/images/bg1.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  height: 20rem;
  width: 20rem;
}
.bg-two {
  background-image: url('~assets/images/bg2.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  height: 43rem;
  width: 192rem;
}
</style>
