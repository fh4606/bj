import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-Bna6fuy1.js";const i="/assets/2023-10-28_201419_2204700.05356164740423641-uxRwiP8r.png",t="/assets/2023-10-28_201419_1143790.11726800729301923-CfXw6DcM.png",l="/assets/2023-10-28_201419_1793060.4854693085014684-KV5wNOvR.png",r={},o=n(`<h2 id="理解时间序列" tabindex="-1"><a class="header-anchor" href="#理解时间序列"><span>理解时间序列</span></a></h2><p>安装好prometheus后会暴露一个<a href="http://192.168.11.61:9090/metrics" target="_blank" rel="noopener noreferrer">/metrics</a>的HTTP服务（相当于安装了prometheus_exporter），通过配置（默认会加上/metrics），Prometheus就可以采集到这个<a href="http://192.168.11.61:9090/metrics" target="_blank" rel="noopener noreferrer">/metrics</a>里面所有监控样本数据。例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># HELP process_open_fds Number of open file descriptors.</span></span>
<span class="line"><span># TYPE process_open_fds gauge</span></span>
<span class="line"><span>process_open_fds 25</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样本" tabindex="-1"><a class="header-anchor" href="#样本"><span>样本</span></a></h3><p>Prometheus 会将所有采集到的监控样本数据以时间序列的方式保存在<strong>内存数据库</strong>中，并且定时保存到硬盘上。时间序列是按照时间戳和值的序列顺序存放的，我们称之为向量(vector)，每条时间序列通过指标名称(metrics name)和一组标签集(label)命名。如下所示，可以将时间序列理解为一个以时间为 X 轴的数字矩阵：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>  ^</span></span>
<span class="line"><span>  │   . . . . . . . . . . . . . . . . .   . .   process_open_fds</span></span>
<span class="line"><span>  │     . . . . . . . . . . . . . . . . . . .   node_cpu_seconds_total{cpu=&quot;cpu0&quot;,mode=&quot;system&quot;}</span></span>
<span class="line"><span>  │     . . . . . . . . . .   . . . . . . . .   node_load1{}</span></span>
<span class="line"><span>  │     . . . . . . . . . . . . . . . .   . .</span></span>
<span class="line"><span>  v</span></span>
<span class="line"><span>    &lt;------------------ 时间 ----------------&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在时间序列中的每一个点称为一个样本（sample），样本由以下三部分组成：</p><ul><li><p>指标(metric)：指标名和描述当前样本特征的标签集合</p></li><li><p>时间戳(timestamp)：一个精确到毫秒的时间戳</p></li><li><p>样本值(value)： 一个 float64 的浮点型数据表示当前样本的值</p></li></ul><p>如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>process_open_fds 27</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;--------------------- metric ------------------------------&gt;&lt;-timestamp -&gt;&lt;-value-&gt;</span></span>
<span class="line"><span>process_open_fds{instance=&quot;localhost:9090&quot;, job=&quot;prometheus&quot;} @1434417560938  39</span></span>
<span class="line"><span>process_open_fds{instance=&quot;localhost:9090&quot;, job=&quot;prometheus&quot;} @1434417561287  33</span></span>
<span class="line"><span>process_open_fds{instance=&quot;localhost:9090&quot;, job=&quot;prometheus&quot;} @1434417560938  35</span></span>
<span class="line"><span>process_open_fds{instance=&quot;localhost:9090&quot;, job=&quot;prometheus&quot;} @1434417561287  37</span></span>
<span class="line"><span>process_open_fds{instance=&quot;localhost:9090&quot;, job=&quot;prometheus&quot;} @1434417560938  36</span></span>
<span class="line"><span>process_open_fds{instance=&quot;localhost:9090&quot;, job=&quot;prometheus&quot;} @1434417561287  25</span></span>
<span class="line"><span>&lt;--metric_name-&gt;&lt;----------------lable----------------------&gt;</span></span>
<span class="line"><span>&lt;--metric_name-&gt;&lt;--name--&gt;&lt;----value----&gt;  &lt;name&gt;&lt;--value---&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指标-metric" tabindex="-1"><a class="header-anchor" href="#指标-metric"><span>指标(Metric)</span></a></h3><p>在形式上，所有的指标(Metric)都通过如下格式标示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;metric name&gt;{&lt;label name&gt;=&lt;label value&gt;, ...}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>指标的名称(metric name)可以反映被监控样本的含义（比如，<code>process_open_fds</code> - 表示当前系统打开的文件描述符）。指标名称只能由ASCII字符、数字、下划线以及冒号组成并必须符合正则表达式<code>[a-zA-Z_:][a-zA-Z0-9_:]*</code>。</p><p>标签(label)反映了当前样本的特征维度，通过这些维度Prometheus可以对样本数据进行过滤，聚合等。标签的名称只能由ASCII字符、数字以及下划线组成并满足正则表达式<code>[a-zA-Z_][a-zA-Z0-9_]*</code>。</p><p>其中以<code>__</code>作为前缀的标签，是系统保留的关键字，只能在系统内部使用。标签的值则可以包含任何Unicode编码的字符。在Prometheus的底层实现中指标名称实际上是以<code>__name__=&lt;metric name&gt;</code>的形式保存在数据库中的，因此以下两种方式均表示的同一条time-series：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>process_open_fds{instance=&quot;localhost:9090&quot;, job=&quot;prometheus&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>等同于：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{__name__=&quot;process_open_fds&quot;,instance=&quot;localhost:9090&quot;,job=&quot;prometheus&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="指标-metric-的4种类型" tabindex="-1"><a class="header-anchor" href="#指标-metric-的4种类型"><span>指标(Metric)的4种类型</span></a></h2><p>Prometheus 底层存储上其实并没有对指标做类型的区分，都是以时间序列的形式存储，但是为了方便用户的使用和理解不同监控指标之间的差异，Prometheus 定义了 counter（计数器） 、gauge（仪表盘） 、 histogram（直方图） 以及 summary （摘要）这四种 Metrics 类型。</p><p><strong>Gauge/Counter 是数值指标，代表数据的变化情况，Histogram/Summary 是统计类型的指标，表示数据的分布情况</strong></p><p>在Exporter返回的样本数据中，其注释中也包含了该样本的类型。例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># HELP process_resident_memory_bytes Resident memory size in bytes.</span></span>
<span class="line"><span># TYPE process_resident_memory_bytes gauge</span></span>
<span class="line"><span>process_resident_memory_bytes 1.3586432e+08</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="counter-只增不减的计数器" tabindex="-1"><a class="header-anchor" href="#counter-只增不减的计数器"><span>Counter：只增不减的计数器</span></a></h3><p>Counter类型的指标其工作方式和计数器一样，只增不减（除非系统发生重置）。常见的监控指标，如http_requests_total，node_cpu都是Counter类型的监控指标。 一般在定义Counter类型指标的名称时推荐使用_total作为后缀。</p><p>通过 Counter 指标可以统计 HTTP 请求数量，请求错误数，接口调用次数等单调递增的数据，同时可结合 <code>increase</code> 和 <code>rate</code> 等函数统计变化速率</p><p>例如，通过PromQL内置的聚合rate()函数获取HTTP请求量的评价增长率：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>rate(prometheus_http_requests_total[5m])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查询当前系统中，访问量前10的HTTP地址：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>topk(10, prometheus_http_requests_total)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="`+i+'" alt="" loading="lazy"></span></a></h3><h3 id="gauge-可增可减的仪表盘" tabindex="-1"><a class="header-anchor" href="#gauge-可增可减的仪表盘"><span>Gauge：可增可减的仪表盘</span></a></h3><p>与Counter不同，Gauge类型的指标侧重于反应系统的当前状态。因此这类指标的样本数据可增可减。常见指标如：node_memory_MemFree_bytes（主机当前空闲的物理内存大小）、<code>node_memory_MemAvailable_bytes</code>（可用内存大小）都是Gauge类型的监控指标。</p><p>通过Gauge指标，通过PromQL可以直接查看系统的当前空闲物理内存大小：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_memory_MemFree_bytes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对于Gauge类型的监控指标，通过PromQL内置函数delta()可以获取样本在一段时间返回内的变化情况。例如，计算CPU温度在两个小时内的差异：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>delta(cpu_temp_celsius{host=&quot;zeus&quot;}[2h])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>还可以使用deriv()计算样本的线性回归模型，甚至是直接使用predict_linear()对数据的变化趋势进行预测。例如，预测系统磁盘空间在4个小时之后的剩余情况：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>predict_linear(node_filesystem_avail_bytes{}[1h], 4 * 3600)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用histogram-直方图-和summary-摘要-分析数据分布情况" tabindex="-1"><a class="header-anchor" href="#使用histogram-直方图-和summary-摘要-分析数据分布情况"><span>使用Histogram（直方图）和Summary（摘要）分析数据分布情况</span></a></h3><p>除了Counter和Gauge类型的监控指标以外，Prometheus还定义了Histogram和Summary的指标类型。Histogram和Summary主用用于统计和分析样本的分布情况。</p><p>在大多数情况下人们都倾向于使用某些量化指标的平均值，例如CPU的平均使用率、页面的平均响应时间。这种方式的问题很明显，以系统API调用的平均响应时间为例：如果大多数API请求都维持在100ms的响应时间范围内，而个别请求的响应时间需要5s，那么就会导致某些WEB页面的响应时间落到中位数的情况，而这种现象被称为长尾问题。</p><p>为了区分是平均的慢还是长尾的慢，最简单的方式就是按照请求延迟的范围进行分组。例如，统计延迟在010ms之间的请求数有多少而1020ms之间的请求数又有多少。通过这种方式可以快速分析系统慢的原因。Histogram和Summary都是为了能够解决这样问题的存在，通过Histogram和Summary类型的监控指标，我们可以快速了解监控样本的分布情况。</p><p>例如，指标prometheus_tsdb_wal_fsync_duration_seconds的指标类型为Summary。 它记录了Prometheus Server中wal_fsync处理的处理时间，通过访问Prometheus Server的<a href="http://192.168.11.61:9090/metrics" target="_blank" rel="noopener noreferrer">/metrics地址</a>，可以获取到以下监控样本数据：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># HELP prometheus_tsdb_wal_fsync_duration_seconds Duration of WAL fsync.</span></span>
<span class="line"><span># TYPE prometheus_tsdb_wal_fsync_duration_seconds summary</span></span>
<span class="line"><span>prometheus_tsdb_wal_fsync_duration_seconds{quantile=&quot;0.5&quot;} 0.012352463</span></span>
<span class="line"><span>prometheus_tsdb_wal_fsync_duration_seconds{quantile=&quot;0.9&quot;} 0.014458005</span></span>
<span class="line"><span>prometheus_tsdb_wal_fsync_duration_seconds{quantile=&quot;0.99&quot;} 0.017316173</span></span>
<span class="line"><span>prometheus_tsdb_wal_fsync_duration_seconds_sum 2.888716127000002</span></span>
<span class="line"><span>prometheus_tsdb_wal_fsync_duration_seconds_count 216</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的样本中可以得知当前Prometheus Server进行wal_fsync操作的总次数为216次，耗时2.888716127000002s。其中中位数（quantile=0.5）的耗时为0.012352463，9分位数（quantile=0.9）的耗时为0.014458005s。</p><p>在Prometheus Server自身返回的样本数据中，我们还能找到类型为Histogram的监控指标</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># HELP prometheus_tsdb_compaction_chunk_range_seconds Final time range of chunks on their first compaction</span></span>
<span class="line"><span># TYPE prometheus_tsdb_compaction_chunk_range_seconds histogram</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;100&quot;} 0</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;400&quot;} 0</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;1600&quot;} 0</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;6400&quot;} 0</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;25600&quot;} 61</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;102400&quot;} 1095</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;409600&quot;} 1208</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;1.6384e+06&quot;} 3184</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;6.5536e+06&quot;} 217665</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;2.62144e+07&quot;} 217695</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_bucket{le=&quot;+Inf&quot;} 217695</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_sum 3.91254640158e+11</span></span>
<span class="line"><span>prometheus_tsdb_compaction_chunk_range_seconds_count 217695</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与Summary类型的指标相似之处在于Histogram类型的样本同样会反应当前指标的记录的总数(以_count作为后缀)以及其值的总量（以_sum作为后缀）。不同在于Histogram指标直接反应了在不同区间内样本的个数，区间通过标签len进行定义。</p><p>同时对于Histogram的指标，我们还可以通过histogram_quantile()函数计算出其值的分位数。不同在于Histogram通过histogram_quantile函数是在服务器端计算的分位数。 而Sumamry的分位数则是直接在客户端计算完成。因此对于分位数的计算而言，Summary在通过PromQL进行查询时有更好的性能表现，而Histogram则会消耗更多的资源。反之对于客户端而言Histogram消耗的资源更少。在选择这两种方式时用户应该按照自己的实际场景进行选择。</p><p>需要特别注意的是，假设采样数据 metric 叫做 <code>x(指标名)</code>, 如果 <code>x</code> 是 <code>histogram</code> 或 <code>summary</code> 类型必需满足以下条件：</p><ul><li><p>采样数据的总和应表示为 <code>x_sum</code>。</p></li><li><p>采样数据的总量应表示为 <code>x_count</code>。</p></li><li><p><code>summary</code> 类型的采样数据的 quantile 应表示为 <code>x{quantile=&quot;y&quot;}</code>。</p></li><li><p><code>histogram</code> 类型的采样分区统计数据将表示为 <code>x_bucket{le=&quot;y&quot;}</code>。</p></li><li><p><code>histogram</code> 类型的采样必须包含 <code>x_bucket{le=&quot;+Inf&quot;}</code>, 它的值等于 <code>x_count</code> 的值。</p></li><li><p><code>summary</code> 和 <code>historam</code> 中 <code>quantile</code> 和 <code>le</code> 必需按从小到大顺序排列。</p></li></ul><h2 id="job-任务-和instances-实例" tabindex="-1"><a class="header-anchor" href="#job-任务-和instances-实例"><span>job（任务）和instances（实例）</span></a></h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h3><p>在Prometheus中，任何被采集的目标，即每一个暴露监控样本数据的HTTP服务都称为一个实例（Instance）,例如在当前主机上运行的node exporter可以被称为一个实例(Instance)。而具有相同采集目的的实例集合称为任务（Job）。</p><h3 id="job-任务" tabindex="-1"><a class="header-anchor" href="#job-任务"><span>job（任务）</span></a></h3><p>例如，以下2个复制实例的node作业：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>* job: node</span></span>
<span class="line"><span>    * instance 2: 1.2.3.4:9100</span></span>
<span class="line"><span>    * instance 4: 5.6.7.8:9100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instances-实例" tabindex="-1"><a class="header-anchor" href="#instances-实例"><span>instances（实例）</span></a></h3><p>通过在prometheus.yml配置文件中，添加如下配置。我们让Prometheus可以从node exporter暴露的服务中获取监控指标数据。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>scrape_configs:</span></span>
<span class="line"><span>  - job_name: &#39;prometheus&#39;</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>      - targets: [&#39;prometheus:9090&#39;]</span></span>
<span class="line"><span>  - job_name: &#39;alertmanager&#39;</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>      - targets: [&#39;alertmanager:9093&#39;]</span></span>
<span class="line"><span>  - job_name: &#39;node-exporter&#39;</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>      - targets: </span></span>
<span class="line"><span>        - node-exporter:9100</span></span>
<span class="line"><span>        - 192.168.11.62:9100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们需要采集不同的监控指标(例如：主机、MySQL、Nginx)时，我们只需要运行相应的监控采集程序，在Prometheus Server配置这些Exporter实例的访问地址。</p><h3 id="实例的状态" tabindex="-1"><a class="header-anchor" href="#实例的状态"><span>实例的状态</span></a></h3><p>除了通过使用“up”表达式查询当前所有Instance的状态以外，还可以通过Prometheus UI中的<a href="http://192.168.11.61:9090/targets" target="_blank" rel="noopener noreferrer">Targets</a>页面查看当前所有的监控采集任务，以及各个任务下所有实例的状态:</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',68),d=[o];function p(c,h){return a(),s("div",null,d)}const b=e(r,[["render",p],["__file","1.6.Prometheus相关概念.html.vue"]]),g=JSON.parse('{"path":"/note/Prometheus/1.6.Prometheus%E7%9B%B8%E5%85%B3%E6%A6%82%E5%BF%B5.html","title":"1.6.Prometheus相关概念","lang":"zh-CN","frontmatter":{"title":"1.6.Prometheus相关概念","order":6,"icon":"lightbulb","description":"理解时间序列 安装好prometheus后会暴露一个/metrics的HTTP服务（相当于安装了prometheus_exporter），通过配置（默认会加上/metrics），Prometheus就可以采集到这个/metrics里面所有监控样本数据。例如： 样本 Prometheus 会将所有采集到的监控样本数据以时间序列的方式保存在内存数据库中，并...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/1.6.Prometheus%E7%9B%B8%E5%85%B3%E6%A6%82%E5%BF%B5.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"1.6.Prometheus相关概念"}],["meta",{"property":"og:description","content":"理解时间序列 安装好prometheus后会暴露一个/metrics的HTTP服务（相当于安装了prometheus_exporter），通过配置（默认会加上/metrics），Prometheus就可以采集到这个/metrics里面所有监控样本数据。例如： 样本 Prometheus 会将所有采集到的监控样本数据以时间序列的方式保存在内存数据库中，并..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.6.Prometheus相关概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"理解时间序列","slug":"理解时间序列","link":"#理解时间序列","children":[{"level":3,"title":"样本","slug":"样本","link":"#样本","children":[]},{"level":3,"title":"指标(Metric)","slug":"指标-metric","link":"#指标-metric","children":[]}]},{"level":2,"title":"指标(Metric)的4种类型","slug":"指标-metric-的4种类型","link":"#指标-metric-的4种类型","children":[{"level":3,"title":"Counter：只增不减的计数器","slug":"counter-只增不减的计数器","link":"#counter-只增不减的计数器","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]},{"level":3,"title":"Gauge：可增可减的仪表盘","slug":"gauge-可增可减的仪表盘","link":"#gauge-可增可减的仪表盘","children":[]},{"level":3,"title":"使用Histogram（直方图）和Summary（摘要）分析数据分布情况","slug":"使用histogram-直方图-和summary-摘要-分析数据分布情况","link":"#使用histogram-直方图-和summary-摘要-分析数据分布情况","children":[]}]},{"level":2,"title":"job（任务）和instances（实例）","slug":"job-任务-和instances-实例","link":"#job-任务-和instances-实例","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"job（任务）","slug":"job-任务","link":"#job-任务","children":[]},{"level":3,"title":"instances（实例）","slug":"instances-实例","link":"#instances-实例","children":[]},{"level":3,"title":"实例的状态","slug":"实例的状态","link":"#实例的状态","children":[]}]}],"git":{},"readingTime":{"minutes":8.52,"words":2556},"filePathRelative":"note/Prometheus/1.6.Prometheus相关概念.md","autoDesc":true}');export{b as comp,g as data};
