var posts=["2024/07/17/1/","2024/07/19/2024年7月19日/","2024/08/09/2/","2024/08/09/2024年8月9日/","2024/07/18/3shixi/","2024/05/22/SpringBoot/","2024/05/20/Spring/","2024/05/21/Study-01/","2024/07/29/git心得/","2024/05/22/软考设计师/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };