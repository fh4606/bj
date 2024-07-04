import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as i,d as n}from"./app-DZWWIkr0.js";const a="/bj/assets/2023-09-25_095541_6474600.4770082166777363-DdfQGNJq.png",t="/bj/assets/2023-09-25_095741_0416310.8417942566250254-BmdejGsq.png",l="/bj/assets/2023-09-25_095748_1970660.7014583214357242-CJ-qLZPM.png",o={},r=n('<p><strong>说明：准备已经安装好了的centos7系统以及ISO源文件，以root身份登录。</strong></p><h3 id="_1、使用等远程工具将centos7-iso源文件上传到centos7系统中的当前目录下" tabindex="-1"><a class="header-anchor" href="#_1、使用等远程工具将centos7-iso源文件上传到centos7系统中的当前目录下"><span>1、使用等远程工具将centos7.iso源文件上传到centos7系统中的当前目录下:</span></a></h3><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、新建本地挂在目录-此例以-opt-centos为例" tabindex="-1"><a class="header-anchor" href="#_2、新建本地挂在目录-此例以-opt-centos为例"><span>2、新建本地挂在目录，此例以/opt/centos为例：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-115 ~]# mkdir -p /opt/centos 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3、使用mount命令将iso文件挂载到新建的挂载目录中" tabindex="-1"><a class="header-anchor" href="#_3、使用mount命令将iso文件挂载到新建的挂载目录中"><span>3、使用mount命令将iso文件挂载到新建的挂载目录中：</span></a></h3><p>说明：弹出以只读的方式挂载说明挂载正确。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-115 ~]# mount -o loop CentOS-7-x86_64-DVD-1810.iso</span></span>
<span class="line"><span>/opt/centos/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、为了防止此主机开机后挂载文件丢失-需配置开机自动挂载-先使用blkid命令查看挂载的镜像" tabindex="-1"><a class="header-anchor" href="#_4、为了防止此主机开机后挂载文件丢失-需配置开机自动挂载-先使用blkid命令查看挂载的镜像"><span>4、为了防止此主机开机后挂载文件丢失，需配置开机自动挂载，先使用blkid命令查看挂载的镜像</span></a></h3><p>UUID：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-115 ~]# blkid</span></span>
<span class="line"><span>/dev/vda1: UUID=&quot;007f74f0-864a-4e32-932d-137e3e42d29b&quot; TYPE=&quot;xfs&quot;</span></span>
<span class="line"><span>/dev/vda2: UUID=&quot;jlhZHc-zR0x-VbD1-ya90-fdKn-9tYS-YmI6AX&quot; TYPE=&quot;LVM2_member&quot;</span></span>
<span class="line"><span>/dev/mapper/centos-root: UUID=&quot;d1c08d26-15f5-4396-a932-90a7145322e4&quot;</span></span>
<span class="line"><span>TYPE=&quot;xfs&quot;</span></span>
<span class="line"><span>/dev/mapper/centos-swap: UUID=&quot;4f26344e-f9ec-4887-b7d0-4a0e28c35399&quot;</span></span>
<span class="line"><span>TYPE=&quot;swap&quot;</span></span>
<span class="line"><span>/dev/loop0: UUID=&quot;2018-11-25-23-54-16-00&quot; LABEL=&quot;CentOS 7 x86_64&quot;</span></span>
<span class="line"><span>TYPE=&quot;iso9660&quot; PTTYPE=&quot;dos&quot; //此为挂载文件信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、复制挂载文件uuid信息-uuid-2018-11-25-23-54-16-00-label-centos-7-x86-64-编辑开机自动挂载文件-此文件在-etc目录下" tabindex="-1"><a class="header-anchor" href="#_5、复制挂载文件uuid信息-uuid-2018-11-25-23-54-16-00-label-centos-7-x86-64-编辑开机自动挂载文件-此文件在-etc目录下"><span>5、复制挂载文件UUID信息（UUID=&quot;2018-11-25-23-54-16-00&quot; LABEL=&quot;CentOS 7 x86_64&quot;）编辑开机自动挂载文件，此文件在/etc目录下：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-115 ~]# vi /etc/fstab //编辑fstab文件，在尾行添加如下信息：</span></span>
<span class="line"><span>UUID=&quot;2018-11-25-23-54-16-00&quot; LABEL=&quot;CentOS 7 x86_64&quot; /opt/centos</span></span>
<span class="line"><span>iso9660 defaults 0 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_6、使用rm-rf命令删除yum目录下所有repo文件" tabindex="-1"><a class="header-anchor" href="#_6、使用rm-rf命令删除yum目录下所有repo文件"><span>6、使用rm -rf命令删除yum目录下所有repo文件：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-115 ~]# rm -rf /etc/yum.repos.d/* 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_7、使用vi命令新建并编辑centos-repo文件" tabindex="-1"><a class="header-anchor" href="#_7、使用vi命令新建并编辑centos-repo文件"><span>7、使用vi命令新建并编辑centos.repo文件：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-115 ~]# vi /etc/yum.repos.d/centos.repo //添加如下内容：</span></span>
<span class="line"><span>[centos]</span></span>
<span class="line"><span>name=centos</span></span>
<span class="line"><span>baseurl=file:///opt/centos</span></span>
<span class="line"><span>gpgcheck=0</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>：x //编辑完成后按键盘上的“esc”键输入“：”号，再输入“x”即可保存并退出。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、使用yum-list命令验证是否挂载成功" tabindex="-1"><a class="header-anchor" href="#_8、使用yum-list命令验证是否挂载成功"><span>8、使用yum list命令验证是否挂载成功：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-115 ~]# yum list 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',21),d=[r];function c(p,h){return i(),s("div",null,d)}const b=e(o,[["render",c],["__file","4、配置本地yum源.html.vue"]]),g=JSON.parse('{"path":"/note/centos7/1%E3%80%81%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83/4%E3%80%81%E9%85%8D%E7%BD%AE%E6%9C%AC%E5%9C%B0yum%E6%BA%90.html","title":"04-配置本地yum源","lang":"zh-CN","frontmatter":{"title":"04-配置本地yum源","order":4,"icon":"lightbulb","description":"说明：准备已经安装好了的centos7系统以及ISO源文件，以root身份登录。 1、使用等远程工具将centos7.iso源文件上传到centos7系统中的当前目录下: 2、新建本地挂在目录，此例以/opt/centos为例： 3、使用mount命令将iso文件挂载到新建的挂载目录中： 说明：弹出以只读的方式挂载说明挂载正确。 4、为了防止此主机开机...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/centos7/1%E3%80%81%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83/4%E3%80%81%E9%85%8D%E7%BD%AE%E6%9C%AC%E5%9C%B0yum%E6%BA%90.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"04-配置本地yum源"}],["meta",{"property":"og:description","content":"说明：准备已经安装好了的centos7系统以及ISO源文件，以root身份登录。 1、使用等远程工具将centos7.iso源文件上传到centos7系统中的当前目录下: 2、新建本地挂在目录，此例以/opt/centos为例： 3、使用mount命令将iso文件挂载到新建的挂载目录中： 说明：弹出以只读的方式挂载说明挂载正确。 4、为了防止此主机开机..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04-配置本地yum源\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"1、使用等远程工具将centos7.iso源文件上传到centos7系统中的当前目录下:","slug":"_1、使用等远程工具将centos7-iso源文件上传到centos7系统中的当前目录下","link":"#_1、使用等远程工具将centos7-iso源文件上传到centos7系统中的当前目录下","children":[]},{"level":3,"title":"2、新建本地挂在目录，此例以/opt/centos为例：","slug":"_2、新建本地挂在目录-此例以-opt-centos为例","link":"#_2、新建本地挂在目录-此例以-opt-centos为例","children":[]},{"level":3,"title":"3、使用mount命令将iso文件挂载到新建的挂载目录中：","slug":"_3、使用mount命令将iso文件挂载到新建的挂载目录中","link":"#_3、使用mount命令将iso文件挂载到新建的挂载目录中","children":[]},{"level":3,"title":"4、为了防止此主机开机后挂载文件丢失，需配置开机自动挂载，先使用blkid命令查看挂载的镜像","slug":"_4、为了防止此主机开机后挂载文件丢失-需配置开机自动挂载-先使用blkid命令查看挂载的镜像","link":"#_4、为了防止此主机开机后挂载文件丢失-需配置开机自动挂载-先使用blkid命令查看挂载的镜像","children":[]},{"level":3,"title":"5、复制挂载文件UUID信息（UUID=\\"2018-11-25-23-54-16-00\\" LABEL=\\"CentOS 7 x86_64\\"）编辑开机自动挂载文件，此文件在/etc目录下：","slug":"_5、复制挂载文件uuid信息-uuid-2018-11-25-23-54-16-00-label-centos-7-x86-64-编辑开机自动挂载文件-此文件在-etc目录下","link":"#_5、复制挂载文件uuid信息-uuid-2018-11-25-23-54-16-00-label-centos-7-x86-64-编辑开机自动挂载文件-此文件在-etc目录下","children":[]},{"level":3,"title":"6、使用rm -rf命令删除yum目录下所有repo文件：","slug":"_6、使用rm-rf命令删除yum目录下所有repo文件","link":"#_6、使用rm-rf命令删除yum目录下所有repo文件","children":[]},{"level":3,"title":"7、使用vi命令新建并编辑centos.repo文件：","slug":"_7、使用vi命令新建并编辑centos-repo文件","link":"#_7、使用vi命令新建并编辑centos-repo文件","children":[]},{"level":3,"title":"8、使用yum list命令验证是否挂载成功：","slug":"_8、使用yum-list命令验证是否挂载成功","link":"#_8、使用yum-list命令验证是否挂载成功","children":[]}],"git":{},"readingTime":{"minutes":1.52,"words":457},"filePathRelative":"note/centos7/1、安装环境/4、配置本地yum源.md","autoDesc":true}');export{b as comp,g as data};
