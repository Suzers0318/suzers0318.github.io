var posts=["2024/05/17/First-md/","2024/05/20/Spring/","2024/05/19/two/","2024/05/20/imgTest/","2024/05/17/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };