import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as n,a as t}from"./app-cGHsJGw-.js";const l="/vuepress/assets/1695699179.4951823-BCnZv8LK.jpeg",r={},i=t("p",null,"用户在硬件存储设备中执行的文件建立、写入、读取、修改、转存与控制等操作都是依靠文件系统 来完成的。文件系统的作用是合理规划硬盘，以保证用户正常的使用需求。 Linux系统支持数十种的文 件系统，而最常见的文件系统如下所示。",-1),s=t("ul",null,[t("li",null,[t("p",null,"Ext3：是一款日志文件系统，能够在系统异常宕机时避免文件系统资料丢失，并能自动修复数据的不一致 与错误。然而，当硬盘容量较大时，所需的修复时间也会很长，而且也不能百分之百地保证资料不会丢失。它会把整个磁盘的每个写入动作的细节都预先记录下来，以便在发生异常宕机后能回溯追踪到被中断 的部分，然后尝试进行修复。")]),t("li",null,[t("p",null,"Ext4： Ext3 的改进版本，作为 RHEL 6 系统中的默认文件管理系统，它支持的存储容量高达 1EB( 1EB=1,073,741,824GB），且能够有无限多的子目录。另外， Ext4 文件系统能够批量分配 block 块，从而极大地提高了读写效率。")]),t("li",null,[t("p",null,"XFS：是一种高性能的日志文件系统，而且是 RHEL 7 中默认的文件管理系统，它的优势在发生意外宕 机后尤其明显，即可以快速地恢复可能被破坏的文件，而且强大的日志功能只用花费极低的计算和存储性 能。并且它最大可支持的存储容量为 18EB，这几乎满足了所有需求。")])],-1),a=t("p",null,"计算机系统在发展过程中产生了众多的文件系统，为了使用户在读取或写入文件时不用关心底层的硬盘结构， Linux 内核中的软件层为用户程序提供了一个 VFS（ Virtual File System，虚拟文件系统） 接口，这样用户实际上在操作文件时就是统一对这个虚拟文件系统进行操作了。图 6-5 所示为 VFS 的架 构示意图。从中可见，实际文件系统在 VFS 下隐藏了自己的特性和细节，这样用户在日常使用时会觉得“文件系统都是一样的” ，也就可以随意使用各种命令在任何文件系统中进行各种操作了（比如使用 cp 命令来复制文件）。",-1),c=t("figure",null,[t("img",{src:l,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),p=[i,s,a,c];function E(u,B){return n(),o("div",null,p)}const d=e(r,[["render",E],["__file","3、文件系统.html.vue"]]),h=JSON.parse('{"path":"/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/3%E3%80%81%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html","title":"03-文件系统","lang":"zh-CN","frontmatter":{"title":"03-文件系统","order":3,"icon":"lightbulb","description":"用户在硬件存储设备中执行的文件建立、写入、读取、修改、转存与控制等操作都是依靠文件系统 来完成的。文件系统的作用是合理规划硬盘，以保证用户正常的使用需求。 Linux系统支持数十种的文 件系统，而最常见的文件系统如下所示。 Ext3：是一款日志文件系统，能够在系统异常宕机时避免文件系统资料丢失，并能自动修复数据的不一致 与错误。然而，当硬盘容量较大时，...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/3%E3%80%81%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"03-文件系统"}],["meta",{"property":"og:description","content":"用户在硬件存储设备中执行的文件建立、写入、读取、修改、转存与控制等操作都是依靠文件系统 来完成的。文件系统的作用是合理规划硬盘，以保证用户正常的使用需求。 Linux系统支持数十种的文 件系统，而最常见的文件系统如下所示。 Ext3：是一款日志文件系统，能够在系统异常宕机时避免文件系统资料丢失，并能自动修复数据的不一致 与错误。然而，当硬盘容量较大时，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-文件系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.12,"words":635},"filePathRelative":"note/centos7/6、存储结构与磁盘划分/3、文件系统.md","autoDesc":true}');export{d as comp,h as data};
