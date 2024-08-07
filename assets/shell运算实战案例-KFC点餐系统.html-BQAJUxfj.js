import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-fmcy30Ms.js";const i={},l=e(`<h2 id="写一个kfc餐厅点餐程序" tabindex="-1"><a class="header-anchor" href="#写一个kfc餐厅点餐程序"><span>写一个KFC餐厅点餐程序</span></a></h2><p><strong>案例需求</strong> 写一个程序，模拟KFC点餐系统，要求有以下功能：</p><ul><li>1、点餐功能</li><li>2、结算功能</li><li>3、打印流水单</li></ul><p><strong>案例步骤</strong></p><ul><li>1、交互点餐</li><li>2、结账收银</li><li>3、打印流水单给客户</li></ul><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author:www.zutuanxue.com</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1)录入单价</span></span>
<span class="line"><span>HBB=19.8</span></span>
<span class="line"><span>JC=12.3</span></span>
<span class="line"><span>KL=9.9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2)定义输出</span></span>
<span class="line"><span>cat &lt;&lt;EOF</span></span>
<span class="line"><span>				welcome to KFC</span></span>
<span class="line"><span>今天KFC提供菜品如下:</span></span>
<span class="line"><span>	1）汉堡</span></span>
<span class="line"><span>	2）鸡翅</span></span>
<span class="line"><span>	3）可乐</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo -e &quot;\\n请您输入希望购买菜品的数量，不需要输入0\\n&quot;</span></span>
<span class="line"><span>###1.用户交互</span></span>
<span class="line"><span>#定义变量类型为整形</span></span>
<span class="line"><span>declare -i NUM_HBB</span></span>
<span class="line"><span>declare -i NUM_JC</span></span>
<span class="line"><span>declare -i NUM_KL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>read -p &quot;汉堡: &quot; NUM_HBB</span></span>
<span class="line"><span>read -p &quot;鸡翅: &quot; NUM_JC</span></span>
<span class="line"><span>read -p &quot;可乐: &quot; NUM_KL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>###2.计算输出</span></span>
<span class="line"><span>HBB_price=\`echo &quot;scale=2;$HBB*$NUM_HBB&quot;|bc\`</span></span>
<span class="line"><span>JC_price=\`echo &quot;scale=2;$JC*$NUM_JC&quot;|bc\`</span></span>
<span class="line"><span>KL_price=\`echo &quot;scale=2;$KL*$NUM_KL&quot;|bc\`</span></span>
<span class="line"><span>total_price=\`echo &quot;scale=2;$HBB_price+$JC_price+$KL_price&quot;|bc\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>###3.付款</span></span>
<span class="line"><span>echo -n &quot;合计: $total_price &quot;</span></span>
<span class="line"><span>read -p &quot;请付款: &quot; USER_price</span></span>
<span class="line"><span></span></span>
<span class="line"><span>###4.打印小票</span></span>
<span class="line"><span>clear</span></span>
<span class="line"><span>echo -e &quot;\\t\\tKFC结算单&quot;</span></span>
<span class="line"><span>echo &quot;~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~&quot;</span></span>
<span class="line"><span>echo -e &quot;商品\\t单价\\t数量\\t合计&quot;</span></span>
<span class="line"><span>echo -e &quot;汉堡包\\t$HBB\\t$NUM_HBB\\t$HBB_price&quot;</span></span>
<span class="line"><span>echo -e &quot;鸡翅\\t$JC\\t$NUM_JC\\t$JC_price&quot;</span></span>
<span class="line"><span>echo -e &quot;可乐\\t$KL\\t$NUM_KL\\t$KL_price&quot;</span></span>
<span class="line"><span>echo -e &quot;\\n\\n&quot;</span></span>
<span class="line"><span>echo &quot;总计: $total_price&quot;</span></span>
<span class="line"><span>echo -e &quot;支付:$USER_price&quot;</span></span>
<span class="line"><span>echo -e &quot;找零: \`echo &quot;scale=2;$USER_price-$total_price&quot;|bc\`&quot;</span></span>
<span class="line"><span>echo &quot;~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~&quot;</span></span>
<span class="line"><span>echo -e &quot;地址:北京东大桥路33号KFC店\\n联系电话:400-123-456\\nwww.kfc.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例效果</strong></p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601010636415.gif" alt="仿真KFC.gif" tabindex="0" loading="lazy"><figcaption>仿真KFC.gif</figcaption></figure>`,9),p=[l];function c(t,d){return a(),n("div",null,p)}const u=s(i,[["render",c],["__file","shell运算实战案例-KFC点餐系统.html.vue"]]),v=JSON.parse('{"path":"/note/shell/shell%E8%BF%90%E7%AE%97%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B-KFC%E7%82%B9%E9%A4%90%E7%B3%BB%E7%BB%9F.html","title":"09-案例-KFC点餐系统","lang":"zh-CN","frontmatter":{"title":"09-案例-KFC点餐系统","order":9,"icon":"lightbulb","description":"写一个KFC餐厅点餐程序 案例需求 写一个程序，模拟KFC点餐系统，要求有以下功能： 1、点餐功能 2、结算功能 3、打印流水单 案例步骤 1、交互点餐 2、结账收银 3、打印流水单给客户 案例代码 案例效果 仿真KFC.gif仿真KFC.gif","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/shell/shell%E8%BF%90%E7%AE%97%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B-KFC%E7%82%B9%E9%A4%90%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"09-案例-KFC点餐系统"}],["meta",{"property":"og:description","content":"写一个KFC餐厅点餐程序 案例需求 写一个程序，模拟KFC点餐系统，要求有以下功能： 1、点餐功能 2、结算功能 3、打印流水单 案例步骤 1、交互点餐 2、结账收银 3、打印流水单给客户 案例代码 案例效果 仿真KFC.gif仿真KFC.gif"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601010636415.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09-案例-KFC点餐系统\\",\\"image\\":[\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601010636415.gif\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"写一个KFC餐厅点餐程序","slug":"写一个kfc餐厅点餐程序","link":"#写一个kfc餐厅点餐程序","children":[]}],"git":{},"readingTime":{"minutes":1.19,"words":358},"filePathRelative":"note/shell/shell运算实战案例-KFC点餐系统.md","autoDesc":true}');export{u as comp,v as data};
