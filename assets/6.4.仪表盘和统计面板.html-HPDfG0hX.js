import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as a}from"./app-CAdWGPj0.js";const t="/vuepress/assets/2023-10-28_210503_1815950.9220304225987445-CAF3rZ6A.png",n="/vuepress/assets/2023-10-28_210503_0683400.688175371213306-D7_yNnk9.png",o="/vuepress/assets/2023-10-28_210502_4617790.4299921736476261-CZo0UbIl.png",r="/vuepress/assets/2023-10-28_210502_9075160.23085906630190467-Bwhefnak.png",l="/vuepress/assets/2023-10-28_210503_3082990.22145568830872864-DQvtgYFI.png",p="/vuepress/assets/2023-10-28_210502_2690890.7735009944944216-dGz0A66X.png",d="/vuepress/assets/2023-10-28_210503_4368410.923124989042269-DdYHMkY5.png",c="/vuepress/assets/2023-10-28_210503_6823130.19471906713429799-B9JeBjj4.png",h={},g=a('<h1 id="一、仪表盘" tabindex="-1"><a class="header-anchor" href="#一、仪表盘"><span>一、仪表盘</span></a></h1><p>如果想展示与最大值和最小值相关的数据，我们可以选择使用仪表盘面板，比如我们用一个仪表盘面板来展示内存使用率。</p><h2 id="_1、标准仪表盘" tabindex="-1"><a class="header-anchor" href="#_1、标准仪表盘"><span>1、标准仪表盘</span></a></h2><p>在 Dashboard 页面上点击创建一个新的空面板，在面边编辑器右上方选择 <code>Gauge</code> 类型的面板：</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后添加如下所示的查询语句，获取内存使用率：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>(1 - node_memory_MemAvailable_bytes{instance=~&quot;$instance&quot;}/node_memory_MemTotal_bytes{instance=~&quot;$instance&quot;} )*100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2、条形仪表盘" tabindex="-1"><a class="header-anchor" href="#_2、条形仪表盘"><span>2、条形仪表盘</span></a></h2><p>除了上面标准的仪表盘面板之外，还有条形仪表盘，该面板可以显示一个或多个条形仪表，同样我们可以用来展示 CPU 使用率、内存使用率等。比如这里我们用条形仪表盘来进行展示。</p><p>点击添加一个新的空面板，在面板编辑器右侧选择 <code>Bar gauge</code>：</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#cpu使用率promql表达式：</span></span>
<span class="line"><span>(1 - sum(rate(node_cpu_seconds_total{mode=&quot;idle&quot;,instance=~&quot;$instance&quot;}[$interval])) by (instance) / sum(rate(node_cpu_seconds_total{instance=~&quot;$instance&quot;}[$interval])) by (instance) ) * 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#内存使用率promql表达式：</span></span>
<span class="line"><span>(1 - node_memory_MemAvailable_bytes{instance=~&quot;$instance&quot;}/node_memory_MemTotal_bytes{instance=~&quot;$instance&quot;} )*100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="二、统计面板" tabindex="-1"><a class="header-anchor" href="#二、统计面板"><span>二、统计面板</span></a></h1><p>统计面板可以用于显示一个大的统计值和一个可选的背景颜色，我们可以使用阈值来控制背景或颜色值，效果如下所示：</p><p>下面我们使用该面板来统计几个监控数据，比如节点运行时间、CPU 核数、总内存大小等等。</p><h2 id="_1、文本模式" tabindex="-1"><a class="header-anchor" href="#_1、文本模式"><span>1、文本模式</span></a></h2><p>首先创建一个空的面板，选择使用 <code>Stat</code> 面板：</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们以显示系统运行时间为列：</p><p>promql表达式为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>avg(time() - node_boot_time_seconds{instance=~&quot;$instance&quot;})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们把设置单位为 <code>seconds (s)</code>，并且在<code>Thresholds</code>根据设置的值展示不同颜色，比如这里我们设置阈值在200 和 300 秒的时候显示不同的颜色，因为运行时间超过了300s，所以当前显示指定的颜色。如下图：</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以同样的方式，我们在添加总内存的大小：</p><p>promql表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_memory_MemTotal_bytes{instance=~&quot;$instance&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>完成后如下图：</p><p>我们设置单位为 <code>bytes(IEC)</code>，并且在<code>Thresholds</code>根据设置不同阀值展示不同颜色。因为内存总大小当前的值超过了3，所以显示深蓝色</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2、背景模式" tabindex="-1"><a class="header-anchor" href="#_2、背景模式"><span>2、背景模式</span></a></h2><p>可以在stat styles里面设置背景，如下图：</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',34),u=[g];function _(m,b){return s(),i("div",null,u)}const k=e(h,[["render",_],["__file","6.4.仪表盘和统计面板.html.vue"]]),y=JSON.parse('{"path":"/note/Prometheus/6.4.%E4%BB%AA%E8%A1%A8%E7%9B%98%E5%92%8C%E7%BB%9F%E8%AE%A1%E9%9D%A2%E6%9D%BF.html","title":"6.4.仪表盘和统计面板","lang":"zh-CN","frontmatter":{"title":"6.4.仪表盘和统计面板","order":39,"icon":"lightbulb","description":"一、仪表盘 如果想展示与最大值和最小值相关的数据，我们可以选择使用仪表盘面板，比如我们用一个仪表盘面板来展示内存使用率。 1、标准仪表盘 在 Dashboard 页面上点击创建一个新的空面板，在面边编辑器右上方选择 Gauge 类型的面板： 然后添加如下所示的查询语句，获取内存使用率： 2、条形仪表盘 除了上面标准的仪表盘面板之外，还有条形仪表盘，该面...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/Prometheus/6.4.%E4%BB%AA%E8%A1%A8%E7%9B%98%E5%92%8C%E7%BB%9F%E8%AE%A1%E9%9D%A2%E6%9D%BF.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"6.4.仪表盘和统计面板"}],["meta",{"property":"og:description","content":"一、仪表盘 如果想展示与最大值和最小值相关的数据，我们可以选择使用仪表盘面板，比如我们用一个仪表盘面板来展示内存使用率。 1、标准仪表盘 在 Dashboard 页面上点击创建一个新的空面板，在面边编辑器右上方选择 Gauge 类型的面板： 然后添加如下所示的查询语句，获取内存使用率： 2、条形仪表盘 除了上面标准的仪表盘面板之外，还有条形仪表盘，该面..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6.4.仪表盘和统计面板\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、标准仪表盘","slug":"_1、标准仪表盘","link":"#_1、标准仪表盘","children":[]},{"level":2,"title":"2、条形仪表盘","slug":"_2、条形仪表盘","link":"#_2、条形仪表盘","children":[]},{"level":2,"title":"1、文本模式","slug":"_1、文本模式","link":"#_1、文本模式","children":[]},{"level":2,"title":"2、背景模式","slug":"_2、背景模式","link":"#_2、背景模式","children":[]}],"git":{},"readingTime":{"minutes":2.06,"words":618},"filePathRelative":"note/Prometheus/6.4.仪表盘和统计面板.md","autoDesc":true}');export{k as comp,y as data};
