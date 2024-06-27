import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as s}from"./app-Bna6fuy1.js";const t="/assets/1695713730.6415956-DiBVKly_.jpeg",n="/assets/1695713730.6511593-N-b4wqi8.jpeg",r="/assets/1695713730.6611984-BS_OEOEp.jpeg",l="/assets/1695713730.6767485-DxE23Rhs.jpeg",d="/assets/1695713730.687719-B-0p6ygE.jpeg",o="/assets/1695713730.697669-3GXpPNuz.jpeg",c="/assets/1695713730.7103577-Cqz7B6Pg.jpeg",p={},g=s('<p>在Mariadb数据库系统中， 一个数据库可以存放多个数据表，数据表单是数据库最重要的核心内容。表 18.2讲述了一些常用的数据库命令及其对应的作用</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>1、创建一个名为zxw的数据库，使用命令create database</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; create database zxw;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2、查询数据库，看是否创建成功</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; show databases;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3、切换到新建的zxw数据库中，并创建表单ceshi，分别定义3个字段，其中长度为15个字符的字符型 字段name用来存放图书名称，整型字段price和pages分别存放图书的价格和页数。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; use zxw;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MariaDB [zxw]&gt; create table ceshi (name char(15),price int,pages int);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>4、查询新建的表字段，使用命令describe，命令格式： describe【表名称】</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [zxw]&gt; describe ceshi;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>5、删除数据，使用命令 drop ，格式： drop database if exists 【数据库名称】</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; drop database if exists zxw;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>6、再次查询数据库</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; show databases;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',20),h=[g];function b(m,u){return a(),i("div",null,h)}const v=e(p,[["render",b],["__file","5、创建数据库与表单.html.vue"]]),_=JSON.parse('{"path":"/note/centos7/13%E3%80%81%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9C%8D%E5%8A%A1/5%E3%80%81%E5%88%9B%E5%BB%BA%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%8E%E8%A1%A8%E5%8D%95.html","title":"05-数据库与表单","lang":"zh-CN","frontmatter":{"title":"05-数据库与表单","order":5,"icon":"lightbulb","description":"在Mariadb数据库系统中， 一个数据库可以存放多个数据表，数据表单是数据库最重要的核心内容。表 18.2讲述了一些常用的数据库命令及其对应的作用 1、创建一个名为zxw的数据库，使用命令create database 2、查询数据库，看是否创建成功 3、切换到新建的zxw数据库中，并创建表单ceshi，分别定义3个字段，其中长度为15个字符的字符型...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/13%E3%80%81%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9C%8D%E5%8A%A1/5%E3%80%81%E5%88%9B%E5%BB%BA%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%8E%E8%A1%A8%E5%8D%95.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"05-数据库与表单"}],["meta",{"property":"og:description","content":"在Mariadb数据库系统中， 一个数据库可以存放多个数据表，数据表单是数据库最重要的核心内容。表 18.2讲述了一些常用的数据库命令及其对应的作用 1、创建一个名为zxw的数据库，使用命令create database 2、查询数据库，看是否创建成功 3、切换到新建的zxw数据库中，并创建表单ceshi，分别定义3个字段，其中长度为15个字符的字符型..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05-数据库与表单\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.9,"words":270},"filePathRelative":"note/centos7/13、数据库服务/5、创建数据库与表单.md","autoDesc":true}');export{v as comp,_ as data};
