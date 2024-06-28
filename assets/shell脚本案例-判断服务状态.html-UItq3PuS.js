import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-DuswJAHG.js";const i={},l=e(`<h2 id="案例需求" tabindex="-1"><a class="header-anchor" href="#案例需求"><span>案例需求</span></a></h2><p>判断计算机某个端口是否为OPEN状态,且能正常访问</p><h2 id="脚本应用场景" tabindex="-1"><a class="header-anchor" href="#脚本应用场景"><span>脚本应用场景：</span></a></h2><p>服务监控脚本+监控平台</p><p>手动监控</p><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h2><p>实时掌握服务的运行状态，及时处理问题。</p><h2 id="脚本思路" tabindex="-1"><a class="header-anchor" href="#脚本思路"><span>脚本思路</span></a></h2><p>1、使用telnet命令连接远端机器的远端端口</p><p>2、接收连接反馈并分析结果</p><p>3、分析文件内容</p><p>4、打印结果</p><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#监控一个服务端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>temp_file=\`mktemp port_status.XXX\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、判断依赖命令telnet是否存在</span></span>
<span class="line"><span>[ ! -x /usr/bin/telnet ]&amp;&amp;echo &quot;telnet: not found command&quot;&amp;&amp; exit 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2、测试端口 $1 IP    $2 port</span></span>
<span class="line"><span>( telnet $1 $2 &lt;&lt;EOF</span></span>
<span class="line"><span>quit</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>) &amp;&gt;$temp_file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3、分析文件中的内容，判断结果</span></span>
<span class="line"><span>if egrep &quot;\\^]&quot; $temp_file &amp;&gt;/dev/null;then</span></span>
<span class="line"><span>	 #4、打印结果</span></span>
<span class="line"><span>   echo &quot;$1 $2 is open&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>   echo &quot;$1 $2 is close&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#5、删除临时文件</span></span>
<span class="line"><span>rm -f $temp_file</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例思考" tabindex="-1"><a class="header-anchor" href="#案例思考"><span>案例思考</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#监控方法</span></span>
<span class="line"><span>#1）通过systemctl  service   服务启动状态  </span></span>
<span class="line"><span>#2）lsof 查看端口是否存在</span></span>
<span class="line"><span>#3）查看进程是否存在</span></span>
<span class="line"><span>   注意  压力过大 无法响应 |  服务down了  上述东西还在  监测不准确</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#4）测试端口是否有响应    推荐</span></span>
<span class="line"><span>    #telnet 协议</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p=[l];function t(d,c){return a(),n("div",null,p)}const h=s(i,[["render",t],["__file","shell脚本案例-判断服务状态.html.vue"]]),v=JSON.parse('{"path":"/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E5%88%A4%E6%96%AD%E6%9C%8D%E5%8A%A1%E7%8A%B6%E6%80%81.html","title":"26-案例-判断服务状态","lang":"zh-CN","frontmatter":{"title":"26-案例-判断服务状态","order":26,"icon":"lightbulb","description":"案例需求 判断计算机某个端口是否为OPEN状态,且能正常访问 脚本应用场景： 服务监控脚本+监控平台 手动监控 解决问题 实时掌握服务的运行状态，及时处理问题。 脚本思路 1、使用telnet命令连接远端机器的远端端口 2、接收连接反馈并分析结果 3、分析文件内容 4、打印结果 实现代码 案例思考","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E5%88%A4%E6%96%AD%E6%9C%8D%E5%8A%A1%E7%8A%B6%E6%80%81.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"26-案例-判断服务状态"}],["meta",{"property":"og:description","content":"案例需求 判断计算机某个端口是否为OPEN状态,且能正常访问 脚本应用场景： 服务监控脚本+监控平台 手动监控 解决问题 实时掌握服务的运行状态，及时处理问题。 脚本思路 1、使用telnet命令连接远端机器的远端端口 2、接收连接反馈并分析结果 3、分析文件内容 4、打印结果 实现代码 案例思考"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"26-案例-判断服务状态\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"案例需求","slug":"案例需求","link":"#案例需求","children":[]},{"level":2,"title":"脚本应用场景：","slug":"脚本应用场景","link":"#脚本应用场景","children":[]},{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]},{"level":2,"title":"脚本思路","slug":"脚本思路","link":"#脚本思路","children":[]},{"level":2,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]},{"level":2,"title":"案例思考","slug":"案例思考","link":"#案例思考","children":[]}],"git":{},"readingTime":{"minutes":1.02,"words":307},"filePathRelative":"note/shell/shell脚本案例-判断服务状态.md","autoDesc":true}');export{h as comp,v as data};
