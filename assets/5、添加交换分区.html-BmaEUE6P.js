import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as a}from"./app-DuswJAHG.js";const n="/vuepress/assets/1695699963.3568661-BCy86UbJ.jpeg",t="/vuepress/assets/1695699963.387709-Dtem78tQ.jpeg",l="/vuepress/assets/1695699963.4091847-ihDw3bQX.jpeg",r="/vuepress/assets/1695699963.4360998-kAVCullz.jpeg",d="/vuepress/assets/1695699963.4674432-DpoJ3Zax.jpeg",p={},o=a('<p>SWAP （交换）分区是一种通过在硬盘中预先划分一定的空间，然后将把内存中暂时不常用的数据 临时存放到硬盘中，以便腾出物理内存空间让更活跃的程序服务来使用的技术，其设计目的是为了解决 真实物理内存不足的问题。 但由于交换分区毕竟是通过硬盘设备读写数据的，速度肯定要比物理内存 慢，所以只有当真实的物理内存耗尽后才会调用交换分区的资源。交换分区的创建过程与前文讲到的挂 载并使用存储设备的过程非常相似。在对存储设备进行分区操作前，有必要先说一下交换分区的划分建 议：在生产环境中，交换分区的大小一般为真实物理内存的 1.5～2 倍，</p><p>实例：创建一个交换分区，分区大小为4G（本机linux系统内存为： 2G），我们添加一块硬盘做交换分 区（添加过程省略），添加完成之后我们使用命令lsblk查看一下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@linux ~]# lsblk</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对此磁盘（vdc）进行分区：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@linux ~]# fdisk /dev/vdc</span></span>
<span class="line"><span>Welcome to fdisk (util-linux 2.23.2).</span></span>
<span class="line"><span>Changes will remain in memory only, until you decide to write them. Be careful before using the write command.</span></span>
<span class="line"><span>Device does not contain a recognized partition table</span></span>
<span class="line"><span>Building a new DOS disklabel with disk identifier 0x36730f48.</span></span>
<span class="line"><span>Command (m for help): n //新建分区</span></span>
<span class="line"><span>Partition type:</span></span>
<span class="line"><span>p primary (0 primary, 0 extended, 4 free)</span></span>
<span class="line"><span>e extended</span></span>
<span class="line"><span>Select (default p): p //新建主分区</span></span>
<span class="line"><span>Partition number (1-4, default 1): 1 //敲击回车默认分区为编号为1，或者自定义</span></span>
<span class="line"><span>First sector (2048-8388607, default 2048): //默认敲回车</span></span>
<span class="line"><span>Using default value 2048</span></span>
<span class="line"><span>Last sector, +sectors or +size{K,M,G} (2048-8388607, default 8388607): //</span></span>
<span class="line"><span>敲击回车默认使用全部大小</span></span>
<span class="line"><span>Using default value 8388607</span></span>
<span class="line"><span>Partition 1 of type Linux and of size 4 GiB is set</span></span>
<span class="line"><span>Command (m for help): w //保存并推出</span></span>
<span class="line"><span>The partition table has been altered!</span></span>
<span class="line"><span>Calling ioctl() to re-read partition table.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同步分区信息到内核</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# partprobe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>再次使用命令lsblk命令查看磁盘分区情况：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# lsblk</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用交换分区专用格式化命令mkswap，对新建分的主分区进行格式化操作：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# mkswap /dev/vdc1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用swapon命令把准备好的swap分区正式挂载到文件系统中：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# swapon /dev/vdc1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用命令： free -m命令查看交换分区大小变化：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# free -m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最后能够使交换分区设备在重启后依然生效，我们需要配置永久挂载点：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# vi /etc/fstab //编辑fstab文件，尾行加入如下命令：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',22),c=[o];function h(u,g){return s(),i("div",null,c)}const v=e(p,[["render",h],["__file","5、添加交换分区.html.vue"]]),k=JSON.parse('{"path":"/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/5%E3%80%81%E6%B7%BB%E5%8A%A0%E4%BA%A4%E6%8D%A2%E5%88%86%E5%8C%BA.html","title":"05-添加交换分区","lang":"zh-CN","frontmatter":{"title":"05-添加交换分区","order":5,"icon":"lightbulb","description":"SWAP （交换）分区是一种通过在硬盘中预先划分一定的空间，然后将把内存中暂时不常用的数据 临时存放到硬盘中，以便腾出物理内存空间让更活跃的程序服务来使用的技术，其设计目的是为了解决 真实物理内存不足的问题。 但由于交换分区毕竟是通过硬盘设备读写数据的，速度肯定要比物理内存 慢，所以只有当真实的物理内存耗尽后才会调用交换分区的资源。交换分区的创建过程与...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/5%E3%80%81%E6%B7%BB%E5%8A%A0%E4%BA%A4%E6%8D%A2%E5%88%86%E5%8C%BA.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"05-添加交换分区"}],["meta",{"property":"og:description","content":"SWAP （交换）分区是一种通过在硬盘中预先划分一定的空间，然后将把内存中暂时不常用的数据 临时存放到硬盘中，以便腾出物理内存空间让更活跃的程序服务来使用的技术，其设计目的是为了解决 真实物理内存不足的问题。 但由于交换分区毕竟是通过硬盘设备读写数据的，速度肯定要比物理内存 慢，所以只有当真实的物理内存耗尽后才会调用交换分区的资源。交换分区的创建过程与..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05-添加交换分区\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.22,"words":666},"filePathRelative":"note/centos7/6、存储结构与磁盘划分/5、添加交换分区.md","autoDesc":true}');export{v as comp,k as data};
