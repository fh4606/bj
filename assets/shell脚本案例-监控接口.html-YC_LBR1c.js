import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-Bna6fuy1.js";const i={},l=e(`<h2 id="案例需求" tabindex="-1"><a class="header-anchor" href="#案例需求"><span>案例需求</span></a></h2><p>URL监控脚本，对某个URL进行监控，返回值为200则代表成功访问。</p><h2 id="脚本应用场景" tabindex="-1"><a class="header-anchor" href="#脚本应用场景"><span>脚本应用场景：</span></a></h2><p>WEB站点监控</p><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h2><p>URL监控</p><p>页面监控</p><h2 id="脚本思路" tabindex="-1"><a class="header-anchor" href="#脚本思路"><span>脚本思路</span></a></h2><p>1、使用curl访问一次URL，并将输出保存</p><p>2、访问输出文件，获取返回值</p><p>3、判断返回值是否和初始预设的返回值相等，并对应输出</p><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: URL监控脚本</span></span>
<span class="line"><span>#监控阈值可以是: 状态码、页面字符串、页面所有内容</span></span>
<span class="line"><span>#本例以状态码为例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#variables</span></span>
<span class="line"><span>init_url_status=200</span></span>
<span class="line"><span>temp_file=\`mktemp /tmp/check_url.XXX\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#help</span></span>
<span class="line"><span>if [ -z &quot;$1&quot; ]||[ &quot;$1&quot; == &quot;--help&quot; ];then</span></span>
<span class="line"><span>   echo &quot;$0 url&quot;</span></span>
<span class="line"><span>   echo &quot;--help: 打印该帮助&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#如果用户没有传参则退出</span></span>
<span class="line"><span>[ $# -lt 1 ]&amp;&amp;exit 1</span></span>
<span class="line"><span>#main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、使用curl命令访问一次URL</span></span>
<span class="line"><span>#1.1 判断脚本依赖命令是否存在</span></span>
<span class="line"><span>[ ! -x /usr/bin/curl ]&amp;&amp;echo &quot;curl: not found command&quot;&amp;&amp;exit 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1.2 访问一次URL</span></span>
<span class="line"><span>curl -I $1 &amp;&gt; $temp_file</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2、从输出中截取状态码</span></span>
<span class="line"><span>url_status=\`grep &quot;HTTP/1.1&quot; $temp_file|cut -d &quot; &quot; -f2\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2.1如果取值失败直接报错(测试发现当无法访问URL时会在第三步中报比较错误，所以这里取不到值就不往下走了)</span></span>
<span class="line"><span>[ -z &quot;$url_status&quot; ]&amp;&amp;echo -e &quot;\\033[31mstatus:NULL\\033[0m&quot;&amp;&amp;exit 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3、判断状态码是否和预设的一致</span></span>
<span class="line"><span>    #3.1 一致  输出绿色字体 &quot;status:200&quot;</span></span>
<span class="line"><span>    #3.2 不一致 输出红色字体 &quot;status:XXX&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $init_url_status -eq $url_status ];then</span></span>
<span class="line"><span>    echo -e &quot;\\033[32mstatus:$url_status\\033[0m&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo -e &quot;\\033[31mstatus:$url_status\\033[0m&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#4、删除临时文件</span></span>
<span class="line"><span>rm -f $temp_file</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例思考" tabindex="-1"><a class="header-anchor" href="#案例思考"><span>案例思考</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>页面监控方法(监控页面字符串或全页内容)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,15),p=[l];function t(c,d){return a(),n("div",null,p)}const o=s(i,[["render",t],["__file","shell脚本案例-监控接口.html.vue"]]),v=JSON.parse('{"path":"/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E7%9B%91%E6%8E%A7%E6%8E%A5%E5%8F%A3.html","title":"30-案例-监控接口","lang":"zh-CN","frontmatter":{"title":"30-案例-监控接口","order":30,"icon":"lightbulb","description":"案例需求 URL监控脚本，对某个URL进行监控，返回值为200则代表成功访问。 脚本应用场景： WEB站点监控 解决问题 URL监控 页面监控 脚本思路 1、使用curl访问一次URL，并将输出保存 2、访问输出文件，获取返回值 3、判断返回值是否和初始预设的返回值相等，并对应输出 实现代码 案例思考","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E7%9B%91%E6%8E%A7%E6%8E%A5%E5%8F%A3.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"30-案例-监控接口"}],["meta",{"property":"og:description","content":"案例需求 URL监控脚本，对某个URL进行监控，返回值为200则代表成功访问。 脚本应用场景： WEB站点监控 解决问题 URL监控 页面监控 脚本思路 1、使用curl访问一次URL，并将输出保存 2、访问输出文件，获取返回值 3、判断返回值是否和初始预设的返回值相等，并对应输出 实现代码 案例思考"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"30-案例-监控接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"案例需求","slug":"案例需求","link":"#案例需求","children":[]},{"level":2,"title":"脚本应用场景：","slug":"脚本应用场景","link":"#脚本应用场景","children":[]},{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]},{"level":2,"title":"脚本思路","slug":"脚本思路","link":"#脚本思路","children":[]},{"level":2,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]},{"level":2,"title":"案例思考","slug":"案例思考","link":"#案例思考","children":[]}],"git":{},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"note/shell/shell脚本案例-监控接口.md","autoDesc":true}');export{o as comp,v as data};
