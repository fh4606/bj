import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,d as a}from"./app-DuswJAHG.js";const t="/vuepress/assets/2023-10-28_210126_8216890.7889721290950061-BcDXGWRo.png",n="/vuepress/assets/2023-10-28_210126_5289550.6061965974520767-DU1IAl8n.png",l={},d=a(`<h2 id="_1、二元运算符" tabindex="-1"><a class="header-anchor" href="#_1、二元运算符"><span>1、二元运算符</span></a></h2><p>Prometheus 的查询语言支持基本的逻辑运算和算术运算。对于两个瞬时向量, <a href="https://prometheus.io/docs/prometheus/latest/querying/operators/#vector-matching" target="_blank" rel="noopener noreferrer">匹配行为</a>可以被改变。</p><h3 id="_1-1-算术二元运算符" tabindex="-1"><a class="header-anchor" href="#_1-1-算术二元运算符"><span>1.1. 算术二元运算符</span></a></h3><p>在 Prometheus 系统中支持下面的二元算术运算符：</p><ul><li><p><code>+</code> 加法</p></li><li><p><code>-</code> 减法</p></li><li><p><code>*</code> 乘法</p></li><li><p><code>/</code> 除法</p></li><li><p><code>%</code> 模</p></li><li><p><code>^</code> 幂等</p></li></ul><p>二元运算操作符支持 <code>scalar/scalar(标量/标量)</code>、<code>vector/scalar(瞬时向量/标量)</code>、和 <code>vector/vector(瞬时向量/瞬时向量)</code> 之间的操作。</p><p>在两个标量之间进行数学运算，得到的结果也是标量。</p><p>表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>(63+3)*3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>scalar	198</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>瞬时向量和标量之间进行算数运算时，算术运算符会一次作用与瞬时向量中的每一个样本值，从而得到一组新的时间序列</p><p>例如：我们通过监控指标<code>node_memory_MemTotal_bytes</code>（主机内存总大小）单位为byte,如果换成mb时。</p><p>表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_memory_MemTotal_bytes/(1024*1024)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;} 3901.07421875</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;} 3901.04296875</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>瞬时向量与瞬时向量之间进行数学运算时，过程会相对复杂一点，</p><p>运算符会依次找到与左边向量元素匹配（标签完全一致）的右边向量元素进行运算，如果没找到匹配元素，则直接丢弃。同时新的时间序列将不会包含指标名称。</p><p>例如，如果我们 <code>node_memory_MemAvailable_bytes</code>（可用内存） 和 <code>node_memory_MemTotal_bytes</code>（总内存） 获取内存可用率%，可以使用如下表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;}   73.19077778055924</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;}         69.0442359665434</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例 幂运算</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>process_open_fds ^ 3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-2-关系运算符" tabindex="-1"><a class="header-anchor" href="#_1-2-关系运算符"><span>1.2. 关系运算符</span></a></h3><p>目前，Prometheus 支持以下关系运算符：</p><ul><li><p><code>==</code> (相等)</p></li><li><p><code>!=</code> (不相等)</p></li><li><p><code>&gt;</code> (大于)</p></li><li><p><code>&lt;</code> (小于)</p></li><li><p><code>&gt;=</code> (大于等于)</p></li><li><p><code>&lt;=</code> (小于等于)</p></li></ul><p>关系运算符被应用于 <code>scalar/scalar（标量/标量）</code>、<code>vector/scalar（瞬时向量/标量）</code>，和<code>vector/vector（瞬时向量/向量）</code>。默认情况下关系运算符只会根据时间序列中样本的值，对时间序列进行过滤。我们可以通过在运算符后面使用 <code>bool</code> 修饰符来改变关系运算的默认行为。使用 bool 修改符后，关系运算不会对时间序列进行过滤，而是直接依次瞬时向量中的各个样本数据与标量的比较结果 <code>0</code> 或者 <code>1</code>。</p><p>在两个标量之间进行关系运算，必须提供 bool 修饰符，得到的结果也是标量，即 <code>0</code>（<code>false</code>）或 <code>1</code>（<code>true</code>）。</p><p>例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>2 &gt; bool 1 # 结果为 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>瞬时向量和标量之间的关系运算，这个运算符会应用到某个当前时刻的每个时序数据上，如果一个时序数据的样本值与这个标量比较的结果是 <code>false</code>，则这个时序数据被丢弃掉，如果是 <code>true</code>, 则这个时序数据被保留在结果中。如果提供了 bool 修饰符，那么比较结果是 <code>0</code> 的时序数据被丢弃掉，而比较结果是 <code>1</code> 的时序数据被保留。</p><p>例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_load1 &gt; 1        # 结果为 true 或 false</span></span>
<span class="line"><span>node_load1 &gt; bool 1   # 结果为 1 或 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>up == 1</span></span>
<span class="line"><span>up !=1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>瞬时向量与瞬时向量直接进行关系运算时，同样遵循默认的匹配模式：依次找到与左边向量元素匹配（标签完全一致）的右边向量元素进行相应的操作，如果没找到匹配元素，或者计算结果为 false，则直接丢弃。如果匹配上了，则将左边向量的度量指标和标签的样本数据写入瞬时向量。如果提供了 bool 修饰符，那么比较结果是 <code>0</code> 的时序数据被丢弃掉，而比较结果是 <code>1</code> 的时序数据（只保留左边向量）被保留。</p><p>例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_memory_MemAvailable_bytes &gt; bool node_memory_MemTotal_bytes</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>node_memory_MemAvailable_bytes &lt; bool node_memory_MemTotal_bytes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-集合运算符" tabindex="-1"><a class="header-anchor" href="#_1-3-集合运算符"><span>1.3. 集合运算符</span></a></h3><p>使用瞬时向量表达式能够获取到一个包含多个时间序列的集合，我们称为瞬时向量。 通过集合运算，可以在两个瞬时向量与瞬时向量之间进行相应的集合操作。目前，Prometheus 支持以下集合运算符：</p><ul><li><p><code>and</code> (并且)</p></li><li><p><code>or</code> (或者)</p></li><li><p><code>unless</code> (排除)</p></li></ul><p><strong>vector1 and vector2</strong> 会产生一个由vector1的元素组成的新的向量。该向量包含vector1中完全匹配vector2中的元素。。</p><p><strong>vector1 or vector2</strong> 会产生一个新的向量，该向量包含vector1的所有原始元素（标签集+值）的向量，以及vector2中没有与vector1匹配标签集的所有元素。</p><p><strong>vector1 unless vector2</strong> 会产生一个由vector1的元素组成的向量，而这些元素在vector2中没有与标签集完全匹配的元素，两个向量中的所有匹配元素都被删除。</p><ul><li>and表达式：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_cpu_seconds_total{mode=~&quot;idle|user|system&quot;} and node_cpu_seconds_total{mode=~&quot;user|system|iowait&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>#时钟不同步触发器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> min_over_time(node_timex_sync_status[1m]) == 0 and node_timex_maxerror_seconds &gt;= 16</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>or表达式</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_cpu_seconds_total{mode=~&quot;idle|user|system&quot;} or node_cpu_seconds_total{mode=~&quot;user|system|iowait&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>#状态码非200-399触发器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>probe_http_status_code &lt;= 199 OR probe_http_status_code &gt;= 400</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>unless表达式</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_cpu_seconds_total{mode=~&quot;idle|user|system&quot;} unless node_cpu_seconds_total{mode=~&quot;user|system|iowait&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2、-聚合操作" tabindex="-1"><a class="header-anchor" href="#_2、-聚合操作"><span>2、 聚合操作</span></a></h2><p>Prometheus 还提供了下列内置的聚合操作符，这些操作符作用域瞬时向量。可以将瞬时表达式返回的样本数据进行聚合，形成一个具有较少样本值的新的时间序列。</p><ul><li><p><code>sum</code> (求和)</p></li><li><p><code>min</code> (最小值)</p></li><li><p><code>max</code> (最大值)</p></li><li><p><code>avg</code> (平均值)</p></li><li><p><code>stddev</code> (标准差)</p></li><li><p><code>stdvar</code> (标准差异)</p></li><li><p><code>count</code> (计数)</p></li><li><p><code>count_values</code> (对 value 进行计数)</p></li><li><p><code>bottomk</code> (样本值最小的 k 个元素)</p></li><li><p><code>topk</code> (样本值最大的k个元素)</p></li><li><p><code>quantile</code> (分布统计)</p></li></ul><p>这些操作符被用于聚合所有标签维度，或者通过 <code>without</code> 或者 <code>by</code> 子语句来保留不同的维度。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;aggr-op&gt;([parameter,] &lt;vector expression&gt;) [without|by (&lt;label list&gt;)]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中只有 <code>count_values</code>, <code>quantile</code>, <code>topk</code>, <code>bottomk</code> 支持参数(parameter)。</p><p>without（排除标签名称）</p><p>by（保留标签名称）： 类似sql的：goup by</p><h3 id="sum结果求和" tabindex="-1"><a class="header-anchor" href="#sum结果求和"><span>sum结果求和</span></a></h3><p>表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sum(node_cpu_seconds_total) without (cpu,job,mode)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>等价于</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> sum(node_cpu_seconds_total) by (instance)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>计算prometheus http请求总量，表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sum(prometheus_http_requests_total)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="max-最大值" tabindex="-1"><a class="header-anchor" href="#max-最大值"><span>max 最大值</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>max(node_cpu_seconds_total) by (mode)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="avg-平均值" tabindex="-1"><a class="header-anchor" href="#avg-平均值"><span>avg 平均值</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>avg(node_cpu_seconds_total) by (mode)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>cpu负载&gt; 80%触发器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>100 - (avg by(instance) (rate(node_cpu_seconds_total{mode=&quot;idle&quot;}[2m])) * 100) &gt; 80</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="count-统计数量" tabindex="-1"><a class="header-anchor" href="#count-统计数量"><span>count（统计数量)</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>count(prometheus_http_requests_total)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="bottomk-统计最小的几个值" tabindex="-1"><a class="header-anchor" href="#bottomk-统计最小的几个值"><span>bottomk （统计最小的几个值）</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>bottomk(3, sum(node_cpu_seconds_total)  by (mode))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="topk-统计最大的几个值" tabindex="-1"><a class="header-anchor" href="#topk-统计最大的几个值"><span>topk （统计最大的几个值)</span></a></h3><p>类似sql：ORDER BY vaule DESC limit 3</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>topk(3, sum(node_cpu_seconds_total)  by (mode))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3、基于时间聚合" tabindex="-1"><a class="header-anchor" href="#_3、基于时间聚合"><span>3、基于时间聚合</span></a></h2><p>前面我们已经学习了如何使用 <code>sum()</code>、<code>avg()</code> 和相关的聚合运算符从标签维度进行聚合，这些运算符在一个时间内对多个序列进行聚合，但是有时候我们可能想在每个序列中按时间进行聚合，例如，使尖锐的曲线更平滑，或深入了解一个序列在一段时间内的最大值。</p><p>为了基于时间来计算这些聚合，PromQL 提供了一些与标签聚合运算符类似的函数，但是在这些函数名前面附加了 <code>_over_time()</code>：</p><ul><li><p><code>avg_over_time(range-vector)</code>：区间向量内每个指标的平均值。</p></li><li><p><code>min_over_time(range-vector)</code>：区间向量内每个指标的最小值。</p></li><li><p><code>max_over_time(range-vector)</code>：区间向量内每个指标的最大值。</p></li><li><p><code>sum_over_time(range-vector)</code>：区间向量内每个指标的求和。</p></li><li><p><code>count_over_time(range-vector)</code>：区间向量内每个指标的样本数据个数。</p></li><li><p><code>quantile_over_time(scalar, range-vector)</code>：区间向量内每个指标的样本数据值分位数。</p></li><li><p><code>stddev_over_time(range-vector)</code>：区间向量内每个指标的总体标准差。</p></li><li><p><code>stdvar_over_time(range-vector)</code>：区间向量内每个指标的总体标准方差。</p></li></ul><h3 id="max-over-time" tabindex="-1"><a class="header-anchor" href="#max-over-time"><span>max_over_time</span></a></h3><p>#MySQL运行的线程过多触发器，1分钟最大的值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>max_over_time(mysql_global_status_threads_running[1m]) &gt; 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="avg-over-time" tabindex="-1"><a class="header-anchor" href="#avg-over-time"><span>avg_over_time</span></a></h3><p>#HTTP请求慢告警触发器，1分钟平均的值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>avg_over_time(probe_duration_seconds[1m]) &gt; 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="min-over-time" tabindex="-1"><a class="header-anchor" href="#min-over-time"><span>min_over_time</span></a></h3><p>#时钟不同步告警触发器，1分钟最小的值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>min_over_time(node_timex_sync_status[1m]) == 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_4、-向量匹配" tabindex="-1"><a class="header-anchor" href="#_4、-向量匹配"><span>4、 向量匹配</span></a></h2><p>在标量和瞬时向量之间使用运算符可以满足很多需求，但是在两个瞬时向量之间使用运算符时，哪些样本应该适用于哪些其他样本？这种瞬时向量的匹配称为向量匹配。Prometheus提供了两种基本的向量匹配模式：one-to-one向量匹配和many-to-one（one-to-many）向量匹配。</p><p>接下来将介绍在 PromQL 中有两种典型的匹配模式：一对一（one-to-one）,多对一（many-to-one）或一对多（one-to-many）。</p><h3 id="_3-1-一对一-one-to-one" tabindex="-1"><a class="header-anchor" href="#_3-1-一对一-one-to-one"><span>3.1. 一对一（one-to-one）</span></a></h3><p>一对一匹配模式会从操作符两边表达式获取的瞬时向量依次比较并找到唯一匹配(标签完全一致)的样本值。默认情况下，</p><p>使用表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vector1 &lt;operator&gt; vector2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如当存在样本：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>process_open_fds{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;} 9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process_max_fds{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;} 1048576</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 PromQL 案例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>process_open_fds{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;} / process_max_fds{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>因此结果如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;}  0.00000858306884765625</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在操作符两边表达式标签不一致的情况下，可以使用 <code>on(label list)</code> 或者 <code>ignoring(label list）</code>来修改便签的匹配行为。使用 <code>ignoreing</code> 可以在匹配时忽略某些便签。而 <code>on</code> 则用于将匹配行为限定在某些便签之内。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;vector expr&gt; &lt;bin-op&gt; ignoring(&lt;label list&gt;) &lt;vector expr&gt;</span></span>
<span class="line"><span>&lt;vector expr&gt; &lt;bin-op&gt; on(&lt;label list&gt;) &lt;vector expr&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>表达式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sum by(instance, job)(rate(node_cpu_seconds_total{mode=&quot;idle&quot;}[5m]))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>表达式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sum by(instance)(rate(node_cpu_seconds_total[5m]))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用on表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sum by(instance, job)(rate(node_cpu_seconds_total{mode=&quot;idle&quot;}[5m])) / on(instance) sum by(instance)(rate(node_cpu_seconds_total[5m]))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{instance=&quot;Prometheus服务器&quot;}   0.9803643329726668</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;}         0.9849344204182887</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用ignoring表达式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> sum by(instance)(rate(node_cpu_seconds_total[5m])) / ignoring(job) sum by(instance, job)(rate(node_cpu_seconds_total{mode=&quot;idle&quot;}[5m]))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{instance=&quot;Prometheus服务器&quot;}   1.0199580591510582</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;}         1.0159356093344827</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-多对一和一对多" tabindex="-1"><a class="header-anchor" href="#_3-2-多对一和一对多"><span>3.2. 多对一和一对多</span></a></h3><p>多对一和一对多的匹配模式，可以理解为向量元素中的一个样本数据匹配到了多个样本数据标签。在使用该匹配模式时，需要使用group_left或group_right修饰符明确指定哪一个向量具有更高的基数，也就是说左或者右决定了哪边的向量具有较高的子集。此表达格式为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;vector expr&gt; &lt;bin-op&gt; ignoring(&lt;label list&gt;) group_left(&lt;label list&gt;) &lt;vector expr&gt;</span></span>
<span class="line"><span>&lt;vector expr&gt; &lt;bin-op&gt; ignoring(&lt;label list&gt;) group_right(&lt;label list&gt;) &lt;vector expr&gt;</span></span>
<span class="line"><span>&lt;vector expr&gt; &lt;bin-op&gt; on(&lt;label list&gt;) group_left(&lt;label list&gt;) &lt;vector expr&gt;</span></span>
<span class="line"><span>&lt;vector expr&gt; &lt;bin-op&gt; on(&lt;label list&gt;) group_right(&lt;label list&gt;) &lt;vector expr&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多对一和一对多两种模式一定是出现在操作符两侧表达式返回的向量标签不一致的情况。因此需要使用 ignoring 和 on 修饰符来排除或者限定匹配的标签列表。</p><p>使用group_left指定左侧操作数组中可以有多个匹配样本</p><p>例如，表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sum without(cpu)(rate(node_cpu_seconds_total[5m])) / ignoring(mode) group_left sum without(mode, cpu)(rate(node_cpu_seconds_total[5m]))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;idle&quot;} 0.9802134676075311</span></span>
<span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;iowait&quot;} 0.000035459735470373514</span></span>
<span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;irq&quot;} 0</span></span>
<span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;nice&quot;} 0.000017729867735189905</span></span>
<span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;softirq&quot;} 0.0003368674869685515</span></span>
<span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;steal&quot;} 0</span></span>
<span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;system&quot;} 0.008049359951775699</span></span>
<span class="line"><span>{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;user&quot;} 0.01134711535051912</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;idle&quot;} 0.9848852662354926</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;iowait&quot;} 0.00001771950031008937</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;irq&quot;} 0</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;nice&quot;} 0</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;softirq&quot;} 0.0007796580136441839</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;steal&quot;} 0</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;system&quot;} 0.00425268007442165</span></span>
<span class="line"><span>{instance=&quot;test服务器&quot;, job=&quot;node-exporter&quot;, mode=&quot;user&quot;} 0.010064676176131668</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左右两边的瞬时向量标签不一致：</p><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5、-二元运算符优先级" tabindex="-1"><a class="header-anchor" href="#_5、-二元运算符优先级"><span>5、 二元运算符优先级</span></a></h2><p>在 Prometheus 系统中，二元运算符优先级从高到低的顺序为：</p><ol><li><p><code>^</code></p></li><li><p><code>*</code>, <code>/</code>, <code>%</code></p></li><li><p><code>+</code>, <code>-</code></p></li><li><p><code>==</code>, <code>!=</code>, <code>&lt;=</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&gt;</code></p></li><li><p><code>and</code>, <code>unless</code></p></li><li><p><code>or</code></p></li></ol><p>具有相同优先级的运算符是满足结合律的（左结合）。例如，<code>2 * 3 % 2</code> 等价于 <code>(2 * 3) % 2</code>。运算符 <code>^</code> 例外，<code>^</code> 满足的是右结合，例如，<code>2 ^ 3 ^ 2</code> 等价于 <code>2 ^ (3 ^ 2)</code>。</p>',139),o=[d];function r(c,p){return s(),i("div",null,o)}const g=e(l,[["render",r],["__file","4.2.PromQL 操作符.html.vue"]]),b=JSON.parse('{"path":"/note/Prometheus/4.2.PromQL%20%E6%93%8D%E4%BD%9C%E7%AC%A6.html","title":"4.2.PromQL 操作符","lang":"zh-CN","frontmatter":{"title":"4.2.PromQL 操作符","order":25,"icon":"lightbulb","description":"1、二元运算符 Prometheus 的查询语言支持基本的逻辑运算和算术运算。对于两个瞬时向量, 匹配行为可以被改变。 1.1. 算术二元运算符 在 Prometheus 系统中支持下面的二元算术运算符： + 加法 - 减法 * 乘法 / 除法 % 模 ^ 幂等 二元运算操作符支持 scalar/scalar(标量/标量)、vector/scalar(...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/Prometheus/4.2.PromQL%20%E6%93%8D%E4%BD%9C%E7%AC%A6.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"4.2.PromQL 操作符"}],["meta",{"property":"og:description","content":"1、二元运算符 Prometheus 的查询语言支持基本的逻辑运算和算术运算。对于两个瞬时向量, 匹配行为可以被改变。 1.1. 算术二元运算符 在 Prometheus 系统中支持下面的二元算术运算符： + 加法 - 减法 * 乘法 / 除法 % 模 ^ 幂等 二元运算操作符支持 scalar/scalar(标量/标量)、vector/scalar(..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.2.PromQL 操作符\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、二元运算符","slug":"_1、二元运算符","link":"#_1、二元运算符","children":[{"level":3,"title":"1.1. 算术二元运算符","slug":"_1-1-算术二元运算符","link":"#_1-1-算术二元运算符","children":[]},{"level":3,"title":"1.2. 关系运算符","slug":"_1-2-关系运算符","link":"#_1-2-关系运算符","children":[]},{"level":3,"title":"1.3. 集合运算符","slug":"_1-3-集合运算符","link":"#_1-3-集合运算符","children":[]}]},{"level":2,"title":"2、 聚合操作","slug":"_2、-聚合操作","link":"#_2、-聚合操作","children":[{"level":3,"title":"sum结果求和","slug":"sum结果求和","link":"#sum结果求和","children":[]},{"level":3,"title":"max 最大值","slug":"max-最大值","link":"#max-最大值","children":[]},{"level":3,"title":"avg 平均值","slug":"avg-平均值","link":"#avg-平均值","children":[]},{"level":3,"title":"count（统计数量)","slug":"count-统计数量","link":"#count-统计数量","children":[]},{"level":3,"title":"bottomk （统计最小的几个值）","slug":"bottomk-统计最小的几个值","link":"#bottomk-统计最小的几个值","children":[]},{"level":3,"title":"topk （统计最大的几个值)","slug":"topk-统计最大的几个值","link":"#topk-统计最大的几个值","children":[]}]},{"level":2,"title":"3、基于时间聚合","slug":"_3、基于时间聚合","link":"#_3、基于时间聚合","children":[{"level":3,"title":"max_over_time","slug":"max-over-time","link":"#max-over-time","children":[]},{"level":3,"title":"avg_over_time","slug":"avg-over-time","link":"#avg-over-time","children":[]},{"level":3,"title":"min_over_time","slug":"min-over-time","link":"#min-over-time","children":[]}]},{"level":2,"title":"4、 向量匹配","slug":"_4、-向量匹配","link":"#_4、-向量匹配","children":[{"level":3,"title":"3.1. 一对一（one-to-one）","slug":"_3-1-一对一-one-to-one","link":"#_3-1-一对一-one-to-one","children":[]},{"level":3,"title":"3.2. 多对一和一对多","slug":"_3-2-多对一和一对多","link":"#_3-2-多对一和一对多","children":[]}]},{"level":2,"title":"5、 二元运算符优先级","slug":"_5、-二元运算符优先级","link":"#_5、-二元运算符优先级","children":[]}],"git":{},"readingTime":{"minutes":10.03,"words":3009},"filePathRelative":"note/Prometheus/4.2.PromQL 操作符.md","autoDesc":true}');export{g as comp,b as data};
