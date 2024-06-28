import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,d as a}from"./app-mt04-1UL.js";const i={},l=a(`<h2 id="一、for嵌套" tabindex="-1"><a class="header-anchor" href="#一、for嵌套"><span>一、for嵌套</span></a></h2><p><strong>1.1、for嵌套if</strong></p><p><strong>案例:</strong> 输出1-9，当输出5时停止输出</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description:输出1-9，当输出5时停止输出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for ((num=1;num&lt;10;num++))</span></span>
<span class="line"><span>   do</span></span>
<span class="line"><span>     echo $num</span></span>
<span class="line"><span>     [ $num -eq 5 ]&amp;&amp; break</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1.2、for嵌套for</strong><strong>案例:</strong> 打印99乘法表</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span>#打印99乘法表，思考A*B的关系</span></span>
<span class="line"><span>for ((A=1;A&lt;=9;A++))</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     for ((B=1;B&lt;=$A;B++))</span></span>
<span class="line"><span>        do</span></span>
<span class="line"><span>           echo -n -e &quot;$B*$A=$((A*B)) \\t&quot;</span></span>
<span class="line"><span>     done</span></span>
<span class="line"><span>     #换行</span></span>
<span class="line"><span>     echo </span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、for与数组" tabindex="-1"><a class="header-anchor" href="#二、for与数组"><span>二、for与数组</span></a></h2><p><strong>for循环与数组</strong></p><p>2.1、使用for循环遍历读出数组</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>name=(&#39;tom&#39; &#39;jarry&#39; &#39;harry&#39; &#39;barry&#39;)</span></span>
<span class="line"><span>for i in 0 1 2 3</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>      echo \${name[$i]}</span></span>
<span class="line"><span> done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.2、使用for循环进行数组存值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>for i in \`seq 0 9\`</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     read -p &quot;name: &quot; name[$i]</span></span>
<span class="line"><span> done</span></span>
<span class="line"><span> echo \${name[@]}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、学习视频" tabindex="-1"><a class="header-anchor" href="#三、学习视频"><span>三、学习视频</span></a></h2><p><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=60" target="_blank" rel="noopener noreferrer">视频：for嵌套</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=61" target="_blank" rel="noopener noreferrer">视频：for实战</a></p>`,16),r=[l];function p(t,o){return e(),n("div",null,r)}const h=s(i,[["render",p],["__file","for嵌套.html.vue"]]),v=JSON.parse('{"path":"/note/shell/for%E5%B5%8C%E5%A5%97.html","title":"16-for嵌套","lang":"zh-CN","frontmatter":{"title":"16-for嵌套","order":16,"icon":"lightbulb","description":"一、for嵌套 1.1、for嵌套if 案例: 输出1-9，当输出5时停止输出 案例代码 1.2、for嵌套for 案例: 打印99乘法表 案例代码 二、for与数组 for循环与数组 2.1、使用for循环遍历读出数组 2.2、使用for循环进行数组存值 三、学习视频 视频：for嵌套 视频：for实战","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/shell/for%E5%B5%8C%E5%A5%97.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"16-for嵌套"}],["meta",{"property":"og:description","content":"一、for嵌套 1.1、for嵌套if 案例: 输出1-9，当输出5时停止输出 案例代码 1.2、for嵌套for 案例: 打印99乘法表 案例代码 二、for与数组 for循环与数组 2.1、使用for循环遍历读出数组 2.2、使用for循环进行数组存值 三、学习视频 视频：for嵌套 视频：for实战"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"16-for嵌套\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"一、for嵌套","slug":"一、for嵌套","link":"#一、for嵌套","children":[]},{"level":2,"title":"二、for与数组","slug":"二、for与数组","link":"#二、for与数组","children":[]},{"level":2,"title":"三、学习视频","slug":"三、学习视频","link":"#三、学习视频","children":[]}],"git":{},"readingTime":{"minutes":0.75,"words":226},"filePathRelative":"note/shell/for嵌套.md","autoDesc":true}');export{h as comp,v as data};
