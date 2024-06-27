import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as t,d as a}from"./app-cGHsJGw-.js";const i="/vuepress/assets/1695708722.255216-CFJY4a6z.jpeg",n="/vuepress/assets/1695708722.266619-mlCf-tHg.png",l={},p=a(`<p><strong>实验前准备：</strong> 1、利用apache搭建基于域名的虚拟主机服务。 实例：利用Apache搭建基于虚拟目录的虚拟主机</p><p>1、编辑httpd主配置文件，在尾行添加如下内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@localhost ~]# vi /etc/httpd/conf/httpd.conf</span></span>
<span class="line"><span> Alias /test1 &quot;/www/www.a.com&quot; //创建虚拟目录/test1 指向物理路径/www/www.a.com</span></span>
<span class="line"><span> Alias /test2 &quot;/www/www.b.com&quot; //创建虚拟目录/test2 指向物理路径/www/www.b.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、将配置的虚拟主机主配置文件以下两行注释掉：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# vi /etc/httpd/conf.d/virtual.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;VirtualHost *:80&gt;</span></span>
<span class="line"><span>ServerName www.a.com</span></span>
<span class="line"><span>#DocumentRoot &quot;/www/www.a.com/&quot; //注释掉本行</span></span>
<span class="line"><span>&lt;/VirtualHost&gt;</span></span>
<span class="line"><span>&lt;VirtualHost *:80&gt;</span></span>
<span class="line"><span>ServerName www.b.com</span></span>
<span class="line"><span>#DocumentRoot &quot;/www/www.b.com/&quot; &lt;/VirtualHost&gt; //注释掉本行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、重启httpd服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1 [root@localhost ~]# !sys</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>4、测试 <img src="`+i+'" alt="" loading="lazy"><img src="'+n+'" alt="" loading="lazy"></p>',8),o=[p];function c(r,d){return t(),s("div",null,o)}const u=e(l,[["render",c],["__file","5、利用Apache搭建基于虚拟目录的虚拟主机.html.vue"]]),g=JSON.parse('{"path":"/note/centos7/7%E3%80%81%E4%BD%BF%E7%94%A8Apache%E9%83%A8%E7%BD%B2%E7%BD%91%E7%AB%99/5%E3%80%81%E5%88%A9%E7%94%A8Apache%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8E%E8%99%9A%E6%8B%9F%E7%9B%AE%E5%BD%95%E7%9A%84%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA.html","title":"05-虚拟目录","lang":"zh-CN","frontmatter":{"title":"05-虚拟目录","order":5,"icon":"lightbulb","description":"实验前准备： 1、利用apache搭建基于域名的虚拟主机服务。 实例：利用Apache搭建基于虚拟目录的虚拟主机 1、编辑httpd主配置文件，在尾行添加如下内容： 2、将配置的虚拟主机主配置文件以下两行注释掉： 3、重启httpd服务 4、测试","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/centos7/7%E3%80%81%E4%BD%BF%E7%94%A8Apache%E9%83%A8%E7%BD%B2%E7%BD%91%E7%AB%99/5%E3%80%81%E5%88%A9%E7%94%A8Apache%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8E%E8%99%9A%E6%8B%9F%E7%9B%AE%E5%BD%95%E7%9A%84%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"05-虚拟目录"}],["meta",{"property":"og:description","content":"实验前准备： 1、利用apache搭建基于域名的虚拟主机服务。 实例：利用Apache搭建基于虚拟目录的虚拟主机 1、编辑httpd主配置文件，在尾行添加如下内容： 2、将配置的虚拟主机主配置文件以下两行注释掉： 3、重启httpd服务 4、测试"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05-虚拟目录\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"note/centos7/7、使用Apache部署网站/5、利用Apache搭建基于虚拟目录的虚拟主机.md","autoDesc":true}');export{u as comp,g as data};
