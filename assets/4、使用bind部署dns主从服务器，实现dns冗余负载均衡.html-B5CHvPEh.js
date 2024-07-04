import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,d as t}from"./app-fmcy30Ms.js";const a="/assets/1695711749.866703-T-Y3UMB_.jpeg",n="/assets/1695711749.877753-blxddgCU.jpeg",d="/assets/1695711749.8911772-ECC7a1cY.jpeg",r="/assets/1695711749.904859-DxuNPkfS.jpeg",l="/assets/1695711749.924072-CVcZ8kk4.jpeg",o="/assets/1695711749.9356923-Bh71UaNB.jpeg",p="/assets/1695711749.944882-BvpdOESF.jpeg",g="/assets/1695711749.9551349-C7TNjO_W.jpeg",c="/assets/1695711749.9650686-BA4gbt6I.jpeg",h="/assets/1695711749.976334-tSm02YNi.png",b="/assets/1695711749.9887745-DtdwvD3A.jpeg",m="/assets/1695711749.9981356-BoaIdWkR.png",u="/assets/1695711750.0114534-BvWGJL_P.jpeg",k="/assets/1695711750.0212812-B-Hfxa7u.jpeg",f={},v=t('<p><strong>准备环境：</strong> 1、准备两台虚拟机，如图所示，实验主机为主dns服务器，测试主机为从dns服务器 <img src="'+a+'" alt="" loading="lazy"> 实例：使用bind部署dns主从服务器，实现dns冗余负载均衡 一、主dns服务器安装配置 1、检查本机是否安装bind服务程序</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# rpm -qa | grep bind</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们发现现有的包是因为安装系统时采用gui核心功能安装的，所有自带的有bind附属包，但是没有主 包</p><p>2、安装bind服务程序</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# yum install -y bind*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装完成之后我们再次查看，发现已经安装了主包</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3、配置bind主配置文件，，修改options中的参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# vi /etc/named.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>4、编辑区域配置文件，添加如图所示参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# vi /etc/named.rfc1912.zones</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明：在主dns服务器区域文件中允许该从服务器的更新请求，即修改allow-update{允许更新区域信息的主机地址}；参数，我们这里地址指向从dns服务器地址，另外其服务类型为主，即type master。</p><p>5、配置正向解析文件，添加如图所示参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# vi /var/named/named.localhost</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>6、编辑反向解析文件，添加如图所示参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# vi /var/named/named.loopback</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>7、重启dns服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-5 ~]# systemctl restart named</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>二、从dns服务器安装配置</p><p>1、安装bind主服务程序</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-6 ~]# yum install bind * -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、编辑主配置文件，添加如图所示参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-6 ~]# vi /etc/named.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3、配置区域文件，添加如图所示参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-6 ~]# vi /etc/named.rfc1912.zones</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明：在从dns服务器区域文件中配置从主dns服务器的更新请求，即修改masters{允许更新区域信息 的主机地址}；参数，我们这里地址指向主dns服务器地址，而且ﬁle参数定义的是同步正反向区域配置 文件要保存的位置，另外其服务类型为从，即type slave。</p><p>4、重启dns服务器，从服务器会自动同步主dns服务器信息</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-6 ~]# systemctl restart named</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>三、测试</p><p>在windows客户端将本地dns地址指向dns服务器</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在运行窗口中输入nslookup测试</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>现在我们将主dns修改为从dns服务器地址在测试</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们发现及时没有主dns，我们指向了从dns ，dns解析依然生效</p>',45),E=[v];function _(y,B){return s(),e("div",null,E)}const A=i(f,[["render",_],["__file","4、使用bind部署dns主从服务器，实现dns冗余负载均衡.html.vue"]]),z=JSON.parse('{"path":"/note/centos7/9%E3%80%81%E9%83%A8%E7%BD%B2%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E7%B3%BB%E7%BB%9F/4%E3%80%81%E4%BD%BF%E7%94%A8bind%E9%83%A8%E7%BD%B2dns%E4%B8%BB%E4%BB%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E5%AE%9E%E7%8E%B0dns%E5%86%97%E4%BD%99%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html","title":"04-部署DNS主从","lang":"zh-CN","frontmatter":{"title":"04-部署DNS主从","order":4,"icon":"lightbulb","description":"准备环境： 1、准备两台虚拟机，如图所示，实验主机为主dns服务器，测试主机为从dns服务器 实例：使用bind部署dns主从服务器，实现dns冗余负载均衡 一、主dns服务器安装配置 1、检查本机是否安装bind服务程序 我们发现现有的包是因为安装系统时采用gui核心功能安装的，所有自带的有bind附属包，但是没有主 包 2、安装bind服务程序 安...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/9%E3%80%81%E9%83%A8%E7%BD%B2%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E7%B3%BB%E7%BB%9F/4%E3%80%81%E4%BD%BF%E7%94%A8bind%E9%83%A8%E7%BD%B2dns%E4%B8%BB%E4%BB%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E5%AE%9E%E7%8E%B0dns%E5%86%97%E4%BD%99%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"04-部署DNS主从"}],["meta",{"property":"og:description","content":"准备环境： 1、准备两台虚拟机，如图所示，实验主机为主dns服务器，测试主机为从dns服务器 实例：使用bind部署dns主从服务器，实现dns冗余负载均衡 一、主dns服务器安装配置 1、检查本机是否安装bind服务程序 我们发现现有的包是因为安装系统时采用gui核心功能安装的，所有自带的有bind附属包，但是没有主 包 2、安装bind服务程序 安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04-部署DNS主从\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"note/centos7/9、部署域名解析系统/4、使用bind部署dns主从服务器，实现dns冗余负载均衡.md","autoDesc":true}');export{A as comp,z as data};
