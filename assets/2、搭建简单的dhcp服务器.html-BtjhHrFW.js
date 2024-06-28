import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as i,d as n}from"./app-DuswJAHG.js";const t="/vuepress/assets/1695712026.5218184-F9DnvAOj.jpeg",a="/vuepress/assets/1695712026.55452-Dev-sRAD.jpeg",l={},p=n('<p>准备环境： 此实验请在本机虚拟机环境下操作，准备centos7.6和windows7系统各一个，分别桥接到一块网卡上， 网卡作为网关ip地址为192.168.10.1 ，centos7.6地址为192.168.10.2 ，windows7系统不设地址，确保网络连通性</p><p>1、检查本机是否安装dhcpd服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# rpm -qa | grep dhcp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2、安装dhcp服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# yum install dhcp* -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3、编辑dhcp服务主配置文件，并添加如图所示参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# vi /etc/dhcp/dhcpd.conf</span></span>
<span class="line"><span>subnet 192.168.10.0 netmask 255.255.255.0 { //创建作用域为192.168.10.0/24</span></span>
<span class="line"><span>range 192.168.10.20 192.168.10.30; //指定下发地址段为</span></span>
<span class="line"><span>192.168.10.20-30</span></span>
<span class="line"><span>option subnet-mask 255.255.255.0; //指定下发掩码为255.255.255.0</span></span>
<span class="line"><span>option routers 192.168.10.1; //指定下发网关为192.168.10.1</span></span>
<span class="line"><span>max-lease-time 43200; //定义最大预约时间为43200</span></span>
<span class="line"><span>} //大括号一定不能少且成对出现</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、重启dhcp服务器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# systemctl restart dhcpd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>5、在windows 7下验证，先禁用网卡在重新启动网卡，或者在运行窗口中输入命令： ipconﬁg/renew，重新获取ip地址</p><figure><img src="`+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',12),d=[p];function o(r,c){return i(),s("div",null,d)}const g=e(l,[["render",o],["__file","2、搭建简单的dhcp服务器.html.vue"]]),u=JSON.parse('{"path":"/note/centos7/10%E3%80%81%E5%8A%A8%E6%80%81%E4%B8%BB%E6%9C%BA%E7%AE%A1%E7%90%86%E5%8D%8F%E8%AE%AE/2%E3%80%81%E6%90%AD%E5%BB%BA%E7%AE%80%E5%8D%95%E7%9A%84dhcp%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"02-部署DHCP","lang":"zh-CN","frontmatter":{"title":"02-部署DHCP","order":2,"icon":"lightbulb","description":"准备环境： 此实验请在本机虚拟机环境下操作，准备centos7.6和windows7系统各一个，分别桥接到一块网卡上， 网卡作为网关ip地址为192.168.10.1 ，centos7.6地址为192.168.10.2 ，windows7系统不设地址，确保网络连通性 1、检查本机是否安装dhcpd服务 2、安装dhcp服务 3、编辑dhcp服务主配置文...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/centos7/10%E3%80%81%E5%8A%A8%E6%80%81%E4%B8%BB%E6%9C%BA%E7%AE%A1%E7%90%86%E5%8D%8F%E8%AE%AE/2%E3%80%81%E6%90%AD%E5%BB%BA%E7%AE%80%E5%8D%95%E7%9A%84dhcp%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"02-部署DHCP"}],["meta",{"property":"og:description","content":"准备环境： 此实验请在本机虚拟机环境下操作，准备centos7.6和windows7系统各一个，分别桥接到一块网卡上， 网卡作为网关ip地址为192.168.10.1 ，centos7.6地址为192.168.10.2 ，windows7系统不设地址，确保网络连通性 1、检查本机是否安装dhcpd服务 2、安装dhcp服务 3、编辑dhcp服务主配置文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-部署DHCP\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.87,"words":262},"filePathRelative":"note/centos7/10、动态主机管理协议/2、搭建简单的dhcp服务器.md","autoDesc":true}');export{g as comp,u as data};
