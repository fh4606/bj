import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o,d as a}from"./app-CdRwZrpj.js";const i="/assets/1695699129.6298676-WdWDW7OM.jpeg",n="/assets/1695699129.6427279-3y0WWyc9.jpeg",s="/assets/1695699129.6539683-CXcs6q7W.jpeg",p={},r=a('<p>在 Linux 系统中一切都是文件，硬件设备也不例外。既然是文件，就必须有文件名称。系统内核中 的 udev 设备管理器会自动把硬件名称规范起来，目的是让用户通过设备文件的名字可以猜出设备大致 的属性以及分区信息等；这对于陌生的设备来说特别方便。另外， udev设备管理器的服务会一直以守 护进程的形式运行并侦听内核发出的信号来管理/dev 目录下的设备文件。 Linux 系统中常见的硬件设 备的文件名称如表 6-2 所示。</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由于现在的 IDE 设备已经很少见了，所以一般的硬盘设备都会是以“/dev/sd”开头的。而一台主机上可以有多块硬盘，因此系统采用 a ～p 来代表 16 块不同的硬盘（默认从 a 开始分配），而且硬盘的分区编号也很有讲究： 主分区或扩展分区的编号从 1 开始，到 4 结束； 逻辑分区从编号 5 开始。</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明1：在物理磁盘中 “sda”并不一定表示物理插槽中的第一个插槽上的硬盘， /dev 目录中 sda 设备之 所以是 a ，并不是由插槽决定的，而是由系统内核的识别顺序来决定的，而恰巧很多主板的插槽顺序就 是系统内核的识别顺序，因此才会被命名为/dev/sda。大家以后在使用 iSCSI 网络存储设备时就会发 现，明明主板上第二个插槽是空着的，但系统却能识别到/dev/sdb 这个设备就是这个道理。</p><p>说明2：分区的编号不一定代表分区的个数。比如 sda3 表示这是设备上的第三个分区，而学员在做实验 的时候确实也会得出这样的结果，但是这个理论知识是错误的，因为分区的数字编码不一定是强制顺延 下来的，也有可能是手工指定的。因此 sda3 只能表示是编号为 3 的分区，而不能判断 sda 设备上已经 存在了 3 个分区。</p><p>下图说明： /dev/sda5 这个文件设备名称包含的信息：</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>首先， /dev/目录中保存的应当是硬件设备文件；其次， sd 表示是存储设备；然后， a 表示系统 中同类接口中第一个被识别到的设备，最后， 5 表示这个设备是一个逻辑分区。 一言以蔽之， “/dev/sda5”表示的就是“这是系统中第一块被识别到的硬件设备中分区编号为 5 的逻辑分区的设备 文件”。</p>',9),d=[r];function c(E,l){return o(),t("div",null,d)}const g=e(p,[["render",c],["__file","2、物理设备的命名的规则.html.vue"]]),u=JSON.parse('{"path":"/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/2%E3%80%81%E7%89%A9%E7%90%86%E8%AE%BE%E5%A4%87%E7%9A%84%E5%91%BD%E5%90%8D%E7%9A%84%E8%A7%84%E5%88%99.html","title":"02-设备命名规则","lang":"zh-CN","frontmatter":{"title":"02-设备命名规则","order":2,"icon":"lightbulb","description":"在 Linux 系统中一切都是文件，硬件设备也不例外。既然是文件，就必须有文件名称。系统内核中 的 udev 设备管理器会自动把硬件名称规范起来，目的是让用户通过设备文件的名字可以猜出设备大致 的属性以及分区信息等；这对于陌生的设备来说特别方便。另外， udev设备管理器的服务会一直以守 护进程的形式运行并侦听内核发出的信号来管理/dev 目录下的设备...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/2%E3%80%81%E7%89%A9%E7%90%86%E8%AE%BE%E5%A4%87%E7%9A%84%E5%91%BD%E5%90%8D%E7%9A%84%E8%A7%84%E5%88%99.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"02-设备命名规则"}],["meta",{"property":"og:description","content":"在 Linux 系统中一切都是文件，硬件设备也不例外。既然是文件，就必须有文件名称。系统内核中 的 udev 设备管理器会自动把硬件名称规范起来，目的是让用户通过设备文件的名字可以猜出设备大致 的属性以及分区信息等；这对于陌生的设备来说特别方便。另外， udev设备管理器的服务会一直以守 护进程的形式运行并侦听内核发出的信号来管理/dev 目录下的设备..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-设备命名规则\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.37,"words":711},"filePathRelative":"note/centos7/6、存储结构与磁盘划分/2、物理设备的命名的规则.md","autoDesc":true}');export{g as comp,u as data};
