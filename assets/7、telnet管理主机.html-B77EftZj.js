import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as i,d as s}from"./app-fmcy30Ms.js";const n="/assets/2023-09-25_100548_3996680.7196650340994493-CwYP-Nkf.png",a="/assets/2023-09-25_100551_5449550.31968616529231475-CyrUXle0.png",l="/assets/2023-09-25_100600_6997480.4381274582323368-CqkkH_AB.png",r="/assets/2023-09-25_100726_9291580.5309298260912817-DHxrZ4DP.png",d={},o=s(`<p><strong>Telnet协议是TCP/IP协议族中的一员，是Internet远程登录服务的标准协议和主要方式。它为用户 提供了在本地计算机上完成远程主机工作的能力。在终端使用者的电脑上使用telnet程序，用它连接到 服务器。终端使用者可以在telnet程序中输入命令，这些命令会在服务器上运行，就像直接在服务器的 控制台上输入一样。可以在本地就能控制服务器。要开始一个telnet会话，必须输入用户名和密码来登 录服务器。Telnet是常用的远程控制Web服务器的方法。 实例：配置telnet管理主机 说明：配置之前请先安装好yum源</strong></p><h3 id="_1、安装telnet服务程序包和xinetd服务程序包。" tabindex="-1"><a class="header-anchor" href="#_1、安装telnet服务程序包和xinetd服务程序包。"><span>1、安装telnet服务程序包和xinetd服务程序包。</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-126 ~]# yum install telnet-server.x86_64 -y</span></span>
<span class="line"><span>[root@host-172-16-0-126 ~]# yum install telnet.x86_64 -y</span></span>
<span class="line"><span>[root@host-172-16-0-126 ~]# yum install xinetd.x86_64 -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、设置服务开机自启" tabindex="-1"><a class="header-anchor" href="#_2、设置服务开机自启"><span>2、设置服务开机自启</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-126 ~]# systemctl enable xinetd.service</span></span>
<span class="line"><span>[root@host-172-16-0-126 ~]# systemctl enable telnet.socket</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、放行root用户登录-把securetty文件改名使其失效" tabindex="-1"><a class="header-anchor" href="#_3、放行root用户登录-把securetty文件改名使其失效"><span>3、放行root用户登录（把securetty文件改名使其失效）：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-126 ~]# mv /etc/securetty /etc/securetty.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>说明：或者编辑这个文件在尾行添加如下参数，保存退出：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>pts/0</span></span>
<span class="line"><span>pts/1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、启动这两个服务" tabindex="-1"><a class="header-anchor" href="#_4、启动这两个服务"><span>4、启动这两个服务</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-126 ~]# systemctl start telnet.socket</span></span>
<span class="line"><span>[root@host-172-16-0-126 ~]# systemctl start xinetd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、在windows系统下cmd环境中运行如下命令" tabindex="-1"><a class="header-anchor" href="#_5、在windows系统下cmd环境中运行如下命令"><span>5、在windows系统下CMD环境中运行如下命令：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>C:\\Users\\ZXW&gt;telnet 192.168.200.58 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>说明：需要注意的是大多数windows系统默认情况下没有打开telnet服务，我们在控制面板中找到---程 序---启用或关闭windows功能--telnet客户端（把前面勾选上）保存即可。</strong></p>',18),c=[o];function h(p,g){return i(),t("div",null,c)}const b=e(d,[["render",h],["__file","7、telnet管理主机.html.vue"]]),k=JSON.parse('{"path":"/note/centos7/1%E3%80%81%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83/7%E3%80%81telnet%E7%AE%A1%E7%90%86%E4%B8%BB%E6%9C%BA.html","title":"07-systemd初始化进程","lang":"zh-CN","frontmatter":{"title":"07-systemd初始化进程","order":7,"icon":"lightbulb","description":"Telnet协议是TCP/IP协议族中的一员，是Internet远程登录服务的标准协议和主要方式。它为用户 提供了在本地计算机上完成远程主机工作的能力。在终端使用者的电脑上使用telnet程序，用它连接到 服务器。终端使用者可以在telnet程序中输入命令，这些命令会在服务器上运行，就像直接在服务器的 控制台上输入一样。可以在本地就能控制服务器。要开始...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/1%E3%80%81%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83/7%E3%80%81telnet%E7%AE%A1%E7%90%86%E4%B8%BB%E6%9C%BA.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"07-systemd初始化进程"}],["meta",{"property":"og:description","content":"Telnet协议是TCP/IP协议族中的一员，是Internet远程登录服务的标准协议和主要方式。它为用户 提供了在本地计算机上完成远程主机工作的能力。在终端使用者的电脑上使用telnet程序，用它连接到 服务器。终端使用者可以在telnet程序中输入命令，这些命令会在服务器上运行，就像直接在服务器的 控制台上输入一样。可以在本地就能控制服务器。要开始..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07-systemd初始化进程\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"1、安装telnet服务程序包和xinetd服务程序包。","slug":"_1、安装telnet服务程序包和xinetd服务程序包。","link":"#_1、安装telnet服务程序包和xinetd服务程序包。","children":[]},{"level":3,"title":"2、设置服务开机自启","slug":"_2、设置服务开机自启","link":"#_2、设置服务开机自启","children":[]},{"level":3,"title":"3、放行root用户登录（把securetty文件改名使其失效）：","slug":"_3、放行root用户登录-把securetty文件改名使其失效","link":"#_3、放行root用户登录-把securetty文件改名使其失效","children":[]},{"level":3,"title":"4、启动这两个服务","slug":"_4、启动这两个服务","link":"#_4、启动这两个服务","children":[]},{"level":3,"title":"5、在windows系统下CMD环境中运行如下命令：","slug":"_5、在windows系统下cmd环境中运行如下命令","link":"#_5、在windows系统下cmd环境中运行如下命令","children":[]}],"git":{},"readingTime":{"minutes":1.49,"words":447},"filePathRelative":"note/centos7/1、安装环境/7、telnet管理主机.md","autoDesc":true}');export{b as comp,k as data};
