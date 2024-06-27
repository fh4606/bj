import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as e,d as p}from"./app-Bna6fuy1.js";const c="/assets/1695712833.5614994-BEy3gApJ.jpeg",l="/assets/1695712833.576854-rwKps2wK.jpeg",n={},i=p('<p>一、电子邮件系统</p><p>20 世纪 60 年代，美苏两国正处于冷战时期。美国军方认为应该在科学技术上保持其领 先的地</p><p>位，这样有助于在未来的战争中取得优势。美国国防部由此发起了一项名为 ARPANET 的科研项目，即 大家现在所熟知的阿帕网计 划。阿帕网是当今互联网的雏形，它 也是世界上第一个运营的封包交换网 络。但是很快在 1971 年阿帕网遇到了严峻的问题，如 图 15-1 所示，参与阿帕网科研项目的科学家分 布在美国不同的地区，甚至还会因为时差的 影响而不能及时分享各自的研究成果，因此科学家们迫切需 要一种能够借助于网络在计算 机之间传输数据的方法。</p><p>尽管 Web 服务和 FTP 文件传输服务也能实现数据交换，但是这些服务的数据传输方式就像“打电 话”那样，需要双方同时在线才能完成传输工作。如 果对方的主机宕机或者科研人员因故离开，就有可 能错过某些科研成果了。好在当时麻省理 工学院的 Ray Tomlinson 博士也参与到了阿帕网计划的科研 项目中，他觉得有必要设计一种类 似于“信件”的传输服务，并为信件准备一个“信箱” ，这样即便对方临 时离线也能完成数据 的接收，等上线后再进行处理即可。于是， Ray Tomlinson 博士用了近一年的时间 完成了电子 邮件（Email）的设计，并在 1971 年秋天使用 SNDMSG 软件向自己的另一台计算机发送</p><p>出了 人类历史上第一封电子邮件—电子邮件系统在互联网中由此诞生！</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>既然要在互联网中给他人发送电子邮件，那么对方用户用于接收电子邮件的名称必 须是唯一的，</p><p>否则电子邮件可能会同时发给多个重名的用户，也或者干脆大家都收不到 邮件了。因此， Ray</p><p>Tomlinson 博士决定选择使用“姓名@计算机主机名称”的格式来规 范电子信箱的名称。选择使用@符号 作为间隔符的原因其实也很简单，因为 Ray Tomlinson 博士觉得人类的名字和计算机主机名称中应该不 会有这么一个@符号，所以就 选择了这个符号。</p><p>电子邮件系统基于邮件协议来完成电子邮件的传输，常见的邮件协议有下面这些。</p><blockquote><blockquote><p>简单邮件传输协议（Simple Mail Transfer Protocol，SMTP）：用于发送和中转发出 的电子邮 件， 占用服务器的 25/TCP 端口。</p></blockquote></blockquote><blockquote><blockquote><p>邮局协议版本 3（Post Office Protocol 3）：用于将电子邮件存储到本地主机， 占用服 务器的 110/TCP 端口。</p></blockquote></blockquote><blockquote><blockquote><p>Internet 消息访问协议版本 4（Internet Message Access Protocol 4）：用于在本地主 机上 访问邮件， 占用服务器的 143/TCP 端口。</p></blockquote></blockquote><p>在电子邮件系统中，为用户收发邮件的服务器名为邮件用户代理（Mail User Agent ， MUA）。另 外，既然电子邮件系统能够让用户在离线的情况下依然可以完成数据的接收， 肯定得有一个用于保存用 户邮件的“信箱”服务器，这个服务器的名字为邮件投递代理 （ Mail Delivery Agent ， MDA），其工作职 责是把来自于邮件传输代理（Mail Transfer Agent ， MTA）的邮件保存到本地的收件箱中。其中，这个 MTA 的工作职责是转发处 理不同电子邮件服务供应商之间的邮件，把来自于 MUA 的邮件转发到合适</p><p>的 MTA 服 务器。例如，我们从新浪信箱向谷歌信箱发送一封电子邮件，这封电子邮件的传输过程 如图 15-2 所示。</p><p>总的来说， 一般的网络服务程序在传输信息时就像拨打电话，需要双方同时保持在线， 而在电子邮 件系统中，当用户发送邮件后不必等待投递工作完成即可下线。如果对方邮件服 务器（MTA）宕机或对 方临时离线，则发件服务器（MTA）就会把要发送的内容自动的暂时 保存到本地，等检测到对方邮件服 务器恢复后会立即再次投递，期间一般无需运维人员维护处理，随后收信人（MUA）就能在自己的信箱 中找到这封邮件了。</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>大家在生产环境中部署企业级的电子邮件系统时，有 4 个注意事项请留意。</p><blockquote><blockquote><p>添加反垃圾与反病毒模块：它能够很有效地阻止垃圾邮件或病毒邮件对企业信箱 的干扰。</p></blockquote></blockquote><blockquote><blockquote><p>对邮件加密：可有效保护邮件内容不被黑客盗取和篡改。</p></blockquote></blockquote><blockquote><blockquote><p>添加邮件监控审核模块：可有效地监控企业全体员工的邮件中是否有敏感词、是否有 透露企业资料等违规 行为。</p></blockquote></blockquote><blockquote><blockquote><p>保障稳定性：电子邮件系统的稳定性至关重要，运维人员应做到保证电子邮件系统的 稳定运行，并及时做 好防范分布式拒绝服务（Distributed Denial of Service，DDoS） 攻击的准备。</p></blockquote></blockquote>',22),r=[i];function a(s,u){return e(),t("div",null,r)}const m=o(n,[["render",a],["__file","1、认识电子邮件系统.html.vue"]]),A=JSON.parse('{"path":"/note/centos7/12%E3%80%81%E9%83%A8%E7%BD%B2%E9%82%AE%E4%BB%B6%E7%B3%BB%E7%BB%9F/1%E3%80%81%E8%AE%A4%E8%AF%86%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6%E7%B3%BB%E7%BB%9F.html","title":"01-认识邮件系统","lang":"zh-CN","frontmatter":{"title":"01-认识邮件系统","order":1,"icon":"lightbulb","description":"一、电子邮件系统 20 世纪 60 年代，美苏两国正处于冷战时期。美国军方认为应该在科学技术上保持其领 先的地 位，这样有助于在未来的战争中取得优势。美国国防部由此发起了一项名为 ARPANET 的科研项目，即 大家现在所熟知的阿帕网计 划。阿帕网是当今互联网的雏形，它 也是世界上第一个运营的封包交换网 络。但是很快在 1971 年阿帕网遇到了严峻的问...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/12%E3%80%81%E9%83%A8%E7%BD%B2%E9%82%AE%E4%BB%B6%E7%B3%BB%E7%BB%9F/1%E3%80%81%E8%AE%A4%E8%AF%86%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"01-认识邮件系统"}],["meta",{"property":"og:description","content":"一、电子邮件系统 20 世纪 60 年代，美苏两国正处于冷战时期。美国军方认为应该在科学技术上保持其领 先的地 位，这样有助于在未来的战争中取得优势。美国国防部由此发起了一项名为 ARPANET 的科研项目，即 大家现在所熟知的阿帕网计 划。阿帕网是当今互联网的雏形，它 也是世界上第一个运营的封包交换网 络。但是很快在 1971 年阿帕网遇到了严峻的问..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-认识邮件系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":4.69,"words":1407},"filePathRelative":"note/centos7/12、部署邮件系统/1、认识电子邮件系统.md","autoDesc":true}');export{m as comp,A as data};
