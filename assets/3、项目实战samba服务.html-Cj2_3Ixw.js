import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as n,d as e}from"./app-DZWWIkr0.js";const i={},l=e(`<p><strong>需求：</strong></p><ul><li>账号建立：产研部门所有人员，产品、开发、测试、运维；</li><li>目录建立：各二级部门分别建立以部门名称为文件夹的目录；</li><li>初步权限管理：各部门成员对本部门目录有读写权限，对其他部门目录有读权限；</li><li>建立共享目录，所有人有增删权限;</li><li>部门目录结构自行定义.</li></ul><p>1、安装samba服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# yum install samba* -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、创建用户组</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# groupadd cs  //测试组</span></span>
<span class="line"><span>[root@samba-server ~]# groupadd cp //产品组</span></span>
<span class="line"><span>[root@samba-server ~]# groupadd kf //开发组</span></span>
<span class="line"><span>[root@samba-server ~]# groupadd yw //运维组</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、用户创建并加入相关组</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# useradd -g cs -s /sbin/nologin csuser //测试组员工</span></span>
<span class="line"><span>[root@samba-server ~]# useradd -g cp -s /sbin/nologin cpuser //产品组员工</span></span>
<span class="line"><span>[root@samba-server ~]# useradd -g kf -s /sbin/nologin kfuser  //开发组员工</span></span>
<span class="line"><span>[root@samba-server ~]# useradd -g yw -s /sbin/nologin ywuser //运维组员工</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、创建用于访问samba的用户名密码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# smbpasswd -a csuser</span></span>
<span class="line"><span>[root@samba-server ~]# smbpasswd -a cpuser</span></span>
<span class="line"><span>[root@samba-server ~]# smbpasswd -a kfuser</span></span>
<span class="line"><span>[root@samba-server ~]# smbpasswd -a ywuser</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//密码统一为：0000</p><p>5、创建共享目录并修改共享目录的属主属组权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# mkdir -p /date/{cs,cp,ks,yw}</span></span>
<span class="line"><span>[root@samba-server ~]# chown csuser.cs /date/cs</span></span>
<span class="line"><span>[root@samba-server ~]# chown cpuser.cp /date/cp</span></span>
<span class="line"><span>[root@samba-server ~]# chown kfuser.kf /date/kf/</span></span>
<span class="line"><span>[root@samba-server ~]# chown ywuser.yw /date/yw</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、备份主配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# cp /etc/samba/smb.conf /etc/samba/smb.conf.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>7、删除主配置文件的内容，并添加如下内容</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# vi /etc/samba/smb.conf</span></span>
<span class="line"><span>[globall]</span></span>
<span class="line"><span>workgroup=mysamba</span></span>
<span class="line"><span>netbios name=mysamba</span></span>
<span class="line"><span>server string=this is mysamba</span></span>
<span class="line"><span>security=user</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[测试部门]</span></span>
<span class="line"><span>comment=this is ceshi samba</span></span>
<span class="line"><span>path=/date/cs</span></span>
<span class="line"><span>writeable=yes</span></span>
<span class="line"><span>browseaable=yes</span></span>
<span class="line"><span>valid user=@cs</span></span>
<span class="line"><span>create mode = 0777</span></span>
<span class="line"><span>directory mode=0777</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[产品部门]</span></span>
<span class="line"><span>comment=this is chanping samba</span></span>
<span class="line"><span>path=/date/cp</span></span>
<span class="line"><span>writeable=yes</span></span>
<span class="line"><span>browseaable=yes</span></span>
<span class="line"><span>valid user=@cp</span></span>
<span class="line"><span>create mode = 0777</span></span>
<span class="line"><span>directory mode=0777</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[开发部门]</span></span>
<span class="line"><span>comment=this is kaifa samba</span></span>
<span class="line"><span>path=/date/kf</span></span>
<span class="line"><span>writeable=yes</span></span>
<span class="line"><span>browseaable=yes</span></span>
<span class="line"><span>valid user=@kf</span></span>
<span class="line"><span>create mode = 0777</span></span>
<span class="line"><span>directory mode=0777</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[运维部门]</span></span>
<span class="line"><span>comment=this is yunwei samba</span></span>
<span class="line"><span>path=/date/yw</span></span>
<span class="line"><span>writeable=yes</span></span>
<span class="line"><span>browseaable=yes</span></span>
<span class="line"><span>valid user=@yw</span></span>
<span class="line"><span>create mode = 0777</span></span>
<span class="line"><span>directory mode=0777</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、关闭防火墙等配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@samba-server ~]# systemctl stop firewalld &amp;&amp; iptables -F &amp;&amp; setenforce 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>9、测试，分别使用账号密码进行登录测试，并新建文件，查看权限提示。</p><p>10、如果你多次访问共享服务本地会有缓存信息，请访问请允许cmd窗口使用命令： net stop workstation 清除本地缓存的访问共享服务的信息。</p>`,21),p=[l];function r(d,t){return n(),a("div",null,p)}const m=s(i,[["render",r],["__file","3、项目实战samba服务.html.vue"]]),b=JSON.parse('{"path":"/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/3%E3%80%81%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98samba%E6%9C%8D%E5%8A%A1.html","title":"03-实战：smb服务","lang":"zh-CN","frontmatter":{"title":"03-实战：smb服务","order":3,"icon":"lightbulb","description":"需求： 账号建立：产研部门所有人员，产品、开发、测试、运维； 目录建立：各二级部门分别建立以部门名称为文件夹的目录； 初步权限管理：各部门成员对本部门目录有读写权限，对其他部门目录有读权限； 建立共享目录，所有人有增删权限; 部门目录结构自行定义. 1、安装samba服务 2、创建用户组 3、用户创建并加入相关组 4、创建用于访问samba的用户名密码...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/centos7/8%E3%80%81%E9%83%A8%E7%BD%B2%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB%E6%9C%8D%E5%8A%A1/3%E3%80%81%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98samba%E6%9C%8D%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"03-实战：smb服务"}],["meta",{"property":"og:description","content":"需求： 账号建立：产研部门所有人员，产品、开发、测试、运维； 目录建立：各二级部门分别建立以部门名称为文件夹的目录； 初步权限管理：各部门成员对本部门目录有读写权限，对其他部门目录有读权限； 建立共享目录，所有人有增删权限; 部门目录结构自行定义. 1、安装samba服务 2、创建用户组 3、用户创建并加入相关组 4、创建用于访问samba的用户名密码..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-实战：smb服务\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.89,"words":566},"filePathRelative":"note/centos7/8、部署文件共享服务/3、项目实战samba服务.md","autoDesc":true}');export{m as comp,b as data};
