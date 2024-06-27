import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-cGHsJGw-.js";const i={},l=e(`<h2 id="一、循环控制-break语句" tabindex="-1"><a class="header-anchor" href="#一、循环控制-break语句"><span>一、循环控制-break语句</span></a></h2><p>作用: 终止循环，执行循环体后面的代码 <strong>案例:</strong> 循环打印输出数字1到9，当执行输出到5时终止循环。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>要求输出：</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>执行完毕</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i in \`seq 1 9\`</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>      echo $i</span></span>
<span class="line"><span>      if [ $i -eq 5 ]</span></span>
<span class="line"><span> 				then</span></span>
<span class="line"><span>	   			break</span></span>
<span class="line"><span>			fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;执行完毕&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、循环控制-continue语句" tabindex="-1"><a class="header-anchor" href="#二、循环控制-continue语句"><span>二、循环控制-continue语句</span></a></h2><p>作用: 跳过某次循环，继续执行下一次循环；表示循环体内下面的代码不执行，重新开始下一次循环</p><p><strong>案例:</strong> 循环打印输出数字1到9，当执行输出到5时跳过本次循环。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>要求输出：</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>执行完毕</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span>for ((i=1;i&lt;10;i++))</span></span>
<span class="line"><span>   do</span></span>
<span class="line"><span>       if [ $i -eq 5 ]</span></span>
<span class="line"><span>	  then </span></span>
<span class="line"><span>		continue</span></span>
<span class="line"><span>	else</span></span>
<span class="line"><span>		echo $i</span></span>
<span class="line"><span>	fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>echo &quot;执行完毕&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、循环控制-sleep" tabindex="-1"><a class="header-anchor" href="#三、循环控制-sleep"><span>三、循环控制-sleep</span></a></h2><p>作用: 控制循环的节奏,控制循环频率 当执行一个无限循环语句的时候，如果任意其循环那么该循环就会疯狂的消耗计算机的内存和CPU资源，消耗最大的就是CPU，所以一个循环不可能让其肆意循环，必须控制其循环的节奏，可以使用sleep语句来完成。</p><p><strong>案例：</strong> 写一个倒计时程序：从9到1，每秒倒数一次。</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author: </span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo -n &quot;倒计时: &quot;</span></span>
<span class="line"><span>for i in \`seq 9 -1 1\`</span></span>
<span class="line"><span>   do</span></span>
<span class="line"><span>      echo -n -e &quot;\\b$i&quot;</span></span>
<span class="line"><span>      sleep 1</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>echo </span></span>
<span class="line"><span>echo &quot;执行完毕&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、参数控制命令-shift" tabindex="-1"><a class="header-anchor" href="#四、参数控制命令-shift"><span>四、参数控制命令-shift</span></a></h2><p>作用: 外部传参到循环时，参数管理命令 使位置参数向左移动，默认移动1位，可以使用shift 2 传参要是N的整数倍</p><p><strong>案例:</strong> 通过外部传参的方式向脚本内的循环传递参数，要求打印每次循环使用的参数。</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span>#1、判断外传参的数量</span></span>
<span class="line"><span>[ $# -lt 3 ]&amp;&amp;echo &#39;请输入至少三个参数:&#39;$0&#39; $1 $2 $3 ...&#39;&amp;&amp;exit 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#将参数的数量赋值给count</span></span>
<span class="line"><span>count=$#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#通过shift左移参数输出</span></span>
<span class="line"><span>#使位置参数向左移动，默认移动1位，可以使用shift 2 传参要是N的整数倍</span></span>
<span class="line"><span>for ((i=1;i&lt;=$count;i++))</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>    echo &#39;参数数量: &#39;$#&#39;&#39;</span></span>
<span class="line"><span>    echo &#39;当前$1的数值是: &#39;$1&#39;&#39;</span></span>
<span class="line"><span>    shift 1</span></span>
<span class="line"><span>    sleep 1</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>echo &quot;执行完毕&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、脚本退出命令-exit" tabindex="-1"><a class="header-anchor" href="#五、脚本退出命令-exit"><span>五、脚本退出命令-exit</span></a></h2><p>作用: 退出程序并释放占用的系统资源</p><p><strong>案例:</strong> 循环输出数字1-9，当循环到5时退出脚本。</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i in \`seq 1 9\`</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>      echo $i</span></span>
<span class="line"><span>      if [ $i -eq 5 ]</span></span>
<span class="line"><span> 	then</span></span>
<span class="line"><span>	   exit 0  </span></span>
<span class="line"><span>	fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>echo &quot;执行完毕&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、作业" tabindex="-1"><a class="header-anchor" href="#六、作业"><span>六、作业</span></a></h2><p>break 和 exit语句的区别</p><h2 id="七、学习视频" tabindex="-1"><a class="header-anchor" href="#七、学习视频"><span>七、学习视频</span></a></h2><p><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=56" target="_blank" rel="noopener noreferrer">视频：循环控制01</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=57" target="_blank" rel="noopener noreferrer">视频：循环控制02</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=58" target="_blank" rel="noopener noreferrer">视频：循环控制-shift</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=59" target="_blank" rel="noopener noreferrer">视频：脚本控制语句-exit</a></p>`,30),p=[l];function d(t,r){return a(),n("div",null,p)}const o=s(i,[["render",d],["__file","循环控制语句.html.vue"]]),h=JSON.parse('{"path":"/note/shell/%E5%BE%AA%E7%8E%AF%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5.html","title":"15-循环控制语句","lang":"zh-CN","frontmatter":{"title":"15-循环控制语句","order":15,"icon":"lightbulb","description":"一、循环控制-break语句 作用: 终止循环，执行循环体后面的代码 案例: 循环打印输出数字1到9，当执行输出到5时终止循环。 案例代码 二、循环控制-continue语句 作用: 跳过某次循环，继续执行下一次循环；表示循环体内下面的代码不执行，重新开始下一次循环 案例: 循环打印输出数字1到9，当执行输出到5时跳过本次循环。 案例代码 三、循环控制...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/shell/%E5%BE%AA%E7%8E%AF%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"15-循环控制语句"}],["meta",{"property":"og:description","content":"一、循环控制-break语句 作用: 终止循环，执行循环体后面的代码 案例: 循环打印输出数字1到9，当执行输出到5时终止循环。 案例代码 二、循环控制-continue语句 作用: 跳过某次循环，继续执行下一次循环；表示循环体内下面的代码不执行，重新开始下一次循环 案例: 循环打印输出数字1到9，当执行输出到5时跳过本次循环。 案例代码 三、循环控制..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"15-循环控制语句\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"一、循环控制-break语句","slug":"一、循环控制-break语句","link":"#一、循环控制-break语句","children":[]},{"level":2,"title":"二、循环控制-continue语句","slug":"二、循环控制-continue语句","link":"#二、循环控制-continue语句","children":[]},{"level":2,"title":"三、循环控制-sleep","slug":"三、循环控制-sleep","link":"#三、循环控制-sleep","children":[]},{"level":2,"title":"四、参数控制命令-shift","slug":"四、参数控制命令-shift","link":"#四、参数控制命令-shift","children":[]},{"level":2,"title":"五、脚本退出命令-exit","slug":"五、脚本退出命令-exit","link":"#五、脚本退出命令-exit","children":[]},{"level":2,"title":"六、作业","slug":"六、作业","link":"#六、作业","children":[]},{"level":2,"title":"七、学习视频","slug":"七、学习视频","link":"#七、学习视频","children":[]}],"git":{},"readingTime":{"minutes":2.48,"words":744},"filePathRelative":"note/shell/循环控制语句.md","autoDesc":true}');export{o as comp,h as data};
