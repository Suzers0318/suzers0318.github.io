var posts=["2024/05/20/Spring/","2024/05/22/SpringBoot/","2024/07/17/实习第一天/","2024/05/21/Study-01/","2024/07/18/实习第二天/","2024/05/22/软考设计师/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };