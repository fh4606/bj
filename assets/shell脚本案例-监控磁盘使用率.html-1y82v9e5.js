import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,d as a}from"./app-Bna6fuy1.js";const i={},l=a(`<h1 id="job-监控磁盘使用率" tabindex="-1"><a class="header-anchor" href="#job-监控磁盘使用率"><span>job-监控磁盘使用率</span></a></h1><h2 id="案例需求" tabindex="-1"><a class="header-anchor" href="#案例需求"><span>案例需求</span></a></h2><p>打印磁盘使用率脚本，对本机的磁盘使用率统计并打印结果 使用率小于80，绿色输出 使用率小于90，大于80，黄色输出 使用率小于95，大于90，红色输出</p><h2 id="脚本应用场景" tabindex="-1"><a class="header-anchor" href="#脚本应用场景"><span>脚本应用场景：</span></a></h2><p>磁盘使用率监控一般周期为小时、天，不会太频繁。</p><p>监控平台+监控脚本</p><p>计划任务+监控脚本</p><p>手动监控</p><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h2><p>及时掌握磁盘容量，防止100%造成磁盘无法读取。</p><h2 id="脚本思路" tabindex="-1"><a class="header-anchor" href="#脚本思路"><span>脚本思路</span></a></h2><ol><li>检索本机磁盘</li><li>判断磁盘使用率</li><li>输出结果</li></ol><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#指定for条件的分割符为回车，一行一个条件</span></span>
<span class="line"><span>IFS=$&#39;\\n&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、遍历符合条件的每一行磁盘数据</span></span>
<span class="line"><span>for i in \`df -Th|egrep -v &quot;(tmpfs|sr0)&quot;|tail -n +2|tr -s &quot; &quot;\`;do</span></span>
<span class="line"><span>size=\`echo $i|cut -d &quot; &quot; -f6|tr -d &quot;%&quot;\`</span></span>
<span class="line"><span>name=\`echo $i|cut -d &quot; &quot; -f1\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2、判断每行中的磁盘使用率并输出结果</span></span>
<span class="line"><span> if [ $size -ge 95 ];then</span></span>
<span class="line"><span>    #3、输出日志并关机，不许在写入数据</span></span>
<span class="line"><span>    logger &quot;ERROR:$name use is $size.halt&quot;</span></span>
<span class="line"><span>    halt -p</span></span>
<span class="line"><span> elif [ $size -ge 90 ];then</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    echo -e &quot;\\033[31m $name use is \${size}%\\033[0m&quot;</span></span>
<span class="line"><span> elif [ $size -ge 80 ];then</span></span>
<span class="line"><span>    echo -e &quot;\\033[33m $name use is \${size}%\\033[0m&quot;</span></span>
<span class="line"><span> else</span></span>
<span class="line"><span>    echo -e &quot;\\033[32m$name use is \${size}%\\033[0m&quot;</span></span>
<span class="line"><span> fi</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例思考" tabindex="-1"><a class="header-anchor" href="#案例思考"><span>案例思考</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>思考磁盘IO队列、吞吐率、IOPS的监控方法</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,16),p=[l];function t(d,r){return e(),n("div",null,p)}const h=s(i,[["render",t],["__file","shell脚本案例-监控磁盘使用率.html.vue"]]),u=JSON.parse('{"path":"/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E7%9B%91%E6%8E%A7%E7%A3%81%E7%9B%98%E4%BD%BF%E7%94%A8%E7%8E%87.html","title":"28-案例-监控磁盘使用率","lang":"zh-CN","frontmatter":{"title":"28-案例-监控磁盘使用率","order":28,"icon":"lightbulb","description":"job-监控磁盘使用率 案例需求 打印磁盘使用率脚本，对本机的磁盘使用率统计并打印结果 使用率小于80，绿色输出 使用率小于90，大于80，黄色输出 使用率小于95，大于90，红色输出 脚本应用场景： 磁盘使用率监控一般周期为小时、天，不会太频繁。 监控平台+监控脚本 计划任务+监控脚本 手动监控 解决问题 及时掌握磁盘容量，防止100%造成磁盘无法读...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E7%9B%91%E6%8E%A7%E7%A3%81%E7%9B%98%E4%BD%BF%E7%94%A8%E7%8E%87.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"28-案例-监控磁盘使用率"}],["meta",{"property":"og:description","content":"job-监控磁盘使用率 案例需求 打印磁盘使用率脚本，对本机的磁盘使用率统计并打印结果 使用率小于80，绿色输出 使用率小于90，大于80，黄色输出 使用率小于95，大于90，红色输出 脚本应用场景： 磁盘使用率监控一般周期为小时、天，不会太频繁。 监控平台+监控脚本 计划任务+监控脚本 手动监控 解决问题 及时掌握磁盘容量，防止100%造成磁盘无法读..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"28-案例-监控磁盘使用率\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"案例需求","slug":"案例需求","link":"#案例需求","children":[]},{"level":2,"title":"脚本应用场景：","slug":"脚本应用场景","link":"#脚本应用场景","children":[]},{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]},{"level":2,"title":"脚本思路","slug":"脚本思路","link":"#脚本思路","children":[]},{"level":2,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]},{"level":2,"title":"案例思考","slug":"案例思考","link":"#案例思考","children":[]}],"git":{},"readingTime":{"minutes":1.21,"words":364},"filePathRelative":"note/shell/shell脚本案例-监控磁盘使用率.md","autoDesc":true}');export{h as comp,u as data};
