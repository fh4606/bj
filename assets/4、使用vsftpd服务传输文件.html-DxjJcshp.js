import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as t}from"./app-DZWWIkr0.js";const a="/bj/assets/1695710152.6935089-7tL9zb2S.jpeg",n="/bj/assets/1695710152.7032177-gBhQ4l3h.jpeg",l="/bj/assets/1695710152.716935-bT0lKyDg.jpeg",r="/bj/assets/1695710152.7335362-G8u3f6Ns.jpeg",p="/bj/assets/1695710152.7419777-Cum_tAex.png",d={},o=t('<p>一般来讲，人们将计算机联网的首要目的就是获取资料，而文件传输是一种非常重要的获取资料的 方式。今天的互联网是由几千万台个人计算机、工作站、服务器、小型机、大型机、巨型机等具有不同 型号、不同架构的物理设备共同组成的，而且即便是个人计算机，也可能会装有 Windows、 Linux、</p><p>UNIX、 Mac 等不同的操作系统。为了能够在如此复杂多样的设备之间解决问题解决文件传输问题，文 件传输协议（FTP）应运而生。FTP 是一种在互联网中进行文件传输的协议，基于客户端/服务器模式， 默认使用 20、21号端口，其中端口 20 （数据端口）用于进行数据传输，端口 21 （命令端口）用于接 受客户端发出的相关 FTP 命令与参数。 FTP 服务器普遍部署于内网中，具有容易搭建、方便管理的特 点。而且有些 FTP 客户端工具还可以支持文件的多点下载以及断点续传技术，因此 FTP 服务得到了广 大用户的青睐。 FTP 协议的传输拓扑如图 11-1 所示。</p><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>FTP 服务器是按照 FTP 协议在互联网上提供文件存储和访问服务的主机， FTP 客户端则是向服务 器发送连接请求，以建立数据传输链路的主机。 FTP 协议有下面两种工作模式。</p><ul><li>主动模式：FTP 服务器主动向客户端发起连接请求。</li><li>被动模式：FTP 服务器等待客户端发起连接请求（FTP 的默认工作模式）。</li></ul><p>vsftpd 服务程序常用的参数以及作用</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>vsftpd 作为更加安全的文件传输的服务程序，允许用户以三种认证模式登录到 FTP 服务器上。</p><ul><li>匿名开放模式：是一种最不安全的认证模式，任何人都可以无需密码验证而直接登录到 FTP 服务器。</li><li>本地用户模式：是通过 Linux 系统本地的账户密码信息进行认证的模式，相较于匿名开放模式更安 全，而且配置起来也很简单。但是如果被黑客破解了账户的信息，就可以畅通无阻地登录 FTP 服务器， 从而完全控制整台服务器。</li><li>虚拟用户模式：是这三种模式中最安全的一种认证模式，它需要为 FTP 服务单独建立用户数据库文件，虚拟出用来进行口令验证的账户信息，而这些账户信息在服务器系统中实际上是不存在的，仅供 FTP 服务程序进行认证使用。这样，即使</li></ul><p>黑客破解了账户信息也无法登录服务器，从而有效降低了破坏范围和影响。</p><p>实例1：搭建匿名ftp服务</p><p>1、检查本地是否安装ftp服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@ftp-server ~]# rpm -qa | grep vsftpd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2、安装vsftpd服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@ftp-server ~]# yum install vsftpd -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3、创建ftp路径</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@ftp-server ~]# mkdir -p /ftp/pub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>4、赋予ftp目录属主权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@ftp-server ~]# chown -Rf ftp /ftp/pub/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>5、配置ftp目录文件777权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@ftp-server ~]# chmod -R 777 /ftp/pub/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>6、编辑主配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@ftp-server ~]# vi /etc/vsftpd/vsftpd.conf</span></span>
<span class="line"><span>12行：anonymous\\_enable=YES //允许匿名访问模式</span></span>
<span class="line"><span>29行：anon\\_upload\\_enable=YES //允许匿名用户上传文件</span></span>
<span class="line"><span>33行：anon\\_mkdir\\_write\\_enable=YES //允许匿名用户创建目录</span></span>
<span class="line"><span>尾行追加参数：</span></span>
<span class="line"><span>anon\\_other\\_write\\_enable=YES  //允许匿名用户修改目录名称或删除目录</span></span>
<span class="line"><span>anon\\_world\\_readable\\_only=NO //允许匿名用户下载</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、重启vsftpd服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@ftp-server ~]# systemctl restart vsftpd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>8、验证</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明：配置前请关闭防火墙，清空防火墙以及关闭安全子系统等配置。并将windows 客户端intelnet选 项中高级选项中将使用被动ftp勾取消掉。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',30),c=[o];function h(g,u){return s(),i("div",null,c)}const m=e(d,[["render",h],["__file","4、使用vsftpd服务传输文件.html.vue"]]),v=JSON.parse('{"path":"/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/4%E3%80%81%E4%BD%BF%E7%94%A8vsftpd%E6%9C%8D%E5%8A%A1%E4%BC%A0%E8%BE%93%E6%96%87%E4%BB%B6.html","title":"04-认识ftp","lang":"zh-CN","frontmatter":{"title":"04-认识ftp","order":4,"icon":"lightbulb","description":"一般来讲，人们将计算机联网的首要目的就是获取资料，而文件传输是一种非常重要的获取资料的 方式。今天的互联网是由几千万台个人计算机、工作站、服务器、小型机、大型机、巨型机等具有不同 型号、不同架构的物理设备共同组成的，而且即便是个人计算机，也可能会装有 Windows、 Linux、 UNIX、 Mac 等不同的操作系统。为了能够在如此复杂多样的设备之间...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/4%E3%80%81%E4%BD%BF%E7%94%A8vsftpd%E6%9C%8D%E5%8A%A1%E4%BC%A0%E8%BE%93%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"04-认识ftp"}],["meta",{"property":"og:description","content":"一般来讲，人们将计算机联网的首要目的就是获取资料，而文件传输是一种非常重要的获取资料的 方式。今天的互联网是由几千万台个人计算机、工作站、服务器、小型机、大型机、巨型机等具有不同 型号、不同架构的物理设备共同组成的，而且即便是个人计算机，也可能会装有 Windows、 Linux、 UNIX、 Mac 等不同的操作系统。为了能够在如此复杂多样的设备之间..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04-认识ftp\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":3.4,"words":1019},"filePathRelative":"note/centos7/8、部署文件共享服务/4、使用vsftpd服务传输文件.md","autoDesc":true}');export{m as comp,v as data};
