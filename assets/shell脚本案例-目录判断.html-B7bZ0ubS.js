import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as s,d as a}from"./app-cGHsJGw-.js";const l={},i=a(`<h2 id="案例需求" tabindex="-1"><a class="header-anchor" href="#案例需求"><span>案例需求</span></a></h2><p>判断/tmp/run目录是否存在，如果不存在就建立，如果存在就删除目录里所有文件</p><h2 id="脚本应用场景" tabindex="-1"><a class="header-anchor" href="#脚本应用场景"><span>脚本应用场景：</span></a></h2><p>脚本中对文件和文件夹类型的及权限的判断</p><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h2><p>避免文件或者文件夹的重复建立问题</p><h2 id="脚本思路" tabindex="-1"><a class="header-anchor" href="#脚本思路"><span>脚本思路</span></a></h2><ol><li>判断文件夹/tmp/run目录是否存在</li><li>存在 删除目录下内容</li><li>不存在 退出脚本</li></ol><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 判断/tmp/run目录是否存在</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、判断文件夹/tmp/run目录是否存在</span></span>
<span class="line"><span>if [ -d /tmp/run ];then</span></span>
<span class="line"><span>   #2、存在 删除目录下内容</span></span>
<span class="line"><span>   rm -rf /tmp/run/*</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>   #3、不存在 退出脚本</span></span>
<span class="line"><span>   exit 0</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[i];function p(r,c){return s(),n("div",null,t)}const h=e(l,[["render",p],["__file","shell脚本案例-目录判断.html.vue"]]),m=JSON.parse('{"path":"/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E7%9B%AE%E5%BD%95%E5%88%A4%E6%96%AD.html","title":"33-案例-目录判断","lang":"zh-CN","frontmatter":{"title":"33-案例-目录判断","order":33,"icon":"lightbulb","description":"案例需求 判断/tmp/run目录是否存在，如果不存在就建立，如果存在就删除目录里所有文件 脚本应用场景： 脚本中对文件和文件夹类型的及权限的判断 解决问题 避免文件或者文件夹的重复建立问题 脚本思路 判断文件夹/tmp/run目录是否存在 存在 删除目录下内容 不存在 退出脚本 实现代码","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E7%9B%AE%E5%BD%95%E5%88%A4%E6%96%AD.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"33-案例-目录判断"}],["meta",{"property":"og:description","content":"案例需求 判断/tmp/run目录是否存在，如果不存在就建立，如果存在就删除目录里所有文件 脚本应用场景： 脚本中对文件和文件夹类型的及权限的判断 解决问题 避免文件或者文件夹的重复建立问题 脚本思路 判断文件夹/tmp/run目录是否存在 存在 删除目录下内容 不存在 退出脚本 实现代码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"33-案例-目录判断\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"案例需求","slug":"案例需求","link":"#案例需求","children":[]},{"level":2,"title":"脚本应用场景：","slug":"脚本应用场景","link":"#脚本应用场景","children":[]},{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]},{"level":2,"title":"脚本思路","slug":"脚本思路","link":"#脚本思路","children":[]},{"level":2,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]}],"git":{},"readingTime":{"minutes":0.63,"words":189},"filePathRelative":"note/shell/shell脚本案例-目录判断.md","autoDesc":true}');export{h as comp,m as data};
