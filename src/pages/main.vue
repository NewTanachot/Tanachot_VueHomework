<template>
  <body>
    <h1 class="headerText" style="color: #FFFF33">- My Profile -</h1>
    <li>
      <img class="image" src="../assets/picmyself.png" />
    </li>
    <p class="text">
      <highlight>Name</highlight> &nbsp;&nbsp; : &nbsp;&nbsp; Tanachot
      Udomsartporn <br />
      <highlight>Age</highlight> &nbsp;&nbsp; : &nbsp;&nbsp; 21 years old <br />
      <highlight>Education</highlight> &nbsp;&nbsp; : &nbsp;&nbsp; Thai-Nichi
      Institute of Technology
      <br />
      <highlight>Interest</highlight> &nbsp;&nbsp; : &nbsp;&nbsp; Web
      development, Font-end / Back-end<br />
      <highlight>Programming Skills</highlight> &nbsp;&nbsp; : &nbsp;&nbsp; C,
      C++, C#, Java, javascript, CSS, python <br />
    </p>
  </body>
</template>

<script>
</script>

<style>
.headerText {
  font-size: 48px;
  text-align: center;
  margin-top: 40px;
  color: #eeeee4;
}

body {
  background-color: #294470;
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 35%;
}

.text {
  font-size: 28px;
  margin-top: 70px;
  margin-left: 10%;
  color: #eeeee4;
}

.text highlight {
  color: #FFFF33;
}
</style>
