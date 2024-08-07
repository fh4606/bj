import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as i}from"./app-fmcy30Ms.js";const e={},l=i(`<p>工作中总是有很多工作需要重复性来完成，比如每天都需要执行一次备份、每天都需要分析一次业务的access.log日志，每分钟都需要监测一次主机的状态等等工作，这些重复性的工作我们一般都是使用脚本来完成，对于不需要频繁执行的任务，可以结合计划任务➕脚本完成，但是系统的计划任务只能精确到分，不能满足更频繁的重复工作。</p><p>这个时候我们除了依赖计划任务之外还有很多选择，比如脚本中的循环语句。</p><p>循环的优点</p><ul><li>1）节省内存 10M脚本 1M脚本 哪个更剩内存 完成同一个任务</li><li>2）结构更清晰</li><li>3）节省开发时间成本</li></ul><h2 id="一、循环语句-for" tabindex="-1"><a class="header-anchor" href="#一、循环语句-for"><span>一、循环语句-for</span></a></h2><h3 id="_1-1、for介绍" tabindex="-1"><a class="header-anchor" href="#_1-1、for介绍"><span>1.1、for介绍</span></a></h3><p>脚本在执行任务的时候，总会遇到需要循环执行的时候，比如说我们需要脚本每隔五分钟执行一次ping的操作，除了计划任务，我们还可以使用脚本来完成，那么我们就用到了循环语句。</p><h3 id="_1-2、for基本语法-for条件循环" tabindex="-1"><a class="header-anchor" href="#_1-2、for基本语法-for条件循环"><span>1.2、for基本语法 for条件循环</span></a></h3><ul><li>列表for循环：用于将一组命令执行<strong>已知的次数</strong>，下面给出了for循环语句的基本格式：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>for variable_name in {list}</span></span>
<span class="line"><span>     do</span></span>
<span class="line"><span>          command </span></span>
<span class="line"><span>          command</span></span>
<span class="line"><span>          …</span></span>
<span class="line"><span>     done</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>for variable in a b c</span></span>
<span class="line"><span>     do</span></span>
<span class="line"><span>         command</span></span>
<span class="line"><span>         command</span></span>
<span class="line"><span>     done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3、for条件应用" tabindex="-1"><a class="header-anchor" href="#_1-3、for条件应用"><span>1.3、for条件应用</span></a></h3><p>for条件不同的赋值方式 a、赋值来自一个范围</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>for var in {1..10}</span></span>
<span class="line"><span>	do </span></span>
<span class="line"><span>			echo $var</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b、直接赋值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>for var in 1 2 3 4 5</span></span>
<span class="line"><span>	do </span></span>
<span class="line"><span>			echo $var</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c、赋值来自命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>for var in \`seq  10\`</span></span>
<span class="line"><span>	do </span></span>
<span class="line"><span>			echo $var</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>体验不同的方式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>赋值来自一个范围</span></span>
<span class="line"><span>for var in $(seq 10)</span></span>
<span class="line"><span>	do </span></span>
<span class="line"><span>			echo $var</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for var in {0..10..2}</span></span>
<span class="line"><span>	do </span></span>
<span class="line"><span>			echo $var</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>for var in {10..1}</span></span>
<span class="line"><span>	do </span></span>
<span class="line"><span>			echo $var</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>for var in {10..1..-2}</span></span>
<span class="line"><span>	do </span></span>
<span class="line"><span>			echo $var</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>for var in \`seq 10 -2 1\`</span></span>
<span class="line"><span>	do </span></span>
<span class="line"><span>			echo $var</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不带列表循环</li></ul><p>不带列表的for循环执行时由<strong>用户指定参数和参数的个数</strong>，下面给出了不带列表的for循环的基本格式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>for variable</span></span>
<span class="line"><span>    do</span></span>
<span class="line"><span>        command </span></span>
<span class="line"><span>        command</span></span>
<span class="line"><span>        …</span></span>
<span class="line"><span>   done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法结构举例说明：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for var</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>echo $var</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;脚本后面有$#个参数&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4、for-c格式语法" tabindex="-1"><a class="header-anchor" href="#_1-4、for-c格式语法"><span>1.4、for C格式语法</span></a></h3><ul><li>类C风格的for循环</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>for(( expr1;expr2;expr3 ))</span></span>
<span class="line"><span>	do</span></span>
<span class="line"><span>		command</span></span>
<span class="line"><span>		command</span></span>
<span class="line"><span>		…</span></span>
<span class="line"><span>	done</span></span>
<span class="line"><span>for (( i=1;i&lt;=5;i++))  </span></span>
<span class="line"><span>	do</span></span>
<span class="line"><span>		echo $i</span></span>
<span class="line"><span>	done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>expr1：定义变量并赋初值   变量初始值</span></span>
<span class="line"><span>expr2：决定是否进行循环（条件）  变量的条件</span></span>
<span class="line"><span>expr3：决定循环变量如何改变,决定循环什么时候退出 自增或自减运算</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>多变量用法</span></span>
<span class="line"><span>for ((A=1,B=10;A&lt;10,B&gt;1;A++,B--))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>语法结构举例说明：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>for ((i=1;i&lt;=5;i++));do echo $i;done</span></span>
<span class="line"><span>for ((i=1;i&lt;=10;i+=2));do echo $i;done</span></span>
<span class="line"><span>for ((i=2;i&lt;=10;i+=2));do echo $i;done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、练习案例" tabindex="-1"><a class="header-anchor" href="#二、练习案例"><span>二、练习案例</span></a></h2><p><strong>jobs: 写一个扫描软件，扫描本地网络中存活的机器</strong></p><p><strong>案例需求：</strong> 判断本地网络中哪些IP被使用</p><p><strong>案例分析：</strong> 采用ping的方式判断IP是否被占用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> a、能ping通说明占用</span></span>
<span class="line"><span> b、不能ping通说明未被占用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>b、命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ping -c1 IP</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>算法：</strong> 1、ping ip 2、分析ping结果 3、输出结果</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 扫描本地网络中存活的主机，以C类地址为例</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#variables</span></span>
<span class="line"><span>netsub=&quot;192.168.1.&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#main</span></span>
<span class="line"><span>#1、循环ping IP地址，能ping通说明IP存在。</span></span>
<span class="line"><span>for ip in \`seq 1 254\`</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>  (  </span></span>
<span class="line"><span>     #2、判断Ping结果</span></span>
<span class="line"><span>     if ping -c1 $netsub$ip &amp;&gt;/dev/null;then</span></span>
<span class="line"><span>          #3、输出结果</span></span>
<span class="line"><span>          echo &quot;$netsub$ip is open&quot;</span></span>
<span class="line"><span>     else</span></span>
<span class="line"><span>          echo &quot;$netsub$ip is close&quot;</span></span>
<span class="line"><span>     fi</span></span>
<span class="line"><span>   ) &amp; </span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、学习视频" tabindex="-1"><a class="header-anchor" href="#三、学习视频"><span>三、学习视频</span></a></h2><p><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=51" target="_blank" rel="noopener noreferrer">视频：流程控制-循环课程介绍</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=52" target="_blank" rel="noopener noreferrer">视频：for循环介绍</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=53" target="_blank" rel="noopener noreferrer">视频：for条件赋值</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=54" target="_blank" rel="noopener noreferrer">视频：for仿C语法</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=55" target="_blank" rel="noopener noreferrer">视频：job-扫描局域网IP</a></p>`,40),p=[l];function d(r,c){return a(),n("div",null,p)}const v=s(e,[["render",d],["__file","流程控制-for循环语句.html.vue"]]),h=JSON.parse('{"path":"/note/shell/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6-for%E5%BE%AA%E7%8E%AF%E8%AF%AD%E5%8F%A5.html","title":"14-流程控制-for循环语句","lang":"zh-CN","frontmatter":{"title":"14-流程控制-for循环语句","order":14,"icon":"lightbulb","description":"工作中总是有很多工作需要重复性来完成，比如每天都需要执行一次备份、每天都需要分析一次业务的access.log日志，每分钟都需要监测一次主机的状态等等工作，这些重复性的工作我们一般都是使用脚本来完成，对于不需要频繁执行的任务，可以结合计划任务➕脚本完成，但是系统的计划任务只能精确到分，不能满足更频繁的重复工作。 这个时候我们除了依赖计划任务之外还有很多...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/shell/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6-for%E5%BE%AA%E7%8E%AF%E8%AF%AD%E5%8F%A5.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"14-流程控制-for循环语句"}],["meta",{"property":"og:description","content":"工作中总是有很多工作需要重复性来完成，比如每天都需要执行一次备份、每天都需要分析一次业务的access.log日志，每分钟都需要监测一次主机的状态等等工作，这些重复性的工作我们一般都是使用脚本来完成，对于不需要频繁执行的任务，可以结合计划任务➕脚本完成，但是系统的计划任务只能精确到分，不能满足更频繁的重复工作。 这个时候我们除了依赖计划任务之外还有很多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"14-流程控制-for循环语句\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"一、循环语句-for","slug":"一、循环语句-for","link":"#一、循环语句-for","children":[{"level":3,"title":"1.1、for介绍","slug":"_1-1、for介绍","link":"#_1-1、for介绍","children":[]},{"level":3,"title":"1.2、for基本语法 for条件循环","slug":"_1-2、for基本语法-for条件循环","link":"#_1-2、for基本语法-for条件循环","children":[]},{"level":3,"title":"1.3、for条件应用","slug":"_1-3、for条件应用","link":"#_1-3、for条件应用","children":[]},{"level":3,"title":"1.4、for C格式语法","slug":"_1-4、for-c格式语法","link":"#_1-4、for-c格式语法","children":[]}]},{"level":2,"title":"二、练习案例","slug":"二、练习案例","link":"#二、练习案例","children":[]},{"level":2,"title":"三、学习视频","slug":"三、学习视频","link":"#三、学习视频","children":[]}],"git":{},"readingTime":{"minutes":3.27,"words":980},"filePathRelative":"note/shell/流程控制-for循环语句.md","autoDesc":true}');export{v as comp,h as data};
