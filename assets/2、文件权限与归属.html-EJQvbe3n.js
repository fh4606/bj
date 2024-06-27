import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as t}from"./app-cGHsJGw-.js";const a="/vuepress/assets/1695614675.0263095-DJ9ttGfW.jpeg",n="/vuepress/assets/1695614675.0377588-Cmyx0qA1.jpeg",o="/vuepress/assets/1695614675.0553203-Bc2X26x2.png",r="/vuepress/assets/1695614675.066035-B4f20JtR.jpeg",l="/vuepress/assets/1695614675.0764408-BfBFspwJ.jpeg",p="/vuepress/assets/1695614675.0881023-DpDDDvu9.png",c="/vuepress/assets/1695614675.1089714-DYnrY9Uh.jpeg",d={},h=t(`<p>尽管在 Linux 系统中一切都是文件，但是每个文件的类型不尽相同，因此 Linux 系统使用了不同的 字符来加以区分，常见的字符如下所示。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> -：普通文件。</span></span>
<span class="line"><span> d： 目录文件。</span></span>
<span class="line"><span> l：链接文件。</span></span>
<span class="line"><span> b：块设备文件。</span></span>
<span class="line"><span> c：字符设备文件。</span></span>
<span class="line"><span> p：管道文件。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Linux 系统中，每个文件都有所属的所有者和所有组，并且规定了文件的所有者、所有组以及其 他人对文件所拥有的可读（ r）、可写（ w）、可执行（ x）等权限。对于一般文件来说，权限比较容 易理解： “可读”表示能够读取文件的实际内容； “可写”表示能够编辑、新增、修改、删除文件的实际内 容； “可执行”则表示能够运行一个脚本程序。</p><p>对目录文件来说， “可读”表示能够读取目录内的文件列表； “可写”表示能够在目录内新增、删除、 重命名文件；而“可执行”则表示能够进入该目录。</p><p>文件的读、写、执行权限可以简写为 rwx ，亦可分别用数字 4、 2、 1 来表示，文件所有</p><p>者，所属组及其他用户权限之间无关联 。</p><figure><img src="`+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>文件权限的数字法表示基于字符表示（ rwx）的权限计算而来， 其目的是简化权限的表示。例如， 若某个文件的权限为 7 则代表可读、可写、可执行（4+2+1）；若权限为 6 则代表可读、可写(</p><p>4+2）。我们来看这样一个例子。现在有这样一个文件，其所有者拥有可读、可写、可执行的权限，其 文件所属组拥有可读、可写的权限；而且其他人只有可读的权限。那么，这个文件的权限就是 rwxrw-r- - ，数字法表示即为 764。不过大家千万再将这三个数字相加，计算出 7+6+4=17 的结果，这是小学的 数学加减法，不是 Linux 系统的权限数字表示法，三者之间没有互通关系。</p><p>下图通过ls命令查看到的文件属性信息：</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在上图中，包含了文件的类型、访问权限、所有者（属主）、所属组（属组）、占用的磁盘大小、修改 时间和文件名称等信息。通过分析可知，该文件的类型为普通文件，所有者权限为可读、可写(</p><p>rw-），所属组权限为可读（ r--），除此以外的其他人也只有可读权限（ r--），文件的磁盘占用大小是 34298 字节，最近一次的修改时间为 4 月 2 日的凌晨 23 分，文件的名称为 install.log。</p><h3 id="_1、命令-chmod-作用-用来改变文件或目录权限-格式为-chmod【选项】【文件】-但是只有文-件的属主和超级用户root才能执行这个命令。有两种模式-一种是采用权限字母和操作符表达式-另一-种是采用数字-常用的是数字表示法。" tabindex="-1"><a class="header-anchor" href="#_1、命令-chmod-作用-用来改变文件或目录权限-格式为-chmod【选项】【文件】-但是只有文-件的属主和超级用户root才能执行这个命令。有两种模式-一种是采用权限字母和操作符表达式-另一-种是采用数字-常用的是数字表示法。"><span>1、命令： chmod，作用：用来改变文件或目录权限，格式为： chmod【选项】【文件】，但是只有文 件的属主和超级用户root才能执行这个命令。有两种模式， 一种是采用权限字母和操作符表达式；另一 种是采用数字，常用的是数字表示法。</span></a></h3><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实例1：在当前目录下新建一个ceshi.txt，并设置该文件所有者的权限为可读可写可执行，并查看是否 修改成功：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# touch ceshi.txt &amp;&amp; chmod 777 ceshi.txt &amp;&amp; ls -l ceshi.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实例2：在当前目录下新建一个zxw的文件夹，并设置该文件夹下所有子文件夹所有者的权限皆为可读 可写可执行，并查看是否修改成功：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@linux ~]# mkdir zxw &amp;&amp; chmod -R 777 ceshi &amp;&amp; ls -l /root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、命令-chown-作用-将指定文件的拥有者改为指定的用户或组-格式为-chown-【参数】-用户" tabindex="-1"><a class="header-anchor" href="#_2、命令-chown-作用-将指定文件的拥有者改为指定的用户或组-格式为-chown-【参数】-用户"><span>2、命令： chown ，作用：将指定文件的拥有者改为指定的用户或组，格式为： chown 【参数】，用户</span></a></h3><p>可以是用户名或者用户ID，组可以是组名或者组ID，文件是以空格分开的要改变权限的文件列表，支持 通配符。 一般来说，这个指令仅限系统管理者(root)所使用，普通用户没有权限改变文件所属者及所属 组。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实例1：将文件ceshi.txt，所有属主、属组更改为： bin，并查看效果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@linux ~]# chown bin:bin ceshi.txt &amp;&amp; ls -l ceshi.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',27),g=[h];function m(u,f){return s(),i("div",null,g)}const _=e(d,[["render",m],["__file","2、文件权限与归属.html.vue"]]),x=JSON.parse('{"path":"/note/centos7/5%E3%80%81%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E4%B8%8E%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90/2%E3%80%81%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E4%B8%8E%E5%BD%92%E5%B1%9E.html","title":"02-文件权限与归属","lang":"zh-CN","frontmatter":{"title":"02-文件权限与归属","order":2,"icon":"lightbulb","description":"尽管在 Linux 系统中一切都是文件，但是每个文件的类型不尽相同，因此 Linux 系统使用了不同的 字符来加以区分，常见的字符如下所示。 在 Linux 系统中，每个文件都有所属的所有者和所有组，并且规定了文件的所有者、所有组以及其 他人对文件所拥有的可读（ r）、可写（ w）、可执行（ x）等权限。对于一般文件来说，权限比较容 易理解： “可读”...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/centos7/5%E3%80%81%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E4%B8%8E%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90/2%E3%80%81%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E4%B8%8E%E5%BD%92%E5%B1%9E.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"02-文件权限与归属"}],["meta",{"property":"og:description","content":"尽管在 Linux 系统中一切都是文件，但是每个文件的类型不尽相同，因此 Linux 系统使用了不同的 字符来加以区分，常见的字符如下所示。 在 Linux 系统中，每个文件都有所属的所有者和所有组，并且规定了文件的所有者、所有组以及其 他人对文件所拥有的可读（ r）、可写（ w）、可执行（ x）等权限。对于一般文件来说，权限比较容 易理解： “可读”..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-文件权限与归属\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"1、命令： chmod，作用：用来改变文件或目录权限，格式为： chmod【选项】【文件】，但是只有文 件的属主和超级用户root才能执行这个命令。有两种模式， 一种是采用权限字母和操作符表达式；另一 种是采用数字，常用的是数字表示法。","slug":"_1、命令-chmod-作用-用来改变文件或目录权限-格式为-chmod【选项】【文件】-但是只有文-件的属主和超级用户root才能执行这个命令。有两种模式-一种是采用权限字母和操作符表达式-另一-种是采用数字-常用的是数字表示法。","link":"#_1、命令-chmod-作用-用来改变文件或目录权限-格式为-chmod【选项】【文件】-但是只有文-件的属主和超级用户root才能执行这个命令。有两种模式-一种是采用权限字母和操作符表达式-另一-种是采用数字-常用的是数字表示法。","children":[]},{"level":3,"title":"2、命令： chown ，作用：将指定文件的拥有者改为指定的用户或组，格式为： chown 【参数】，用户","slug":"_2、命令-chown-作用-将指定文件的拥有者改为指定的用户或组-格式为-chown-【参数】-用户","link":"#_2、命令-chown-作用-将指定文件的拥有者改为指定的用户或组-格式为-chown-【参数】-用户","children":[]}],"git":{},"readingTime":{"minutes":3.52,"words":1055},"filePathRelative":"note/centos7/5、用户身份与文件权限/2、文件权限与归属.md","autoDesc":true}');export{_ as comp,x as data};
