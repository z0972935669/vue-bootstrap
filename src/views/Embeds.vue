<template>
  <div>
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
      allowfullscreen
    ></b-embed>

    <b-embed type="video" aspect="4by3" controls poster="poster.png">
      <source src="dev-stories.webm" type="video/webm" />
      <source src="dev-stories.mp4" type="video/mp4" />
    </b-embed>
  </div>
</template>