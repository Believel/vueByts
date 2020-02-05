<template>
  <div class="content">
    <div class="input-field">
      <input type="text" placeholder="Enter your first name" id="fname">
      <label for="fname">First name</label>
    </div>
    <div class="input-field">
      <input type="text" placeholder="Enter your last name" id="lname">
      <label for="lname">Last name</label>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
export default {
   data() {
       return {
       }
   }
}
</script>
<style lang='scss' scoped>
label {
    opacity: 0;
    transform: translateY(5px);
    transition: opacity linear 200ms, transform ease-in 150ms;
    /* 表示可伸缩项目中所在的次序组 */
    order:-1;
  }
  /* :placeholder-shown CSS伪类在input或者textarea元素显示placeholder时生效 */
  input:not(:placeholder-shown) ~ label {
    transform: translateY(0px);
    opacity: 1;
  }
  .input-field {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  /* 基本css */
  .content {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
  }
  input:focus {
    outline: 0;
    border: 2px solid #ee6352;
  }
  label:not(:first-child) {
    margin-top: 1em;
  }
  @media (min-width: 660px) {
    .content {
      column-count: 2;
    }
  }
  input {
    font-weight: 800;
    color: #ee6352;
  }
  ::placeholder {
    opacity: 1;
    font-weight: 300;
    color: #666;
  }
  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  input {
    padding: .25em .75em;
  }
  input + input {
    margin-left: 1em;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
</style>