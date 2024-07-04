import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as t}from"./app-fmcy30Ms.js";const a="/assets/2023-09-26_141803_6409750.16215303081983112-BfGJDbmu.png",n="/assets/1695709023.2265575-V56rUSsJ.png",r={},l=t('<p>nfs是一种分布式文件系统，允许网络中不同操作系统的计算机间共享文件，其通信协议定基于 TCP/IP协议层，可以将远程计算机磁盘挂载到本地，读写文件跟本地磁盘一样。</p><p>在配置之前先了解nfs主要文件和进程。 （1） nfs有的发行版名字叫做nfsserver，主要用来控制nfs服务的启动和停止，安装完成后在/etc/init.d 目录下。 （2） rpc.nfsd是基本的nfs守护进程，主要功能是控制客户端是否可以登录服务器。 （3） rpc.mountd是rpc安装守护进程，主要功能是管理nfs的文件系统。通过配置文件共享指定的目 录，同时根据配置文件做一些权限验证。 （4） rpcbind是一个管理rpc连接的程序， rpcbind服务对nfs是必须的，因为是nfs的动态端口的配置的 守护进程，如果rpcbind不启动， nfs则无法启动。 （5）exportfs如果修改了/etc/exports文件后不需要重新激活nfs，只要重新扫描一遍/etc/exports文 件，并且重新将设定加载即可。 （6）showmount显示指定nfs服务器连接客户端的信息，常用参数如表5.2所示：</p><p><img src="'+a+`" alt="" loading="lazy"> 3、认识配置文件/etc/exports 要配置nfs服务，首先就是编辑/etc/exports文件。在该文件中，每一行则代表了一个共享目录，并且描 述了该共享目录如何被共享，首次编辑打开此文件是空白的，需要手动添加参数及内容。其格式如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1 #《共享目录》   【客户端1 选项】 【客户端2 选项】</span></span>
<span class="line"><span>2 /opt/ceshi      *（rw,all_squash,sync）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>共享目录：是指nfs系通中需要给共享客户使用的目录</li><li>客户端：是指网络中可以访问到这个nfs共享目录的计算机</li></ul><blockquote><p>客户端的常用指定方式： （1）指定IP地址： &lt;192.168.1.1&gt; （2）指定子网中的所有主机： &lt;192.168.1.0&gt;/24 （3）指定域名中的主机： <a href="http://www.ceshi.com/" target="_blank" rel="noopener noreferrer">www.ceshi.com</a> （4）指定所有主机： *</p></blockquote><p>NFS常用参数选项说明 <img src="`+n+`" alt="" loading="lazy"></p><p>实例：创建NFS文件系统 准备： centos7.0或7.0以上系统两个。 第一台系统中创建nfs服务端。</p><p>1、首先检查系统中是否安装nfs系统。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# rpm -qa | grep -i nfs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们发现系统中并没有安装nfs系统。</p><p>2、在yum源可用的情况下，使用yum工具安装nfs、 rpcbind包。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# yum install -y nfs-utils rpcbind</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3、创建共享目录，本例以： /opt/ceshi目录为例</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# mkdir -p /opt/ceshi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>4、编辑nfs主配置文件，并添加内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@host-172-16-0-5 ~]# vi /etc/exports</span></span>
<span class="line"><span>/opt/ceshi *(rw,root\\_squash,sync) //打开后添加此内容</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、重启nfs服务和rpcbind服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# systemctl restart nfs-server &amp;&amp; systemctl restart rpcbind</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>6、检查服务是否启动</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# rpcinfo -p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>7、本机测试服务情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# showmount -e 127.0.0.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>第二台系统中创建nfs客户端。</p><p>1、检查系统中有没有安装nfs服务，没有安装通过yum安装。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-6 ~]# yum install nfs-utils -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、创建一个目录用来挂在nfs服务端</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-6 ~]# mkdir -p /opt/ceshi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3、将nfs服务端挂载到本地/opt/ceshi目录下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-6 ~]# mount -t nfs -o rw 172.16.0.5:/opt/ceshi/ /opt/ceshi/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>4、验证查看一下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-6 ~]# df -h</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>5、配置永久挂载</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@host-172-16-0-6 ~]# echo &quot;172.16.0.5:/opt/ceshi /opt/ceshi nfs defaults 0 0&quot; &gt;&gt; /etc/fstab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>6、查看永久挂载配置情况 说明：如果客户端挂载不了情检查防火墙，配置nfs系统前请关闭防火墙，或者放行nfs端口。</p>`,35),d=[l];function h(o,p){return s(),i("div",null,d)}const b=e(r,[["render",h],["__file","1、网络文件系统NFS.html.vue"]]),u=JSON.parse('{"path":"/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/1%E3%80%81%E7%BD%91%E7%BB%9C%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9FNFS.html","title":"01-nfs认识","lang":"zh-CN","frontmatter":{"title":"01-nfs认识","order":1,"icon":"lightbulb","description":"nfs是一种分布式文件系统，允许网络中不同操作系统的计算机间共享文件，其通信协议定基于 TCP/IP协议层，可以将远程计算机磁盘挂载到本地，读写文件跟本地磁盘一样。 在配置之前先了解nfs主要文件和进程。 （1） nfs有的发行版名字叫做nfsserver，主要用来控制nfs服务的启动和停止，安装完成后在/etc/init.d 目录下。 （2） rpc...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/1%E3%80%81%E7%BD%91%E7%BB%9C%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9FNFS.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"01-nfs认识"}],["meta",{"property":"og:description","content":"nfs是一种分布式文件系统，允许网络中不同操作系统的计算机间共享文件，其通信协议定基于 TCP/IP协议层，可以将远程计算机磁盘挂载到本地，读写文件跟本地磁盘一样。 在配置之前先了解nfs主要文件和进程。 （1） nfs有的发行版名字叫做nfsserver，主要用来控制nfs服务的启动和停止，安装完成后在/etc/init.d 目录下。 （2） rpc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-nfs认识\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":3.13,"words":940},"filePathRelative":"note/centos7/8、部署文件共享服务/1、网络文件系统NFS.md","autoDesc":true}');export{b as comp,u as data};
