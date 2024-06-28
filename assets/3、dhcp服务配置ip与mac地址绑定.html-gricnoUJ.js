import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as t}from"./app-CAdWGPj0.js";const a="/vuepress/assets/1695712172.2926188-A9OC7uiK.jpeg",n="/vuepress/assets/1695712172.3051012-DaFUmbeQ.jpeg",p="/vuepress/assets/1695712172.3185706-CtSSr77b.jpeg",c={},o=t(`<p>准备：请将windows7网卡mac地址复制下来，以备用，本例windows7的mac地址为：00:0C:29:05:2B:F2，本例以将192.168.10.25这个ip分配给windows7</p><p>1、接上一步，编辑配置dhcp主配置文件，尾行添加如下内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# vi /etc/dhcp/dhcpd.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>host windows7 { //主机名称</span></span>
<span class="line"><span>hardware ethernet 00:0C:29:05:2B:F2; //客户端网卡mac地址</span></span>
<span class="line"><span>fixed-address 192.168.10.25; //指定下发的地址</span></span>
<span class="line"><span>} //大括号成对出现</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2、重启dhcpd服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# systemctl restart dhcpd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3、验证，网卡重新获取ip地址，在运行窗口输入指令： ipconﬁg/release释放ip地址，输入指令： ipconﬁg/renew重新获取ip地址</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',9),r=[o];function d(l,h){return s(),i("div",null,r)}const E=e(c,[["render",d],["__file","3、dhcp服务配置ip与mac地址绑定.html.vue"]]),u=JSON.parse('{"path":"/note/centos7/10%E3%80%81%E5%8A%A8%E6%80%81%E4%B8%BB%E6%9C%BA%E7%AE%A1%E7%90%86%E5%8D%8F%E8%AE%AE/3%E3%80%81dhcp%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AEip%E4%B8%8Emac%E5%9C%B0%E5%9D%80%E7%BB%91%E5%AE%9A.html","title":"03-部署ip与mac绑定","lang":"zh-CN","frontmatter":{"title":"03-部署ip与mac绑定","order":3,"icon":"lightbulb","description":"准备：请将windows7网卡mac地址复制下来，以备用，本例windows7的mac地址为：00:0C:29:05:2B:F2，本例以将192.168.10.25这个ip分配给windows7 1、接上一步，编辑配置dhcp主配置文件，尾行添加如下内容： 2、重启dhcpd服务 3、验证，网卡重新获取ip地址，在运行窗口输入指令： ipconﬁg/r...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/centos7/10%E3%80%81%E5%8A%A8%E6%80%81%E4%B8%BB%E6%9C%BA%E7%AE%A1%E7%90%86%E5%8D%8F%E8%AE%AE/3%E3%80%81dhcp%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AEip%E4%B8%8Emac%E5%9C%B0%E5%9D%80%E7%BB%91%E5%AE%9A.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"03-部署ip与mac绑定"}],["meta",{"property":"og:description","content":"准备：请将windows7网卡mac地址复制下来，以备用，本例windows7的mac地址为：00:0C:29:05:2B:F2，本例以将192.168.10.25这个ip分配给windows7 1、接上一步，编辑配置dhcp主配置文件，尾行添加如下内容： 2、重启dhcpd服务 3、验证，网卡重新获取ip地址，在运行窗口输入指令： ipconﬁg/r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-部署ip与mac绑定\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.6,"words":179},"filePathRelative":"note/centos7/10、动态主机管理协议/3、dhcp服务配置ip与mac地址绑定.md","autoDesc":true}');export{E as comp,u as data};
