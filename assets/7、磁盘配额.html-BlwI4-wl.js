import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,d as a}from"./app-Bna6fuy1.js";const t="/assets/1695700279.0177443-B7ZtzB_8.jpeg",n="/assets/1695700279.0275881-LT_7d1Tr.jpeg",r="/assets/1695700279.0440025-ATNwv-YA.jpeg",l="/assets/1695700279.0622275-CsIdotIl.jpeg",d="/assets/1695700279.083167-9xqyjCvv.jpeg",o="/assets/1695700279.096769-DfhgkjQr.jpeg",h="/assets/1695700279.1077707-BQJJ6aJD.jpeg",c="/assets/1695700279.119609-D2AOq3rh.jpeg",p={},g=a(`<p>Linux 系统的设计初衷就是让许多人一起使用并执行各自的任务从而成为多用户、多任务的操作系 统。但是，硬件资源是固定且有限的，如果某些用户不断地在 Linux 系统上创建文件或者存放电影，硬 盘空间总有一天会被占满。针对这种情况， root管理员就需要使用磁盘容量配额服务来限制某位用户或 某个用户组针对特定文件夹可以使用的最大硬盘空间或最大文件个数， 一旦达到这个最大值就不再允许 继续使用。可以使用 quota命令进行磁盘容量配额管理， 从而限制用户的硬盘可用容量或所能创建的最 大文件个数。 quota命令还有软限制和硬限制的功能。</p><p>1 软限制：当达到软限制时会提示用户，但仍允许用户在限定的额度内继续使用。 2 硬限制：当达到硬限制时会提示用户，且强制终止用户的操作。</p><p>说明：最本实验之前我们现在根目录下创建连续目录： /zxw/ceshi，对新创的目录增加其他人写的权 限，保证所有用户能够正常访问。并创建用户： admin，密码为： admin，用于测试。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@linux ~]# mkdir -p /zxw/ceshi &amp;&amp; chown -Rf 777 /zxw/ceshi &amp;&amp; useradd</span></span>
<span class="line"><span>admin &amp;&amp; echo&quot;admin&quot; | passwd --stdin admin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>1、命令： xfs_quota，作用：专门针对xfs文件系统来管理磁盘容量配额服务的命令，格式为：xfs_quota【参数】【文件系统】，其中-c参数用于以参数的形式设置要执行的命令， -x参数是专家模 式。</p><p>实例1：我们设置ceshi用户对/ceshi目录的quota磁盘容量配额。具体限制包括：硬盘用量软硬限制分 别为： 3M和6M，创建文件数量软硬限制分别为： 3个和6个，做此试验之前先添加一块磁盘，新建一个 分区，并挂载到/ceshi目录下，文件格式为xfs，并设置开机自动挂载参数，其参数如图所示（分区和挂 载过程省略）：</p><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明：在centos7中，想让设备支持quota磁盘容量配额服务，使用的是uquota参数，重启后可通过以 下命令查看：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@host-172-16-0-115 ~]# mount | grep ceshi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（1）创建用户用于测试，用户名为： ceshi，密码为： ceshi。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@host-172-16-0-115 ~]# useradd ceshi &amp;&amp; echo &quot;ceshi&quot; | passwd --stdin ceshi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（2）针对/ceshi目录给所有权限，保证用户能够正常写入：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@host-172-16-0-115 ~]# chmod -Rf 777 /ceshi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>（3）使用命令vfs_quato创建软硬限制：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@host-172-16-0-115 ~]# xfs\\_quota -x -c &#39;limit bsoft=3m bhard=6m isoft=3 ihard=6 ceshi&#39; /ceshi</span></span>
<span class="line"><span> [root@host-172-16-0-115 ~]# xfs\\_quota -x -c report /ceshi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（4）登录到ceshi用户：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@host-172-16-0-115 ~]# su - ceshi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>（5）创建一个5m的文件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[ceshi@host-172-16-0-115 ~]$</span></span>
<span class="line"><span>dd if=/dev/zero</span></span>
<span class="line"><span>of=/ceshi/ceshi</span></span>
<span class="line"><span>bs=5M</span></span>
<span class="line"><span>count=1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（6）创建一个8m的文件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[ceshi@host-172-16-0-115 ~]$ dd if=/dev/zero of=/ceshi/ceshi bs=8M count=1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明：我们可以看到当创建文件超过最大限制即硬限制的时候，会出现报错，此时磁盘配额试验成功。 2、命令： edquato，作用：修改用户quato配额限制，格式为： edquato【参数】【用户】，其中-u表 示针对某个用户进行设置， -g表示针对某个组进行设置。</p><p>实例1：接上试验，我们修改用户ceshi的限制，将硬限制由5M提高至10M：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@host-172-16-0-115 ceshi]# edquota -u ceshi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明：我们把硬限制改为10240M即1G，然后再次创建：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[ceshi@host-172-16-0-122 ~]$ dd if=/dev/zero of=/ceshi/ceshi bs=8M count=1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>综上所述：最后修改成功。</p>',34),u=[g];function m(b,k){return s(),e("div",null,u)}const _=i(p,[["render",m],["__file","7、磁盘配额.html.vue"]]),x=JSON.parse('{"path":"/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/7%E3%80%81%E7%A3%81%E7%9B%98%E9%85%8D%E9%A2%9D.html","title":"07-磁盘配额","lang":"zh-CN","frontmatter":{"title":"07-磁盘配额","order":7,"icon":"lightbulb","description":"Linux 系统的设计初衷就是让许多人一起使用并执行各自的任务从而成为多用户、多任务的操作系 统。但是，硬件资源是固定且有限的，如果某些用户不断地在 Linux 系统上创建文件或者存放电影，硬 盘空间总有一天会被占满。针对这种情况， root管理员就需要使用磁盘容量配额服务来限制某位用户或 某个用户组针对特定文件夹可以使用的最大硬盘空间或最大文件个数，...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/7%E3%80%81%E7%A3%81%E7%9B%98%E9%85%8D%E9%A2%9D.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"07-磁盘配额"}],["meta",{"property":"og:description","content":"Linux 系统的设计初衷就是让许多人一起使用并执行各自的任务从而成为多用户、多任务的操作系 统。但是，硬件资源是固定且有限的，如果某些用户不断地在 Linux 系统上创建文件或者存放电影，硬 盘空间总有一天会被占满。针对这种情况， root管理员就需要使用磁盘容量配额服务来限制某位用户或 某个用户组针对特定文件夹可以使用的最大硬盘空间或最大文件个数，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07-磁盘配额\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":3.18,"words":953},"filePathRelative":"note/centos7/6、存储结构与磁盘划分/7、磁盘配额.md","autoDesc":true}');export{_ as comp,x as data};
