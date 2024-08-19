var posts=["2024/08/18/HashCode&&equals/","2024/08/18/==与equals的比较/","2024/07/29/git心得/","2024/08/19/位运算/","2024/08/18/对象创建/","2024/07/19/2024年7月19日/","2024/08/18/空指针异常/","2024/08/18/自动拆箱和自动装箱/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };