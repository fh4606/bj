import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as t,e as s}from"./app-yH_6ilSD.js";const a="/bj/assets/1695700169.3512988-Caa7dLEl.jpeg",n="/bj/assets/1695700169.3721123-C22RkHS1.jpeg",l={},r=s('<p>某些时候当Linux系统下划分了新的分区后，需要将这些分区设置为开机自动挂载，否则， Linux是 无法使用新建的分区的。 /etc/fstab 文件负责配置Linux开机时自动挂载的分区。我们通过把新挂载的 磁盘或者光盘映像文件ISO等挂载信息写入到fstab中，以实现开机自动挂载，保证挂载文件不会丢失等 情况。</p><p>实例：我们查看fstab文件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> [root@linux ~]# cat /etc/fstab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明：我们以第一个为例，第一个框为挂载的原目录，第二个框为挂载后的目录，第三个框为挂载的文 件格式，第四个和第五个默认，我们在进行编辑自动挂载的时候需要添加前三个框的内容，后两个默</p><p>认。</p><p>挂载磁盘及ISO文件的时候有两种写法，第一种是文件路径写法如图所示，第二种UUID写法（UUID就 相当于文件的身份证号码一样），查看磁盘和ISO文件UUID的命令是： blkid，如下图所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@linux ~]# blkid</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们以/dev/vdb1: UUID=&quot;a70731fd-418b-4644-b280-66c9a6125085&quot; TYPE=&quot;xfs&quot;为例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1 UUID=&quot;a70731fd-418b-4644-b280-66c9a6125085&quot; //UUID</span></span>
<span class="line"><span>2 TYPE=&quot;xfs&quot; //文件格式为xfs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在写入fstab使可以有两种写法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>/dev/vdb1 /opt xfs defaults 0 0</span></span>
<span class="line"><span>UUID=&quot;a70731fd-418b-4644-b280-66c9a6125085&quot; /opt xfs defaults 0 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐大家使用第二种写法，因为所有文件和用户的id是唯一的。</p>`,14),o=[r];function d(p,c){return t(),i("div",null,o)}const b=e(l,[["render",d],["__file","6、配置挂载文件开机自动挂载（永久挂载）.html.vue"]]),E=JSON.parse('{"path":"/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/6%E3%80%81%E9%85%8D%E7%BD%AE%E6%8C%82%E8%BD%BD%E6%96%87%E4%BB%B6%E5%BC%80%E6%9C%BA%E8%87%AA%E5%8A%A8%E6%8C%82%E8%BD%BD%EF%BC%88%E6%B0%B8%E4%B9%85%E6%8C%82%E8%BD%BD%EF%BC%89.html","title":"06-开机挂载","lang":"zh-CN","frontmatter":{"title":"06-开机挂载","order":6,"icon":"lightbulb","description":"某些时候当Linux系统下划分了新的分区后，需要将这些分区设置为开机自动挂载，否则， Linux是 无法使用新建的分区的。 /etc/fstab 文件负责配置Linux开机时自动挂载的分区。我们通过把新挂载的 磁盘或者光盘映像文件ISO等挂载信息写入到fstab中，以实现开机自动挂载，保证挂载文件不会丢失等 情况。 实例：我们查看fstab文件： 说明...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/centos7/6%E3%80%81%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E7%A3%81%E7%9B%98%E5%88%92%E5%88%86/6%E3%80%81%E9%85%8D%E7%BD%AE%E6%8C%82%E8%BD%BD%E6%96%87%E4%BB%B6%E5%BC%80%E6%9C%BA%E8%87%AA%E5%8A%A8%E6%8C%82%E8%BD%BD%EF%BC%88%E6%B0%B8%E4%B9%85%E6%8C%82%E8%BD%BD%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"06-开机挂载"}],["meta",{"property":"og:description","content":"某些时候当Linux系统下划分了新的分区后，需要将这些分区设置为开机自动挂载，否则， Linux是 无法使用新建的分区的。 /etc/fstab 文件负责配置Linux开机时自动挂载的分区。我们通过把新挂载的 磁盘或者光盘映像文件ISO等挂载信息写入到fstab中，以实现开机自动挂载，保证挂载文件不会丢失等 情况。 实例：我们查看fstab文件： 说明..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06-开机挂载\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.28,"words":385},"filePathRelative":"note/centos7/6、存储结构与磁盘划分/6、配置挂载文件开机自动挂载（永久挂载）.md","autoDesc":true}');export{b as comp,E as data};
