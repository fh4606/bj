import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as i,d as s}from"./app-BvlpFik8.js";const n="/assets/1695614052.7636817-B6o0BDv2.jpeg",o="/assets/1695614052.7876825-BNMqHrku.jpeg",a={},r=s('<blockquote><p>网卡 IP 地址配置的是否正确是两台服务器是否可以相互通信的前提。在 Linux 系统中， 一切都是文 件，因此配置网络服务的工作其实就是在编辑网卡配置文件，因此这个小任务不仅可以帮助你练习使用 Vim 编辑器。 在 RHEL 5、 RHEL 6 中，网卡配置文件的前缀为 eth，第 1 块网卡为eth0，第 2 块网卡 为 eth1；以此类推。而在 RHEL 7 中，网卡配置文件的前缀则以 ifcfg 开始，加上网卡名称共同组成了 网卡配置文件的名字，例如 ifcfg-eno16777736；好在除了文件名变化外也没有其他大的区别。</p></blockquote><p>在linux中网卡信息一般存放在/etc/sysconﬁg/network-scripts 目录中 ，我们先了解一下网卡的基本配 置信息：</p><p>设备类型： TYPE=Ethernet 地址分配模式： BOOTPROTO=static/dhcp 网卡名称： NAME=eno16777736 是否启动： ONBOOT=yes IP 地址： IPADDR=&lt;192.168.10.10&gt; 子网掩码： NETMASK=&lt;255.255.255.0&gt; 网关地址： GATEWAY=&lt;192.168.10.1&gt; 主DNS 地址： DNS1=&lt;192.168.10.1&gt;</p><p>实例1：修改网卡配置信息：</p><p>1、先查看一下在/etc/sysconﬁg/network-scripts 目录中所有的网卡信息：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@linux ~]# ls /etc/sysconfig/network-scripts/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明：为什么我的网卡是eth0呢，因为本人是在云平台下操作的，云平台只识别eth0的网卡，此处的网 卡经过本人修改后的。</p><p>2、编辑/etc/sysconﬁg/network-scripts/icfg-eth0这块网卡：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@linux ~]# vim /etc/sysconfig/network-scripts/ifcfg-eth0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明：因为云平台存在dhcp服务器，且要求云主机以自动获取的方式联网，否则无法使用，此处修改 网卡获取ip方式为dhcp，在实际中大家可根据需求来编辑更改网卡内信息。</p>',12),c=[r];function p(l,h){return i(),t("div",null,c)}const m=e(a,[["render",p],["__file","3、配置网卡信息.html.vue"]]),u=JSON.parse('{"path":"/note/centos7/4%E3%80%81vim%E7%BC%96%E8%BE%91%E5%99%A8/3%E3%80%81%E9%85%8D%E7%BD%AE%E7%BD%91%E5%8D%A1%E4%BF%A1%E6%81%AF.html","title":"03-配置网卡","lang":"zh-CN","frontmatter":{"title":"03-配置网卡","order":3,"icon":"lightbulb","description":"网卡 IP 地址配置的是否正确是两台服务器是否可以相互通信的前提。在 Linux 系统中， 一切都是文 件，因此配置网络服务的工作其实就是在编辑网卡配置文件，因此这个小任务不仅可以帮助你练习使用 Vim 编辑器。 在 RHEL 5、 RHEL 6 中，网卡配置文件的前缀为 eth，第 1 块网卡为eth0，第 2 块网卡 为 eth1；以此类推。而在 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/4%E3%80%81vim%E7%BC%96%E8%BE%91%E5%99%A8/3%E3%80%81%E9%85%8D%E7%BD%AE%E7%BD%91%E5%8D%A1%E4%BF%A1%E6%81%AF.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"03-配置网卡"}],["meta",{"property":"og:description","content":"网卡 IP 地址配置的是否正确是两台服务器是否可以相互通信的前提。在 Linux 系统中， 一切都是文 件，因此配置网络服务的工作其实就是在编辑网卡配置文件，因此这个小任务不仅可以帮助你练习使用 Vim 编辑器。 在 RHEL 5、 RHEL 6 中，网卡配置文件的前缀为 eth，第 1 块网卡为eth0，第 2 块网卡 为 eth1；以此类推。而在 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-配置网卡\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.49,"words":446},"filePathRelative":"note/centos7/4、vim编辑器/3、配置网卡信息.md","autoDesc":true}');export{m as comp,u as data};
