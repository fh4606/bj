import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as t,d as s}from"./app-CdRwZrpj.js";const a="/assets/2023-09-25_101556_8008610.4973791441676537-B5XhtjZM.png",n="/assets/2023-09-25_101615_0434460.8313872055493441-B1hAqZpQ.png",r="/assets/2023-09-25_101635_6617360.6690080578442109-Ca9iiGQn.png",o={},l=s('<p><strong>实例1：在本地网卡中添加三个ip地址。</strong></p><h3 id="_1、查看本地网卡信息" tabindex="-1"><a class="header-anchor" href="#_1、查看本地网卡信息"><span>1、查看本地网卡信息</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# ifconfig</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、编辑第一块网卡-并添加3个ip地址" tabindex="-1"><a class="header-anchor" href="#_2、编辑第一块网卡-并添加3个ip地址"><span>2、编辑第一块网卡，并添加3个ip地址：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# vi /etc/sysconfig/network-scripts/ifcfg-ens33</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-、重启网卡-使配置生效。" tabindex="-1"><a class="header-anchor" href="#_3-、重启网卡-使配置生效。"><span>3 、重启网卡，使配置生效。</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost ~]# systemctl restart network</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4、测试连通性-在物理机中打开cmd窗口分别使用ping命令检查连通性。" tabindex="-1"><a class="header-anchor" href="#_4、测试连通性-在物理机中打开cmd窗口分别使用ping命令检查连通性。"><span>4、测试连通性，在物理机中打开cmd窗口分别使用ping命令检查连通性。</span></a></h3><p><img src="'+r+'" alt="" loading="lazy"><strong>说明：添加多个ip地址便于后期实验。</strong></p>',11),p=[l];function c(d,h){return t(),i("div",null,p)}const _=e(o,[["render",c],["__file","9、centos7中网卡添加多个ip地址.html.vue"]]),u=JSON.parse('{"path":"/note/centos7/1%E3%80%81%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83/9%E3%80%81centos7%E4%B8%AD%E7%BD%91%E5%8D%A1%E6%B7%BB%E5%8A%A0%E5%A4%9A%E4%B8%AAip%E5%9C%B0%E5%9D%80.html","title":"09-配置多ip","lang":"zh-CN","frontmatter":{"title":"09-配置多ip","order":9,"icon":"lightbulb","description":"实例1：在本地网卡中添加三个ip地址。 1、查看本地网卡信息 2、编辑第一块网卡，并添加3个ip地址： 3 、重启网卡，使配置生效。 4、测试连通性，在物理机中打开cmd窗口分别使用ping命令检查连通性。 说明：添加多个ip地址便于后期实验。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/1%E3%80%81%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83/9%E3%80%81centos7%E4%B8%AD%E7%BD%91%E5%8D%A1%E6%B7%BB%E5%8A%A0%E5%A4%9A%E4%B8%AAip%E5%9C%B0%E5%9D%80.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"09-配置多ip"}],["meta",{"property":"og:description","content":"实例1：在本地网卡中添加三个ip地址。 1、查看本地网卡信息 2、编辑第一块网卡，并添加3个ip地址： 3 、重启网卡，使配置生效。 4、测试连通性，在物理机中打开cmd窗口分别使用ping命令检查连通性。 说明：添加多个ip地址便于后期实验。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09-配置多ip\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"1、查看本地网卡信息","slug":"_1、查看本地网卡信息","link":"#_1、查看本地网卡信息","children":[]},{"level":3,"title":"2、编辑第一块网卡，并添加3个ip地址：","slug":"_2、编辑第一块网卡-并添加3个ip地址","link":"#_2、编辑第一块网卡-并添加3个ip地址","children":[]},{"level":3,"title":"3 、重启网卡，使配置生效。","slug":"_3-、重启网卡-使配置生效。","link":"#_3-、重启网卡-使配置生效。","children":[]},{"level":3,"title":"4、测试连通性，在物理机中打开cmd窗口分别使用ping命令检查连通性。","slug":"_4、测试连通性-在物理机中打开cmd窗口分别使用ping命令检查连通性。","link":"#_4、测试连通性-在物理机中打开cmd窗口分别使用ping命令检查连通性。","children":[]}],"git":{},"readingTime":{"minutes":0.41,"words":124},"filePathRelative":"note/centos7/1、安装环境/9、centos7中网卡添加多个ip地址.md","autoDesc":true}');export{_ as comp,u as data};
