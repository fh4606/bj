import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o,e as p}from"./app-yH_6ilSD.js";const a="/bj/assets/1695701646.6891255-DvRJvVZi.jpeg",i="/bj/assets/1695701646.7005522-Dbdor63p.jpeg",n="/bj/assets/1695701646.7207725-DO-dzEGN.jpeg",c="/bj/assets/1695701646.7328765-CRsh1vfD.jpeg",r={},s=p('<p>1970 年，作为互联网前身的 ARPANET （阿帕网）已初具雏形，并开始向非军用部门开放，许多大 学和商业部门开始接入。虽然彼时阿帕网的规模（只有 4 台主机联网运行）还不如现在的局域网成熟， 但是它依然为网络技术的进步打下了扎实的基础。</p><p>想必我们大多数人都是通过访问网站而开始接触互联网的吧。我们平时访问的网站服务就是 Web 网络服务， 一般是指允许用户通过浏览器访问到互联网中各种资源的服务。如图 10-1所示， Web 网络 服务是一种被动访问的服务程序，即只有接收到互联网中其他主机发出的请求后才会响应，最终用于提 供服务程序的 Web 服务器会通过 HTTP（超文本传输协议）或HTTPS（安全超文本传输协议）把请求 的内容传送给用户。目前能够提供 Web 网络服务的程序有 IIS、 Nginx 和 Apache 等。其中， IIS (</p><p>Internet Information Services，互联网信息服务）是 Windows系统中默认的 Web 服务程序，这是一 款图形化的网站管理工具，不仅可以提供 Web 网站服务，还可以提供 FTP、 NMTP、 SMTP 等服务。 而我们今天要学的Apache则是用于windows下的web服务程序。</p><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>1、认识配置文件参数</strong></p><p>在 Linux 系统中配置服务，其实就是修改服务的配置文件，因此，还需要知道这些配置文件的所在 位置以及用途， httpd 服务程序的主要配置文件及存放位置如表 10-1 所示。</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>大家在首次打开 httpd 服务程序的主配置文件，会发现httpd主配文集有 353 行，其中所有以井号 （#）开始的行都是注释行，其目的是对 httpd 服务程序的功能或某一行参数进行介绍，我们无需理 会。</p><p>在 httpd 服务程序的主配置文件中，存在三种类型的信息：注释行信息、全局配置、区域配置，如 图 10-4 所示。</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中注释行信息就是对其文件或者功能的说明，无需理会。那么全局配置参数与区域配置参数有啥 区别呢？顾名思义，全局配置参数就是一种全局性的配置参数，可作用于对所有的子站点，既保证了子 站点的正常访问，也有效减少了频繁写入重复参数的工作量。区域配置参数则是单独针对于每个独立的 子站点进行设置的。</p><p>在 httpd 服务程序主配置文件中，最为常用的参数如表 10-2所示。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',13),E=[s];function l(g,h){return o(),e("div",null,E)}const m=t(r,[["render",l],["__file","1、认识Apache与配置服务文件参数.html.vue"]]),A=JSON.parse('{"path":"/note/centos7/7%E3%80%81%E4%BD%BF%E7%94%A8Apache%E9%83%A8%E7%BD%B2%E7%BD%91%E7%AB%99/1%E3%80%81%E8%AE%A4%E8%AF%86Apache%E4%B8%8E%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E6%96%87%E4%BB%B6%E5%8F%82%E6%95%B0.html","title":"01-认识apache","lang":"zh-CN","frontmatter":{"title":"01-认识apache","order":1,"icon":"lightbulb","description":"1970 年，作为互联网前身的 ARPANET （阿帕网）已初具雏形，并开始向非军用部门开放，许多大 学和商业部门开始接入。虽然彼时阿帕网的规模（只有 4 台主机联网运行）还不如现在的局域网成熟， 但是它依然为网络技术的进步打下了扎实的基础。 想必我们大多数人都是通过访问网站而开始接触互联网的吧。我们平时访问的网站服务就是 Web 网络服务， 一般是指...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/centos7/7%E3%80%81%E4%BD%BF%E7%94%A8Apache%E9%83%A8%E7%BD%B2%E7%BD%91%E7%AB%99/1%E3%80%81%E8%AE%A4%E8%AF%86Apache%E4%B8%8E%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E6%96%87%E4%BB%B6%E5%8F%82%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"01-认识apache"}],["meta",{"property":"og:description","content":"1970 年，作为互联网前身的 ARPANET （阿帕网）已初具雏形，并开始向非军用部门开放，许多大 学和商业部门开始接入。虽然彼时阿帕网的规模（只有 4 台主机联网运行）还不如现在的局域网成熟， 但是它依然为网络技术的进步打下了扎实的基础。 想必我们大多数人都是通过访问网站而开始接触互联网的吧。我们平时访问的网站服务就是 Web 网络服务， 一般是指..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-认识apache\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.42,"words":726},"filePathRelative":"note/centos7/7、使用Apache部署网站/1、认识Apache与配置服务文件参数.md","autoDesc":true}');export{m as comp,A as data};
