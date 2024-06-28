import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as i,d as a}from"./app-CAdWGPj0.js";const n="/vuepress/assets/1695710626.8971314-C-YIuvYA.jpeg",t="/vuepress/assets/1695710626.911196-BUfyt1n2.jpeg",l="/vuepress/assets/1695710626.9257088-tIHr4Egb.jpeg",d="/vuepress/assets/1695710626.9410443-DD_26Zmy.png",p="/vuepress/assets/1695710626.9542704-CbVU0Rbf.jpeg",r={},c=a(`<p>1、安装vsftpd服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# yum install vsftpd -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、创建ftp目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# mkdir -p /ftp/pub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3、修正ftp目录权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# chmod -R 777 /ftp/pub/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>4、创建文本格式的用户名密码列表</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# vi /etc/vsftpd/vusers.list</span></span>
<span class="line"><span>1701 //用户名</span></span>
<span class="line"><span>0000 //密码</span></span>
<span class="line"><span>1702 //用户名</span></span>
<span class="line"><span>0000 //密码</span></span>
<span class="line"><span>//奇数行代表用户名 //偶数行代表密码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>4、在/etc/vsftpd/目录创建Berkeley DB格式的数据库文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# cd /etc/vsftpd/</span></span>
<span class="line"><span>[root@host-172-16-0-5 vsftpd]# db\\_load -T -t hash -f vusers.list vusers.db</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、为保证Berkeley DB格式数据文件数据安全赋予相关权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 vsftpd]# chmod 600 /etc/vsftpd/vusers.*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>6、添加虚拟用户账户映射及指定虚拟用户家目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 vsftpd]# useradd -d /ftp/pub/ -s /bin/bash test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>7、为虚拟用户建立PAM认证文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 vsftpd]# vi /etc/pam.d/vsftpd.vu</span></span>
<span class="line"><span>auth required pam\\_userdb.so db=/etc/vsftpd/vusers</span></span>
<span class="line"><span>account required pam\\_userdb.so db=/etc/vsftpd/vusers</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>8、为不同的虚拟用户建立独立的配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 vsftpd]# mkdir /etc/vsftpd/vusers\\_dir</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>9、为用户1701创建主配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 vsftpd]# vi /etc/vsftpd/vusers\\_dir/1701</span></span>
<span class="line"><span>anon\\_upload\\_enable=YES</span></span>
<span class="line"><span>anon\\_mkdir\\_write\\_enable=YES</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>10、给用户1702复制一份主配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 vsftpd]# cp etc/vsftpd/vusers\\_dir/1701/        etc/vsftpd/vusers\\_dir/1702</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>11、编辑主配置文件，清空原有内容，添加如下内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 vsftpd]# vi /etc/vsftpd/vsftpd.conf</span></span>
<span class="line"><span>anonymous\\_enable=NO</span></span>
<span class="line"><span>local\\_enable=YES</span></span>
<span class="line"><span>write\\_enable=YES</span></span>
<span class="line"><span>local\\_umask=022</span></span>
<span class="line"><span>dirmessage\\_enable=YES</span></span>
<span class="line"><span>xferlog\\_enable=YES</span></span>
<span class="line"><span>connect\\_from\\_port\\_20=YES</span></span>
<span class="line"><span>xferlog\\_std\\_format=YES</span></span>
<span class="line"><span>listen=YES</span></span>
<span class="line"><span>listen\\_ipv6=NO</span></span>
<span class="line"><span>pam\\_service\\_name=vsftpd.vu</span></span>
<span class="line"><span>userlist\\_enable=YES</span></span>
<span class="line"><span>tcp\\_wrappers=YES</span></span>
<span class="line"><span>guest\\_username=test</span></span>
<span class="line"><span>guest\\_enable=YES</span></span>
<span class="line"><span>allow\\_writeable\\_chroot=YES</span></span>
<span class="line"><span>anon\\_world\\_readable\\_only=NO</span></span>
<span class="line"><span>anon\\_other\\_write\\_enable=YES</span></span>
<span class="line"><span>user\\_config\\_dir=/etc/vsftpd/vusers\\_dir</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>12、重启vsftpd服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 vsftpd]# systemctl restart vsftpd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>13、windows客户端下验证</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',32),o=[c];function h(v,u){return i(),e("div",null,o)}const m=s(r,[["render",h],["__file","6、利用vsftpd搭建基于虚拟用户访问的ftp服务.html.vue"]]),f=JSON.parse('{"path":"/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/6%E3%80%81%E5%88%A9%E7%94%A8vsftpd%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8E%E8%99%9A%E6%8B%9F%E7%94%A8%E6%88%B7%E8%AE%BF%E9%97%AE%E7%9A%84ftp%E6%9C%8D%E5%8A%A1.html","title":"06-ftp虚拟用户","lang":"zh-CN","frontmatter":{"title":"06-ftp虚拟用户","order":6,"icon":"lightbulb","description":"1、安装vsftpd服务 2、创建ftp目录 3、修正ftp目录权限 4、创建文本格式的用户名密码列表 4、在/etc/vsftpd/目录创建Berkeley DB格式的数据库文件 5、为保证Berkeley DB格式数据文件数据安全赋予相关权限 6、添加虚拟用户账户映射及指定虚拟用户家目录 7、为虚拟用户建立PAM认证文件 8、为不同的虚拟用户建立独...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/6%E3%80%81%E5%88%A9%E7%94%A8vsftpd%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8E%E8%99%9A%E6%8B%9F%E7%94%A8%E6%88%B7%E8%AE%BF%E9%97%AE%E7%9A%84ftp%E6%9C%8D%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"06-ftp虚拟用户"}],["meta",{"property":"og:description","content":"1、安装vsftpd服务 2、创建ftp目录 3、修正ftp目录权限 4、创建文本格式的用户名密码列表 4、在/etc/vsftpd/目录创建Berkeley DB格式的数据库文件 5、为保证Berkeley DB格式数据文件数据安全赋予相关权限 6、添加虚拟用户账户映射及指定虚拟用户家目录 7、为虚拟用户建立PAM认证文件 8、为不同的虚拟用户建立独..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06-ftp虚拟用户\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.51,"words":454},"filePathRelative":"note/centos7/8、部署文件共享服务/6、利用vsftpd搭建基于虚拟用户访问的ftp服务.md","autoDesc":true}');export{m as comp,f as data};
