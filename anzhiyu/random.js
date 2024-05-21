var posts=["2024/05/20/Spring/","2024/05/21/Study-01/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };