import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as a}from"./app-DuswJAHG.js";const t="/vuepress/assets/2023-10-28_210111_7691250.5798848157670257-HXzKAUtk.png",n="/vuepress/assets/2023-10-28_210111_7923990.8968931130706862-B0S7YQVI.png",o={},l=a('<p>PromQL (Prometheus Query Language) 是 Prometheus 自己开发的数据查询 DSL 语言，语言表现力非常丰富，内置函数很多，在日常数据可视化(Grafana)以及rule 告警中都会使用到它。</p><p><a href="https://prometheus.io/docs/prometheus/latest/querying/basics/" target="_blank" rel="noopener noreferrer">官网地址</a></p><h2 id="_1、promql数据类型" tabindex="-1"><a class="header-anchor" href="#_1、promql数据类型"><span>1、PromQL数据类型</span></a></h2><p>在Prometheus的表达式语言中，PromQL数据类型归类为以下四种：</p><ul><li><p>瞬时向量（instant vector），是指同一时刻的一组时间序列，每个时间序列包含一个样本，所有样本共享相同的时间戳，即每个时序只有一个点。</p></li><li><p>区间向量（range vector），是指在任何一个时间范围内的一组时间序列，包含每个时间序列随时间变化的一系列数据点，这时每个时序有多个点。</p></li><li><p>标量（scalar），即纯量数据，一个简单的数字浮点值，只有一个数字，没有时序。</p></li><li><p>字符串（string），一个目前未被使用的简单字符串值。</p></li></ul><h3 id="瞬时向量-instant-vector" tabindex="-1"><a class="header-anchor" href="#瞬时向量-instant-vector"><span>瞬时向量（Instant vector）</span></a></h3><p>我们在Prometheus的查询页面输入指标 <code>node_memory_Active_bytes</code> 进行查询。</p><p>返回如下的结果：</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="区间向量-range-vector" tabindex="-1"><a class="header-anchor" href="#区间向量-range-vector"><span>区间向量（Range vector）</span></a></h3><p>我们在Prometheus的查询页面输入一个查询语句 <code>node_memory_Active_bytes[1m]</code> 进行查询。</p><p>返回如下的结果：</p><figure><img src="'+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以上的查询语句是查询 最近一分钟数据，因为采集的周期是 15s 所以[1m]每一个时序会有4个数据。</p><p>区间向量（Range vector）类型数据是指时序有一个时间区间的数据，这种类型的数据成为区间向量（Range vector）。</p><h3 id="标量-scalar" tabindex="-1"><a class="header-anchor" href="#标量-scalar"><span>标量（Scalar）</span></a></h3><p>标量只有一个数字，没有时序。</p><p>例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1024</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要注意的是，当使用表达式count(http_requests_total)，返回的数据类型，依然是瞬时向量。用户可以通过内置函数scalar()将单个瞬时向量转换为标量。</p><h3 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string"><span>字符串（String）</span></a></h3><p>直接使用字符串，作为PromQL表达式，则会直接返回字符串。(目前未被使用)</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&quot;this is a string&quot;</span></span>
<span class="line"><span>&#39;these are unescaped: </span></span>
<span class="line"><span> \\ 	&#39;</span></span>
<span class="line"><span>\`these are not unescaped: </span></span>
<span class="line"><span> &#39; &quot; 	\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、时间序列过滤器" tabindex="-1"><a class="header-anchor" href="#_2、时间序列过滤器"><span>2、时间序列过滤器</span></a></h2><h3 id="瞬时向量过滤器" tabindex="-1"><a class="header-anchor" href="#瞬时向量过滤器"><span>瞬时向量过滤器</span></a></h3><p>瞬时向量过滤器允许在指定的时间戳内选择一组时间序列和每个时间序列的单个样本值。在最简单的形式中，近指定指标（metric）名称。这将生成包含此指标名称的所有时间序列的元素的瞬时向量。</p><p>例如：选择指标名称为 <code>node_cpu_seconds_total</code> 的所有时间序列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_cpu_seconds_total</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以通过向花括号<code>{}</code>里附加一组标签来进一步过滤时间序列。</p><p>例如：选择指标名称为 <code>node_cpu_seconds_total</code>，<code>instance</code> 标签值为 <code>Prometheus服务器</code>，<code>mode</code> 标签值为 <code>idle</code> 的时间序列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_cpu_seconds_total{ instance=&quot;Prometheus服务器&quot;, mode=&quot;idle&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>PromQL 还支持用户根据时间序列的标签匹配模式来对时间序列进行过滤，目前主要支持两种匹配模式：完全匹配和正则匹配。总共有以下几种标签匹配运算符：</p><ul><li><p><code>=</code> : 选择与提供的字符串完全相同的标签。</p></li><li><p><code>!=</code> : 选择与提供的字符串不相同的标签。</p></li><li><p><code>=~</code> : 选择正则表达式与提供的字符串（或子字符串）相匹配的标签。</p></li><li><p><code>!~</code> : 选择正则表达式与提供的字符串（或子字符串）不匹配的标签。</p></li></ul><p>例如：选择指标名称为 <code>node_cpu_seconds_total</code>，mode为 <code>idle</code>、<code>user</code> 或 <code>system</code>，<code>cpu!=0</code> 的时间序列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_cpu_seconds_total{mode=~&quot;idle|user|system&quot;,cpu!=&quot;0&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>没有指定标签的标签过滤器会选择该指标名称的所有时间序列。</p><p>Prometheus 中的所有正则表达式都使用 <a href="https://github.com/google/re2/wiki/Syntax" target="_blank" rel="noopener noreferrer">RE2语法</a>。</p><p>所有的 PromQL 表达式必须至少包含一个指标名称，或者一个不会匹配到空字符串的标签过滤器。</p><p>除了使用 <code>&lt;metric name&gt;{label=value}</code> 的形式以外，我们还可以使用内置的 <code>__name__</code> 标签来指定监控指标名称。例如：表达式 <code>node_cpu_seconds_total</code> 等效于 <code>{__name__=&quot;node_cpu_seconds_total&quot;}</code></p><h3 id="区间向量过滤器" tabindex="-1"><a class="header-anchor" href="#区间向量过滤器"><span>区间向量过滤器</span></a></h3><p>区间向量与瞬时向量的工作方式类似，唯一的差异在于在区间向量表达式中我们需要定义时间选择的范围，时间范围通过时间范围选择器 <code>[]</code> 进行定义，以指定应为每个返回的区间向量样本值中提取多长的时间范围。</p><p>时间范围通过数字来表示，单位可以使用以下其中之一的时间单位：</p><ul><li><p><code>s</code> - 秒</p></li><li><p><code>m</code> - 分钟</p></li><li><p><code>h</code> - 小时</p></li><li><p><code>d</code> - 天</p></li><li><p><code>w</code> - 周</p></li><li><p><code>y</code> - 年</p></li></ul><p>例如：选择在过去 5 分钟内指标名称为 <code>node_cpu_seconds_total</code>，<code>job</code> 标签值为 <code>prometheus</code> 的所有时间序列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_cpu_seconds_total{ instance=&quot;Prometheus服务器&quot;, mode=&quot;idle&quot;}[1m]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="时间位移操作" tabindex="-1"><a class="header-anchor" href="#时间位移操作"><span>时间位移操作</span></a></h3><p>在瞬时向量表达式或者区间向量表达式中，都是以当前时间为基准：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_cpu_seconds_total{} # 瞬时向量表达式，选择当前最新的数据</span></span>
<span class="line"><span>node_cpu_seconds_total{}[5m] # 区间向量表达式，选择以当前时间为基准，5分钟内的数据</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果我们想查询，5 分钟前的瞬时样本数据，或昨天一天的区间内的样本数据呢? 这个时候我们就可以使用位移操作，位移操作的关键字为 <code>offset</code>。</p><p>例如，以下表达式返回相对于当前查询时间过去 5 分钟的 <code>node_cpu_seconds_total</code> 值：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_cpu_seconds_total{ instance=&quot;Prometheus服务器&quot;, mode=&quot;idle&quot;} offset 5m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>注意：</strong><code>offset</code> 关键字需要紧跟在选择器<code>{}</code>后面。以下表达式是正确的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sum(node_cpu_seconds_total{ instance=&quot;Prometheus服务器&quot;, mode=&quot;idle&quot;} offset 5m)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面的表达式是不合法的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sum(node_cpu_seconds_total{ instance=&quot;Prometheus服务器&quot;, mode=&quot;idle&quot;}) offset 5m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该操作同样适用于区间向量。以下表达式返回指标 <code>node_cpu_seconds_total</code> 一周前的 5 分钟之内的 cpu 空闲率：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>rate(node_cpu_seconds_total{ instance=&quot;Prometheus服务器&quot;, mode=&quot;idle&quot;}[5m] offset 1w)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>sum是聚合运算符，rate是内置函数，后面会讲</p>`,58),d=[l];function r(c,p){return s(),i("div",null,d)}const m=e(o,[["render",r],["__file","4.1.PromQL 基础使用.html.vue"]]),g=JSON.parse('{"path":"/note/Prometheus/4.1.PromQL%20%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8.html","title":"4.1.PromQL 基础使用","lang":"zh-CN","frontmatter":{"title":"4.1.PromQL 基础使用","order":24,"icon":"lightbulb","description":"PromQL (Prometheus Query Language) 是 Prometheus 自己开发的数据查询 DSL 语言，语言表现力非常丰富，内置函数很多，在日常数据可视化(Grafana)以及rule 告警中都会使用到它。 官网地址 1、PromQL数据类型 在Prometheus的表达式语言中，PromQL数据类型归类为以下四种： 瞬时向量...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/Prometheus/4.1.PromQL%20%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"4.1.PromQL 基础使用"}],["meta",{"property":"og:description","content":"PromQL (Prometheus Query Language) 是 Prometheus 自己开发的数据查询 DSL 语言，语言表现力非常丰富，内置函数很多，在日常数据可视化(Grafana)以及rule 告警中都会使用到它。 官网地址 1、PromQL数据类型 在Prometheus的表达式语言中，PromQL数据类型归类为以下四种： 瞬时向量..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.1.PromQL 基础使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、PromQL数据类型","slug":"_1、promql数据类型","link":"#_1、promql数据类型","children":[{"level":3,"title":"瞬时向量（Instant vector）","slug":"瞬时向量-instant-vector","link":"#瞬时向量-instant-vector","children":[]},{"level":3,"title":"区间向量（Range vector）","slug":"区间向量-range-vector","link":"#区间向量-range-vector","children":[]},{"level":3,"title":"标量（Scalar）","slug":"标量-scalar","link":"#标量-scalar","children":[]},{"level":3,"title":"字符串（String）","slug":"字符串-string","link":"#字符串-string","children":[]}]},{"level":2,"title":"2、时间序列过滤器","slug":"_2、时间序列过滤器","link":"#_2、时间序列过滤器","children":[{"level":3,"title":"瞬时向量过滤器","slug":"瞬时向量过滤器","link":"#瞬时向量过滤器","children":[]},{"level":3,"title":"区间向量过滤器","slug":"区间向量过滤器","link":"#区间向量过滤器","children":[]},{"level":3,"title":"时间位移操作","slug":"时间位移操作","link":"#时间位移操作","children":[]}]}],"git":{},"readingTime":{"minutes":4.9,"words":1470},"filePathRelative":"note/Prometheus/4.1.PromQL 基础使用.md","autoDesc":true}');export{m as comp,g as data};
