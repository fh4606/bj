import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-DZWWIkr0.js";const l={},i=e(`<h1 id="一、编程语言介绍" tabindex="-1"><a class="header-anchor" href="#一、编程语言介绍"><span>一、编程语言介绍</span></a></h1><p>编程语言是指计算机能理解的语言，人类通过使用计算机语言可以给计算机批量下达任务，让其按照人类的思想去完成工作。最常见的语言有：汇编语言、C语言、java语言、php语言、Python语言、golang语言等等。</p><p>编程语言分类：</p><ul><li>编译型语言 程序在执行之前需要一个专门的编译过程，把程序编译成为机器语言文件，运行时不需要重新翻译，直接使用编译的结果就行了。程序执行效率高，依赖编译器，跨平台性差些。如C、C++、java</li><li>解释型语言 程序不需要编译，程序在运行时由解释器翻译成机器语言，每执行一次都要翻译一次。因此效率比较低。比如Python/JavaScript/ Perl /ruby/Shell等都是解释型语言。</li></ul><h2 id="二、shell介绍" tabindex="-1"><a class="header-anchor" href="#二、shell介绍"><span>二、shell介绍</span></a></h2><p>shell在计算机中起到什么作用呢？为什么要求shell呢，我们可以看看计算机操作系统的组成：</p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/14/1600050867343.png" alt="OS分层.png" tabindex="0" loading="lazy"><figcaption>OS分层.png</figcaption></figure><p>看图之前问大家个问题，两个人在电话聊天：只会说法语的法国人，只会说汉语的你。如何沟通呢？</p><p>请个翻译在你两中间</p><p>同理，系统内核只知道二进制</p><p>如果你想给计算机内核下任务，让其驱动硬件干活，那么有两种选择</p><p>1、你学会二进制</p><p>2、找个翻译</p><h3 id="_1、shell介绍" tabindex="-1"><a class="header-anchor" href="#_1、shell介绍"><span>1、shell介绍</span></a></h3><p>shell就是我们找来的翻译</p><p>shell是一个程序，采用C语言编写，是用户和linux内核沟通的桥梁。它既是一种命令语言，又是一种解释性的编程语言。通过一个图表来查看一下shell的作用。</p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/14/1600050927043.png" alt="00_shell.png" tabindex="0" loading="lazy"><figcaption>00_shell.png</figcaption></figure><p><strong>总结</strong></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>shell就是人机交互的一个桥梁</p></div><p><strong>shell的种类</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@shell ~]# cat /etc/shells </span></span>
<span class="line"><span>/bin/sh			#bash    shell的一个快捷方式</span></span>
<span class="line"><span>/bin/bash		#bash	shell是大多数linux的默认shell，包含的功能几乎涵盖所有shell的功能</span></span>
<span class="line"><span>/sbin/nologin	#非交互不能登录系统</span></span>
<span class="line"><span>/bin/dash		#小巧，高效，功能比较少</span></span>
<span class="line"><span>/bin/tcsh		#是csh的增强版，完全兼容csh</span></span>
<span class="line"><span>/bin/csh		#具有c语言风格的一种shell，具有很多特性，但也有一些缺陷</span></span>
<span class="line"><span>[root@shell ~]#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、bash-shell基本特性" tabindex="-1"><a class="header-anchor" href="#_2、bash-shell基本特性"><span>2、bash shell基本特性</span></a></h3><p>知己知彼方可百战百胜，如何应用Bash shell，我们先看看他的特性，有助于我们快速应用。</p><p>2.1、 命令和文件自动补全</p><p>Tab只能补全命令和文件 （RHEL6/Centos6）</p><p>2.2、 常见的快捷键—提升操作熟练度</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>^c    终止前台运行的程序</span></span>
<span class="line"><span>^z    将前台运行的程序挂起到后台</span></span>
<span class="line"><span>^d    退出 等价exit</span></span>
<span class="line"><span>^l    清屏 </span></span>
<span class="line"><span>^a |home   光标移到命令行的最前端</span></span>
<span class="line"><span>^e |end   光标移到命令行的后端</span></span>
<span class="line"><span>^u    删除光标前所有字符</span></span>
<span class="line"><span>^k    删除光标后所有字符</span></span>
<span class="line"><span>^r   搜索历史命令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、shell脚本介绍" tabindex="-1"><a class="header-anchor" href="#_3、shell脚本介绍"><span>3、shell脚本介绍</span></a></h3><p>shell脚本是什么</p><p>简单来说就是将需要完成某个任务所执行的命令按照执行顺序保存到文本中，并给予执行权限。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>                                                 shell脚本精髓 学会60%</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>按照顺序执行。</p><p>它是解释型的，意味着不需要编译。</p><p>准确来说</p><p>若干命令 + 脚本的基本格式 + 脚本特定语法 + 思想= shell脚本</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>脚本命令演示</span></span>
<span class="line"><span>创建一个用户：harry     useradd harry</span></span>
<span class="line"><span>密码设置为:yunwei.98989 echo &quot;yunwei.98989&quot;|passwd --stdin harry</span></span>
<span class="line"><span>该用户创建文件夹/tmp/zutuanxue   mkdir /tmp/zutuanxue</span></span>
<span class="line"><span>该用户创建文件/tmp/zutuanxue/README  touch /tmp/zutuanxue/README</span></span>
<span class="line"><span>将“hello world“输入到/tmp/zutuanxue/README  echo &#39;hello world&#39; &gt; /tmp/zutuanxue/README</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实现代码 01_task.sh</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#DESC: this is a test script </span></span>
<span class="line"><span>#AUTHOR: Bai Shuming</span></span>
<span class="line"><span>#RELEASE: 1.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#main </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#创建用户harry</span></span>
<span class="line"><span>useradd harry</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#设置用户密码 yunwei.98989</span></span>
<span class="line"><span>echo &quot;yunwei.98989&quot;|passwd --stdin harry</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#使用harry创建文件夹，文件，输入文件中内容</span></span>
<span class="line"><span>su - harry -c &quot;mkdir /tmp/zutuanxue&quot;</span></span>
<span class="line"><span>su - harry -c &quot;touch /tmp/zutuanxue/README&quot;</span></span>
<span class="line"><span>su - harry -c &quot;echo &#39;hello world&#39; &gt; /tmp/zutuanxue/README&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么时候用到脚本？</p><p>重复化、复杂化的工作，通过把工作的命令写成脚本，以后仅仅需要执行脚本就能完成这些工作。</p><p>①自动化分析处理</p><p>②自动化备份</p><p>③自动化批量部署安装</p><p>④等等…</p><p>如何学习shell脚本？</p><p>尽可能记忆更多的命令</p><p>掌握脚本的标准的格式（指定魔法字节、使用标准的执行方式运行脚本）</p><p>必须熟悉掌握脚本的基本语法（重点)</p><p>学习脚本的秘诀：</p><p>多看（看懂）——&gt;多模仿（多练）——&gt;多思考</p><h3 id="_4、shell脚本语法" tabindex="-1"><a class="header-anchor" href="#_4、shell脚本语法"><span>4、shell脚本语法</span></a></h3><p>来吧，光说不练嘴把式，我们来看看如何书写一个脚本呢，写好一个脚本有哪些规范呢？</p><ul><li>shell脚本组成</li></ul><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/14/1600051087772.png" alt="shell程序组成.png" tabindex="0" loading="lazy"><figcaption>shell程序组成.png</figcaption></figure><ul><li>脚本命名 nginx_install.sh 脚本名称 脚本扩展名 .sh 名字不要太长 26个字节内</li><li>代码规范：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1、#!/bin/bash</span></span>
<span class="line"><span>//脚本第一行， #！魔法字符，指定脚本代码执行的程序。即它告诉系统这个脚本需要什么解释器来执行，也就是使用</span></span>
<span class="line"><span>哪一种Shell</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、#代表注释，#！特例 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、//以下内容是对脚本的基本信息的描述,大家可以根据实际情况尽可能的写详细一些，方便后续使用者</span></span>
<span class="line"><span># Name: 脚本名字</span></span>
<span class="line"><span># Desc:描述describe</span></span>
<span class="line"><span># Path:存放路径</span></span>
<span class="line"><span># Usage:用法</span></span>
<span class="line"><span># Update:更新时间</span></span>
<span class="line"><span># Author:作者</span></span>
<span class="line"><span># Release: 分发版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//下面就是脚本的具体内容</span></span>
<span class="line"><span>commands</span></span>
<span class="line"><span>...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>脚本执行方法： – 标准脚本执行方法（建议）：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue shell01]# cat 1.sh </span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#xxxx</span></span>
<span class="line"><span>#xxx</span></span>
<span class="line"><span>#xxx</span></span>
<span class="line"><span>hostname</span></span>
<span class="line"><span>date</span></span>
<span class="line"><span>[root@zutuanxue shell01]# chmod +x 1.sh </span></span>
<span class="line"><span>[root@zutuanxue shell01]# ll</span></span>
<span class="line"><span>total 4</span></span>
<span class="line"><span>-rwxr-xr-x 1 root root 42 Jul 22 14:40 1.sh</span></span>
<span class="line"><span>[root@zutuanxueshell01]# /shell/shell01/1.sh </span></span>
<span class="line"><span>zutuanxue</span></span>
<span class="line"><span>Sun Jul 22 14:41:00 CST 2018</span></span>
<span class="line"><span>[root@zutuanxue shell01]# ./1.sh </span></span>
<span class="line"><span>zutuanxue</span></span>
<span class="line"><span>Sun Jul 22 14:41:30 CST 2018</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>– 非标准的执行方法（不建议）：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue shell01]# bash 1.sh </span></span>
<span class="line"><span>zutuanxue</span></span>
<span class="line"><span>Sun Jul 22 14:42:51 CST 2018</span></span>
<span class="line"><span>[root@zutuanxue shell01]# sh 1.sh</span></span>
<span class="line"><span>zutuanxue</span></span>
<span class="line"><span>Sun Jul 22 14:43:01 CST 2018</span></span>
<span class="line"><span>[root@zutuanxue shell01]# </span></span>
<span class="line"><span>[root@zutuanxue shell01]# bash -x 1.sh</span></span>
<span class="line"><span>+ hostname</span></span>
<span class="line"><span>zutuanxue</span></span>
<span class="line"><span>+ date</span></span>
<span class="line"><span>Sun Jul 22 14:43:20 CST 2018</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-x:一般用于排错，查看脚本的执行过程</span></span>
<span class="line"><span>-n:用来查看脚本的语法是否有问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：如果脚本没有加可执行权限，不能使用标准的执行方法执行，bash 1.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其他：</span></span>
<span class="line"><span>[root@zutuanxueshell01]# source 2.sh</span></span>
<span class="line"><span>server</span></span>
<span class="line"><span>Thu Nov 22 15:45:50 CST 2018</span></span>
<span class="line"><span>[root@zutuanxue shell01]# . 2.sh</span></span>
<span class="line"><span>server</span></span>
<span class="line"><span>Thu Nov 22 15:46:07 CST 2018</span></span>
<span class="line"><span></span></span>
<span class="line"><span>source 和 . 表示读取文件，执行文件里的命令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>– 命令式脚本执行方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>定义命令路径变量  PATH</span></span>
<span class="line"><span>PATH=$PATH:脚本路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>备注：脚本必须给执行权限</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),p=[i];function d(t,c){return a(),n("div",null,p)}const u=s(l,[["render",d],["__file","编程语言与shell脚本.html.vue"]]),v=JSON.parse('{"path":"/note/shell/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E4%B8%8Eshell%E8%84%9A%E6%9C%AC.html","title":"03-编程语言与shell脚本","lang":"zh-CN","frontmatter":{"title":"03-编程语言与shell脚本","order":3,"icon":"lightbulb","description":"一、编程语言介绍 编程语言是指计算机能理解的语言，人类通过使用计算机语言可以给计算机批量下达任务，让其按照人类的思想去完成工作。最常见的语言有：汇编语言、C语言、java语言、php语言、Python语言、golang语言等等。 编程语言分类： 编译型语言 程序在执行之前需要一个专门的编译过程，把程序编译成为机器语言文件，运行时不需要重新翻译，直接使用...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/shell/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E4%B8%8Eshell%E8%84%9A%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"03-编程语言与shell脚本"}],["meta",{"property":"og:description","content":"一、编程语言介绍 编程语言是指计算机能理解的语言，人类通过使用计算机语言可以给计算机批量下达任务，让其按照人类的思想去完成工作。最常见的语言有：汇编语言、C语言、java语言、php语言、Python语言、golang语言等等。 编程语言分类： 编译型语言 程序在执行之前需要一个专门的编译过程，把程序编译成为机器语言文件，运行时不需要重新翻译，直接使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.zutuanxue.com:8000/static/media/images/2020/9/14/1600050867343.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-编程语言与shell脚本\\",\\"image\\":[\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/14/1600050867343.png\\",\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/14/1600050927043.png\\",\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/14/1600051087772.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"二、shell介绍","slug":"二、shell介绍","link":"#二、shell介绍","children":[{"level":3,"title":"1、shell介绍","slug":"_1、shell介绍","link":"#_1、shell介绍","children":[]},{"level":3,"title":"2、bash shell基本特性","slug":"_2、bash-shell基本特性","link":"#_2、bash-shell基本特性","children":[]},{"level":3,"title":"3、shell脚本介绍","slug":"_3、shell脚本介绍","link":"#_3、shell脚本介绍","children":[]},{"level":3,"title":"4、shell脚本语法","slug":"_4、shell脚本语法","link":"#_4、shell脚本语法","children":[]}]}],"git":{},"readingTime":{"minutes":5.44,"words":1633},"filePathRelative":"note/shell/编程语言与shell脚本.md","autoDesc":true}');export{u as comp,v as data};
