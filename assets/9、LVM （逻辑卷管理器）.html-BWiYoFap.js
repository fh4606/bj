import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as n,a as t}from"./app-mt04-1UL.js";const r="/assets/1695701311.1734378-qvxp-2qj.jpeg",s={},a=t("p",null,"硬盘设备管理技术虽然能够有效地提高硬盘设备的读写速度以及数据的安全性，但是在硬盘分好 区或者部署为 RAID 磁盘阵列之后，再想修改硬盘分区大小就不容易了。换句话说，当用户想要随着实 际需求的变化调整硬盘分区的大小时，会受到硬盘“灵活性” 的限制。 这时就需要用到另外一项非常普及 的硬盘设备资源管理技术了—LVM （逻辑卷管理器）。",-1),c=t("p",null,"LVM 可以允许用户对硬盘资源进行动态调整。逻辑卷管理器是 Linux 系统用于对硬盘分区进行管 理的一种机制，理论性较强，其创建初衷是为了解决硬盘设备在创建分区后不易修改分区大小的缺陷。",-1),i=t("p",null,"尽管对传统的硬盘分区进行强制扩容或缩容从理论上来讲是可行的，但是却可能造成数据的丢失。而",-1),l=t("p",null,"LVM 技术是在硬盘分区和文件系统之间添加了一个逻辑层，它提供了一个抽象的卷组，可以把多块硬盘 进行卷组合并。这样一来，用户不必关心物理硬盘设备的低层架构和布局，就可以实现对硬盘分区的动 态调整。 LVM 的技术架构如图 7-7 所示。",-1),p=t("p",null,"物理卷处于 LVM 中的最底层， 可以将其理解为物理硬盘、硬盘分区或者 RAID 磁盘阵列，这都可 以。卷组建立在物理卷之上， 一个卷组可以包含多个物理卷，而且在卷组创建之后也可以继续向其中添 加新的物理卷。逻辑卷是用卷组中空闲的资源建立的，并且逻辑卷在建立后可以动态地扩展或缩小空",-1),E=t("p",null,"间。这就是 LVM 的核心理念。",-1),_=t("figure",null,[t("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),d=[a,c,i,l,p,E,_];function m(h,u){return n(),o("div",null,d)}const M=e(s,[["render",m],["__file","9、LVM （逻辑卷管理器）.html.vue"]]),V=JSON.parse('{"path":"/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/9%E3%80%81LVM%20%EF%BC%88%E9%80%BB%E8%BE%91%E5%8D%B7%E7%AE%A1%E7%90%86%E5%99%A8%EF%BC%89.html","title":"09-LVM逻辑卷","lang":"zh-CN","frontmatter":{"title":"09-LVM逻辑卷","order":9,"icon":"lightbulb","description":"硬盘设备管理技术虽然能够有效地提高硬盘设备的读写速度以及数据的安全性，但是在硬盘分好 区或者部署为 RAID 磁盘阵列之后，再想修改硬盘分区大小就不容易了。换句话说，当用户想要随着实 际需求的变化调整硬盘分区的大小时，会受到硬盘“灵活性” 的限制。 这时就需要用到另外一项非常普及 的硬盘设备资源管理技术了—LVM （逻辑卷管理器）。 LVM 可以允许用...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/9%E3%80%81LVM%20%EF%BC%88%E9%80%BB%E8%BE%91%E5%8D%B7%E7%AE%A1%E7%90%86%E5%99%A8%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"09-LVM逻辑卷"}],["meta",{"property":"og:description","content":"硬盘设备管理技术虽然能够有效地提高硬盘设备的读写速度以及数据的安全性，但是在硬盘分好 区或者部署为 RAID 磁盘阵列之后，再想修改硬盘分区大小就不容易了。换句话说，当用户想要随着实 际需求的变化调整硬盘分区的大小时，会受到硬盘“灵活性” 的限制。 这时就需要用到另外一项非常普及 的硬盘设备资源管理技术了—LVM （逻辑卷管理器）。 LVM 可以允许用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09-LVM逻辑卷\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.68,"words":504},"filePathRelative":"note/centos7/6、存储结构与磁盘划分/9、LVM （逻辑卷管理器）.md","autoDesc":true}');export{M as comp,V as data};
