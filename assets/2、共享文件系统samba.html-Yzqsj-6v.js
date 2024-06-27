import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as i,d as a}from"./app-cGHsJGw-.js";const n={},t=a(`<p>samba是一种在linux环境中运行的免费软件，利用samba ， linux可以创建基于windows的计算机使用 共享。另外， samba还提供一些工具，允许Linux用户从windows计算机进入共享和传输文件。</p><p>实例1：搭建基于单一用户名访问的samba服务。 1、安装samba包</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# yum install samba -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、创建共享目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# mkdir -p /date/test1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3、创建用于访问共享服务的用户名</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# useradd -s /sbin/nologin test1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>4、将创建的用户名加入到samba用户名认证中并设置访问密码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# smbpasswd -a New SMB password:</span></span>
<span class="line"><span> New SMB password: //第一次键入密码</span></span>
<span class="line"><span> Retype new SMB password: //第二次键入密码</span></span>
<span class="line"><span> Added user test1.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、设置共享目录赋予用户的相关权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@samba-server ~]# chown -R test1.users /date/test1/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>6、备份samba主配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@samba-server ~]# cp /etc/samba/smb.conf /etc/samba/smb.conf.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>7、编辑samba主配置文件，清除原有内容，添加如下内容</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# vi /etc/samba/smb.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[globall] //表示全局配置</span></span>
<span class="line"><span>workgroup=mysamba netbios=mysamba //在windows客户端下显示的工作组</span></span>
<span class="line"><span>server string=this   //在Windows客户端下显示的计算机名</span></span>
<span class="line"><span>is my samba server //自定义描述</span></span>
<span class="line"><span>security=user //指定验证和登录方式，share表示不需要用户名密码，user表示使用用户名密码</span></span>
<span class="line"><span>[test1] //表示windows客户端下显示的共享目录名称 </span></span>
<span class="line"><span>path=/date/test1 //指定共享目录</span></span>
<span class="line"><span>writeable=yes //指定共享目录是否可写</span></span>
<span class="line"><span>browseable=yes //指定共享目录是否可浏览</span></span>
<span class="line"><span>create mode=0777 //指定用户在共享目录中创建文件权限</span></span>
<span class="line"><span>directory mode=0777 //指定用户在共享目录中创建文件夹权限</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、关闭本地防火墙等配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# systemctl stop firewalld &amp;&amp; iptables -F &amp;&amp; setenforce 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>9、重启samba服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# systemctl restart smb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>10、winsows 系统下测试，在运行窗口输入指令： \\&lt;192.168.5.7&gt; ，在弹出的窗口输入用户名密码即可 达到下面效果。</p><p>11、 Linux系统下测试，安装支持共享服务的客户端包</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-client ~]# yum install cifs-utils -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>12、创建本地挂载目录，便于将共享目录挂载到本地</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-client ~]# mkdir -p /date/test1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>13、创建用户名密码认证文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-client ~]# vi auht.smb</span></span>
<span class="line"><span>username=test1 //写入用户名</span></span>
<span class="line"><span>password=0000 //写入密码</span></span>
<span class="line"><span>domain=mysamba //写入域</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>14、修改认证文件权限仅root用户可以管理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-client ~]# chown 600 auth.smb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>15、将挂载信息写入到永久挂载文件fstab中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-client ~]# echo &quot;//192.168.5.7/test1 /date/test1 cifs entials=/root/auth.smb 0 0&quot; &gt;&gt; /etc/fstab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>16、挂载</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-client ~]# mount -a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>17、查看挂载情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-client ~]# df -Th</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>18、在本地目录中创建一个测试文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-client ~]# touch /date/test1/ceshi.text</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>19、返回到服务端下使用命令查看共享目录下文件情况</p>`,37),l=[t];function d(r,h){return i(),e("div",null,l)}const o=s(n,[["render",d],["__file","2、共享文件系统samba.html.vue"]]),b=JSON.parse('{"path":"/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/2%E3%80%81%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9Fsamba.html","title":"02-smb系统","lang":"zh-CN","frontmatter":{"title":"02-smb系统","order":2,"icon":"lightbulb","description":"samba是一种在linux环境中运行的免费软件，利用samba ， linux可以创建基于windows的计算机使用 共享。另外， samba还提供一些工具，允许Linux用户从windows计算机进入共享和传输文件。 实例1：搭建基于单一用户名访问的samba服务。 1、安装samba包 2、创建共享目录 3、创建用于访问共享服务的用户名 4、将创...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/2%E3%80%81%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9Fsamba.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"02-smb系统"}],["meta",{"property":"og:description","content":"samba是一种在linux环境中运行的免费软件，利用samba ， linux可以创建基于windows的计算机使用 共享。另外， samba还提供一些工具，允许Linux用户从windows计算机进入共享和传输文件。 实例1：搭建基于单一用户名访问的samba服务。 1、安装samba包 2、创建共享目录 3、创建用于访问共享服务的用户名 4、将创..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-smb系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.34,"words":703},"filePathRelative":"note/centos7/8、部署文件共享服务/2、共享文件系统samba.md","autoDesc":true}');export{o as comp,b as data};
