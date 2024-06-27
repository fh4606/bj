import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,d as a}from"./app-Bna6fuy1.js";const t="/assets/1695713614.6836112-DCmFyVQ4.png",n="/assets/1695713614.6925857-DZe9RpRY.png",r="/assets/1695713614.7033796-gA7z_3x_.jpeg",l="/assets/1695713614.71313-rapqpxZH.jpeg",d="/assets/1695713614.7279315-C91O5uG9.jpeg",o="/assets/1695713614.7385764-CGpquoP2.jpeg",p="/assets/1695713614.753744-CC12PWlL.jpeg",c="/assets/1695713614.7650928-VB80QD-0.png",g="/assets/1695713614.7826774-z0MlCVIG.jpeg",h="/assets/1695713614.7989411-B0zRkjHp.jpeg",u="/assets/1695713614.8151362-X64V8_6o.jpeg",m="/assets/1695713614.8310359-wHsCqBui.png",b="/assets/1695713614.841677-9GAbYzYA.jpeg",f="/assets/1695713614.851116-CPEjEfVV.jpeg",k={},v=a('<p>为了保证数据库系统的安全性，以及让其他用户协同管理数据库，我们可以在mariadb数据库管理 系统中创建多个用户，并分配相关权限，满足工作需求。</p><p>1、认识常用权限</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2、新建用户，命令格式： create user 用户名@主机名 identiﬁed by&#39;密码&#39; ；示例：新建用户 zxw ，密码 为： 0000</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; create user zxw@localhost identified by &#39;0000&#39;; Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MariaDB [(none)]&gt; flush privileges;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Query OK, 0 rows affected (0.00 sec)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>用新建的用户测试登录：</p><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>返回到root登录使用命令select查看用户：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; use mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MariaDB [mysql]&gt; select host,user,password from user where user=&#39;zxw&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新建的用户zxw没有任何数据库操作权限，我们可以使用管理员root赋予zxw用户权限，以完成相关操 作</p><p>3、针对mysql数据库中的user表单向账户zxw授予查询、更新、删除以及插入等权限，使用命令grant</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [mysql]&gt; grant select,update,delete,insert on mysql.user to zxw@localhost;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>4、查看账户zxw的权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; show grants for zxw@localhost;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>5、切换至zxw用户下，查看mysql数据库，而且还能看到表单user （其余表单会因为没有权限而被继续 隐藏）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; show databases;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; use mysql;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MariaDB [mysql]&gt; show tables;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>5、返回到root管理员用户下，使用命令revoke移除相关权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; revoke select,update,delete,insert on mysql.user from zxw@localhost;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>6、在次查看zxw用户权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; show grants for zxw@localhost;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>7、使用seletc命令查看所有用户</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; select user,host,password from mysql.user;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>8、删除zxw用户</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [(none)]&gt; use mysql;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MariaDB [mysql]&gt; delete from user where user=&#39;zxw&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>9、再次查看所有用户</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>MariaDB [mysql]&gt; select user,host,password from mysql.user;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时我们发现库中已经没有zxw这个用户了</p>',40),y=[v];function _(x,E){return s(),e("div",null,y)}const w=i(k,[["render",_],["__file","4、管理账户以及授权.html.vue"]]),D=JSON.parse(`{"path":"/note/centos7/13%E3%80%81%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9C%8D%E5%8A%A1/4%E3%80%81%E7%AE%A1%E7%90%86%E8%B4%A6%E6%88%B7%E4%BB%A5%E5%8F%8A%E6%8E%88%E6%9D%83.html","title":"04-管理账户和授权","lang":"zh-CN","frontmatter":{"title":"04-管理账户和授权","order":4,"icon":"lightbulb","description":"为了保证数据库系统的安全性，以及让其他用户协同管理数据库，我们可以在mariadb数据库管理 系统中创建多个用户，并分配相关权限，满足工作需求。 1、认识常用权限 2、新建用户，命令格式： create user 用户名@主机名 identiﬁed by'密码' ；示例：新建用户 zxw ，密码 为： 0000 用新建的用户测试登录： 返回到root登...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/13%E3%80%81%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9C%8D%E5%8A%A1/4%E3%80%81%E7%AE%A1%E7%90%86%E8%B4%A6%E6%88%B7%E4%BB%A5%E5%8F%8A%E6%8E%88%E6%9D%83.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"04-管理账户和授权"}],["meta",{"property":"og:description","content":"为了保证数据库系统的安全性，以及让其他用户协同管理数据库，我们可以在mariadb数据库管理 系统中创建多个用户，并分配相关权限，满足工作需求。 1、认识常用权限 2、新建用户，命令格式： create user 用户名@主机名 identiﬁed by'密码' ；示例：新建用户 zxw ，密码 为： 0000 用新建的用户测试登录： 返回到root登..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04-管理账户和授权\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.57,"words":471},"filePathRelative":"note/centos7/13、数据库服务/4、管理账户以及授权.md","autoDesc":true}`);export{w as comp,D as data};
