import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as a}from"./app-fmcy30Ms.js";const t="/assets/1695614354.952806-CI4vGMp7.jpeg",n="/assets/1695614354.965985-BnyDD0iB.jpeg",d="/assets/1695614354.9833405-Ck4yT7I8.jpeg",r="/assets/1695614354.99601-Cdge188j.jpeg",l="/assets/1695614355.0160434-CW5ynk9a.jpeg",o="/assets/1695614355.0377195-Bu3RuQH5.png",p="/assets/1695614355.0557892-DvJ7Ep-0.jpeg",h="/assets/1695614355.0687556-B3Rdp7nF.jpeg",c="/assets/1695614355.0921047-pCoqyAmh.jpeg",u="/assets/1695614355.1300519-D8z-6aVb.jpeg",g={},m=a('<blockquote><p>设计 Linux 系统的初衷之一就是为了满足多个用户同时工作的需求，因此 Linux 系统必须具备很好 的安全性。 安装centos 7操作系统时，特别要求设置 root 管理员密码，这个 root 管理员就是存在于所 有类 UNIX 系统中的超级用户。它拥有最高的系统所有权，能够管理系统的各项功能，如添加/删除用 户、启动/关闭服务进程、开启/禁用硬件设备等。虽然以 root 管理员的身份工作时不会受到系统的限 制，但俗语讲“能力越大，责任就越大” ，因此一旦使用这个高能的 root 管理员权限执行了错误的命令可 能会直接毁掉整个系统。使用与否，确实需要好好权衡一下。</p></blockquote><p>另外，很多图书或培训机构的老师会讲到， Linux 系统中的管理员就是 root。这其实是错误的，Linux 系统的管理员之所以是 root，并不是因为它的名字叫 root，而是因为该用户的身份号码即 UID ( User IDentiﬁcation）的数值为 0。在 Linux 系统中， UID 就相当于我们的身份证号码一样具有唯一 性，因此可通过用户的 UID 值来判断用户身份。在 RHEL 7 系统中，用户身份有下面这些。</p><ul><li>管理员 UID 为 0：系统的管理员用户。</li><li>系统用户 UID 为 1～999： Linux 系统为了避免因某个服务程序出现漏洞而被黑客提权至整台服务 器，默认服务程序会有独立的系统用户负责运行，进而有效控制被破坏范围。</li><li>普通用户 UID 从 1000 开始：是由管理员创建的用于日常工作的用户。需要注意的是， UID 是不能 冲突的，而且管理员创建的普通用户的 UID 默认是从 1000开始的（即使前面有闲置的号码）。 为了方便管理属于同一组的用户， Linux 系统中还引入了用户组的概念。通过使用用户组号码( GID ， Group IDentiﬁcation），我们可以把多个用户加入到同一个组中，从而方便为组中的用户统一 规划权限或指定任务。</li></ul><h3 id="_1、命令-useradd-作用-创建新的用户-格式为-useradd【选项】用户名" tabindex="-1"><a class="header-anchor" href="#_1、命令-useradd-作用-创建新的用户-格式为-useradd【选项】用户名"><span>1、命令： useradd，作用：创建新的用户，格式为： useradd【选项】用户名</span></a></h3><p>说明：使用该命令创建用户账户时，默认的用户家目录会被存放在/home 目录中，默认的 Shell 解释器 为/bin/bash，而且默认会创建一个与该用户同名的基本用户组。</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实例1：创建普通用户admin</p><p>[root@linux ~]# useradd admin</p><p>说明：默认情况下不加任何参数，其新建等候的用户默认家目录都在/home目录下，默认解释器为</p><p>bash：我们通过cat /etc/passwd命令来查看一下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# cat /etc/passwd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>本例中：我们发现用户admin，所在家目录为： /home/admin，终端解释为： bash。</p><p>实例2：创建普通用户ceshi，制定其家目录为： /home/ceshi，用户的UID为： 8888，解释器为： shell，需要注意的是一旦用户设置为了shell解释器，则表示该用户登录到系统中。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# useradd -d /home/ceshi -u 8888 -s /sbin/nologin ceshi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>说明：我依旧使用命令： cat /etc/passwd命令来查看一下:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# cat /etc/passwd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、命令-groupadd-作用-创建用户组-格式为-groupadd【选项】群组名。" tabindex="-1"><a class="header-anchor" href="#_2、命令-groupadd-作用-创建用户组-格式为-groupadd【选项】群组名。"><span>2、命令： groupadd，作用：创建用户组，格式为： groupadd【选项】群组名。</span></a></h3><p>实例：创建一个名为anony的组。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# groupadd anony</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>说明：我们可以使用命令： cat /etc/group命令查看一下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# cat /etc/group</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3、命令-usermod-作用-用于修改用户的属性-格式为-usermod【选项】【用户名】" tabindex="-1"><a class="header-anchor" href="#_3、命令-usermod-作用-用于修改用户的属性-格式为-usermod【选项】【用户名】"><span>3、命令： usermod，作用：用于修改用户的属性，格式为： usermod【选项】【用户名】</span></a></h3><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实例：将我们创建的admin用户加入到anony组中：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# usermod -G anony admin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>说明：我们可以通过查看用户id等信息查看是否已经加入到了anony组中：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# id admin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4、命令-passwd-作用-修改用户密码、过期时间、认证信息等-格式为-passwd【选项】【用户-名】" tabindex="-1"><a class="header-anchor" href="#_4、命令-passwd-作用-修改用户密码、过期时间、认证信息等-格式为-passwd【选项】【用户-名】"><span>4、命令： passwd，作用：修改用户密码、过期时间、认证信息等，格式为： passwd【选项】【用户 名】</span></a></h3><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实例1：为用户admin创建密码为admin。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# passwd admin</span></span>
<span class="line"><span> Changing password for user admin.</span></span>
<span class="line"><span> New password: //第一次修改密码</span></span>
<span class="line"><span> BAD PASSWORD: The password is shorter than 8 characters</span></span>
<span class="line"><span> Retype new password: //第二次修改密码</span></span>
<span class="line"><span> passwd: all authentication tokens updated successfully. //提示成功</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例2：锁定admin用户，禁止其登录。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# passwd -l admin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5、命令-userdel-作用-删除用户-格式为-userdel【选项】【用户名】" tabindex="-1"><a class="header-anchor" href="#_5、命令-userdel-作用-删除用户-格式为-userdel【选项】【用户名】"><span>5、命令： userdel，作用：删除用户，格式为： userdel【选项】【用户名】</span></a></h3><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实例：我们同时删除用户及其用户家目录：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# userdel -r admin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>说明：删除完成之后可通过查看/etc目录下的passwd文件来查看是否删除成功：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# cat /etc/passwd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',45),b=[m];function k(f,v){return s(),i("div",null,b)}const x=e(g,[["render",k],["__file","1、用户身份与能力.html.vue"]]),B=JSON.parse('{"path":"/note/centos7/5%E3%80%81%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E4%B8%8E%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90/1%E3%80%81%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E4%B8%8E%E8%83%BD%E5%8A%9B.html","title":"01-用户身份与能力","lang":"zh-CN","frontmatter":{"title":"01-用户身份与能力","order":1,"icon":"lightbulb","description":"设计 Linux 系统的初衷之一就是为了满足多个用户同时工作的需求，因此 Linux 系统必须具备很好 的安全性。 安装centos 7操作系统时，特别要求设置 root 管理员密码，这个 root 管理员就是存在于所 有类 UNIX 系统中的超级用户。它拥有最高的系统所有权，能够管理系统的各项功能，如添加/删除用 户、启动/关闭服务进程、开启/禁用硬...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/5%E3%80%81%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E4%B8%8E%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90/1%E3%80%81%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E4%B8%8E%E8%83%BD%E5%8A%9B.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"01-用户身份与能力"}],["meta",{"property":"og:description","content":"设计 Linux 系统的初衷之一就是为了满足多个用户同时工作的需求，因此 Linux 系统必须具备很好 的安全性。 安装centos 7操作系统时，特别要求设置 root 管理员密码，这个 root 管理员就是存在于所 有类 UNIX 系统中的超级用户。它拥有最高的系统所有权，能够管理系统的各项功能，如添加/删除用 户、启动/关闭服务进程、开启/禁用硬..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-用户身份与能力\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"1、命令： useradd，作用：创建新的用户，格式为： useradd【选项】用户名","slug":"_1、命令-useradd-作用-创建新的用户-格式为-useradd【选项】用户名","link":"#_1、命令-useradd-作用-创建新的用户-格式为-useradd【选项】用户名","children":[]},{"level":3,"title":"2、命令： groupadd，作用：创建用户组，格式为： groupadd【选项】群组名。","slug":"_2、命令-groupadd-作用-创建用户组-格式为-groupadd【选项】群组名。","link":"#_2、命令-groupadd-作用-创建用户组-格式为-groupadd【选项】群组名。","children":[]},{"level":3,"title":"3、命令： usermod，作用：用于修改用户的属性，格式为： usermod【选项】【用户名】","slug":"_3、命令-usermod-作用-用于修改用户的属性-格式为-usermod【选项】【用户名】","link":"#_3、命令-usermod-作用-用于修改用户的属性-格式为-usermod【选项】【用户名】","children":[]},{"level":3,"title":"4、命令： passwd，作用：修改用户密码、过期时间、认证信息等，格式为： passwd【选项】【用户 名】","slug":"_4、命令-passwd-作用-修改用户密码、过期时间、认证信息等-格式为-passwd【选项】【用户-名】","link":"#_4、命令-passwd-作用-修改用户密码、过期时间、认证信息等-格式为-passwd【选项】【用户-名】","children":[]},{"level":3,"title":"5、命令： userdel，作用：删除用户，格式为： userdel【选项】【用户名】","slug":"_5、命令-userdel-作用-删除用户-格式为-userdel【选项】【用户名】","link":"#_5、命令-userdel-作用-删除用户-格式为-userdel【选项】【用户名】","children":[]}],"git":{},"readingTime":{"minutes":3.96,"words":1189},"filePathRelative":"note/centos7/5、用户身份与文件权限/1、用户身份与能力.md","autoDesc":true}');export{x as comp,B as data};
