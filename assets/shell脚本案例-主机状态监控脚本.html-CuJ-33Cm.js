import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-DZWWIkr0.js";const i={},l=e(`<h2 id="案例需求" tabindex="-1"><a class="header-anchor" href="#案例需求"><span>案例需求</span></a></h2><p>通过脚本判断远程计算机的存活状态</p><h2 id="脚本应用场景" tabindex="-1"><a class="header-anchor" href="#脚本应用场景"><span>脚本应用场景</span></a></h2><p>1、通过监控平台调用监控脚本对服务器进行监控</p><p>2、机器扫描</p><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h2><p>1、运维人员实时掌控机器的状态，防止宕机或者由于压力过大造成请求处理延时,保障业务的稳定、高效运行</p><h2 id="脚本思路" tabindex="-1"><a class="header-anchor" href="#脚本思路"><span>脚本思路</span></a></h2><p>1、通过ICMP协议的ping命令ping目标主机</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>网络延迟，假报警如何解决？</span></span>
<span class="line"><span>  3次</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、分析ping结果</p><p>3、给出结论</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>全部ping结果为假，报宕机</span></span>
<span class="line"><span>全部ping成功，报正常</span></span>
<span class="line"><span>否则报警告</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、ping 目标主机三次，并接收每次的状态值,ping成功返回1，不成功返回0</span></span>
<span class="line"><span>for ((i=1;i&lt;4;i++));do</span></span>
<span class="line"><span>#测试代码</span></span>
<span class="line"><span>   if ping -c1 $1 &amp;&gt;/dev/null;then</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	#分析结果</span></span>
<span class="line"><span>        export ping_count&quot;$i&quot;=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   else</span></span>
<span class="line"><span>        export ping_count&quot;$i&quot;=0</span></span>
<span class="line"><span>   fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#时间间隔</span></span>
<span class="line"><span>   sleep 0.3</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3、分析结果</span></span>
<span class="line"><span>#  3次ping失败报警</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>if [ $ping_count1 -eq $ping_count2 ] &amp;&amp; [ $ping_count2 -eq $ping_count3 ]&amp;&amp;[ $ping_count1 -eq 0 ];then</span></span>
<span class="line"><span>    echo &quot;$1  宕机&quot;</span></span>
<span class="line"><span>elif [ $ping_count1 -eq $ping_count2 ] &amp;&amp; [ $ping_count2 -eq $ping_count3 ]&amp;&amp;[ $ping_count1 -eq 1 ];then</span></span>
<span class="line"><span>    echo &quot;$1  正常&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;warn: $1 网络延迟&quot;</span></span>
<span class="line"><span>fi </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#4、释放变量</span></span>
<span class="line"><span>unset ping_count1 </span></span>
<span class="line"><span>unset ping_count2  </span></span>
<span class="line"><span>unset ping_count3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例思考" tabindex="-1"><a class="header-anchor" href="#案例思考"><span>案例思考</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>当你的机器放在IDC机房的时候，你如何判断各个运营商的用户到你服务器的以下数据。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>网络延迟如何获得</span></span>
<span class="line"><span></span></span>
<span class="line"><span>网络丢包率如何获得</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),p=[l];function t(d,c){return a(),s("div",null,p)}const o=n(i,[["render",t],["__file","shell脚本案例-主机状态监控脚本.html.vue"]]),u=JSON.parse('{"path":"/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E4%B8%BB%E6%9C%BA%E7%8A%B6%E6%80%81%E7%9B%91%E6%8E%A7%E8%84%9A%E6%9C%AC.html","title":"25-案例-主机状态监控脚本","lang":"zh-CN","frontmatter":{"title":"25-案例-主机状态监控脚本","order":25,"icon":"lightbulb","description":"案例需求 通过脚本判断远程计算机的存活状态 脚本应用场景 1、通过监控平台调用监控脚本对服务器进行监控 2、机器扫描 解决问题 1、运维人员实时掌控机器的状态，防止宕机或者由于压力过大造成请求处理延时,保障业务的稳定、高效运行 脚本思路 1、通过ICMP协议的ping命令ping目标主机 2、分析ping结果 3、给出结论 实现代码 案例思考","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E4%B8%BB%E6%9C%BA%E7%8A%B6%E6%80%81%E7%9B%91%E6%8E%A7%E8%84%9A%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"25-案例-主机状态监控脚本"}],["meta",{"property":"og:description","content":"案例需求 通过脚本判断远程计算机的存活状态 脚本应用场景 1、通过监控平台调用监控脚本对服务器进行监控 2、机器扫描 解决问题 1、运维人员实时掌控机器的状态，防止宕机或者由于压力过大造成请求处理延时,保障业务的稳定、高效运行 脚本思路 1、通过ICMP协议的ping命令ping目标主机 2、分析ping结果 3、给出结论 实现代码 案例思考"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"25-案例-主机状态监控脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"案例需求","slug":"案例需求","link":"#案例需求","children":[]},{"level":2,"title":"脚本应用场景","slug":"脚本应用场景","link":"#脚本应用场景","children":[]},{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]},{"level":2,"title":"脚本思路","slug":"脚本思路","link":"#脚本思路","children":[]},{"level":2,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]},{"level":2,"title":"案例思考","slug":"案例思考","link":"#案例思考","children":[]}],"git":{},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"note/shell/shell脚本案例-主机状态监控脚本.md","autoDesc":true}');export{o as comp,u as data};
