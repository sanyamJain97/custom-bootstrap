<template>
<div class="design-form">
<div class="p-3 mb-5 bg-primary text-white">.bg-primary</div>
<span>Progress Bar </span>
<div class="progress mb-5">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <form class="mb-5">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <div class="jumbotron bg-primary">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-secondary btn-lg" href="#" role="button">Learn more</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="scss">
.design-form {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
}
// @import '~assets/scss/custom.scss';
// h1 {
//   color: $primary;
// }

</style>
