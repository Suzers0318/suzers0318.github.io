var posts=["2024/07/17/1/","2024/08/09/2/","2024/07/19/2024年7月19日/","2024/09/11/2024年9月11日/","2024/08/09/2024年8月9日/","2024/08/18/HashCode&&equals/","2024/08/18/==与equals的比较/","2024/08/20/JavaIO流与NIO流/","2024/08/20/KMP字符串/","2024/07/29/git心得/","2024/05/21/Study-01/","2024/08/20/全局异常拦截器/","2024/08/19/位运算/","2024/08/20/单链表/","2024/08/22/反射/","2024/08/19/多线程并发/","2024/08/20/双指针/","2024/08/18/对象创建/","2024/09/15/模板2024年9月15日/","2024/08/19/序列化/","2024/08/18/空指针异常/","2024/08/20/滑动窗口/","2024/08/18/自动拆箱和自动装箱/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };