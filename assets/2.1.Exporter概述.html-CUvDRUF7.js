import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as s,d as r}from"./app-BvlpFik8.js";const a="/assets/2023-10-28_201520_4177010.7816560286007556-Bb4jYsfd.png",i={},p=r('<p>所有可以向Prometheus提供监控样本数据的程序都可以被称为一个Exporter。而Exporter的一个实例称为target，如下所示，Prometheus通过轮询的方式定期从这些target中获取样本数据:</p><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注：安装好Exporter后会暴露一个<code>http://ip:端口/metrics</code>的HTTP服务，通过Prometheus添加配置<code>- targets: [&#39;node_exporter:9100&#39;]</code>（默认会加上/metrics），Prometheus就可以采集到这个<code>http://ip:端口/metrics</code>里面所有监控样本数据</p><h2 id="exporter的来源" tabindex="-1"><a class="header-anchor" href="#exporter的来源"><span>Exporter的来源</span></a></h2><p>从Exporter的来源上来讲，主要分为两类：</p><h3 id="社区提供的" tabindex="-1"><a class="header-anchor" href="#社区提供的"><span>社区提供的</span></a></h3><ul><li>社区提供的( <a href="https://prometheus.io/docs/instrumenting/exporters/" target="_blank" rel="noopener noreferrer">https://prometheus.io/docs/instrumenting/exporters/</a> )</li></ul><p>Prometheus社区提供了丰富的Exporter实现，涵盖了从基础设施，中间件以及网络等各个方面的监控功能。这些Exporter可以实现大部分通用的监控需求。下表列举一些社区中常用的Exporter：</p><table id="73e05421" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:750px;"><tbody><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u793d1e01" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">范围</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u8b46ea54" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">常用Exporter</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="ub316361e" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">数据库</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u264c84e0" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">MySQL Exporter, Redis Exporter, MongoDB Exporter, MSSQL Exporter等</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u115d5b93" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">硬件</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="ud6683056" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Apcupsd Exporter，IoT Edison Exporter， IPMI Exporter, Node Exporter等</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u0608acd9" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">消息队列</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="ueea5e402" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Beanstalkd Exporter, Kafka Exporter, NSQ Exporter, RabbitMQ Exporter等</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="ua4d2a152" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">存储</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u8c428f2d" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ceph Exporter, Gluster Exporter, HDFS Exporter, ScaleIO Exporter等</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u389d726e" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">HTTP服务</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u5b411fdf" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Apache Exporter, HAProxy Exporter, Nginx Exporter等</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u169c8dc1" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">API服务</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="uc317336a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">AWS ECS Exporter， Docker Cloud Exporter, Docker Hub Exporter, GitHub Exporter等</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u8994442c" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">日志</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u38bfdbda" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Fluentd Exporter, Grok Exporter等</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="uf10b0b65" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">监控系统</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="uccb11116" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Collectd Exporter, Graphite Exporter, InfluxDB Exporter, Nagios Exporter, SNMP Exporter等</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u0f2f2dd5" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">其它</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u7a52d8f2" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Blockbox Exporter, JIRA Exporter, Jenkins Exporter， Confluence Exporter等</span></p></td></tr></tbody></table><h3 id="用户自定义的" tabindex="-1"><a class="header-anchor" href="#用户自定义的"><span>用户自定义的</span></a></h3><p>除了直接使用社区提供的Exporter程序以外，用户还可以基于Prometheus提供的Client Library创建自己的Exporter程序，目前Promthues社区官方提供了对以下编程语言的支持：Go、Java/Scala、Python、Ruby。同时还有第三方实现的如：Bash、C++、Common Lisp、Erlang,、Haskeel、Lua、Node.js、PHP、Rust等。</p><h2 id="exporter类型" tabindex="-1"><a class="header-anchor" href="#exporter类型"><span>Exporter类型</span></a></h2><p>通常来说可以将Exporter分为两类：</p><ul><li>直接采集型</li></ul><p>这类Exporter直接内置了相应的应用程序，用于向Prometheus直接提供Target数据支持。这样设计的好处是，可以更好地监控各自系统的内部运行状态，同时也适合更多自定义监控指标的项目实施。例如cAdvisor、Kubernetes等，它们均内置了用于向Prometheus提供监控数据的端点。</p><ul><li>间接采集型</li></ul><p>原始监控目标并不直接支持Prometheus，需要我们使用Prometheus提供的Client Library编写该监控目标的监控采集程序，用户可以将该程序独立运行，去获取指定的各类监控数据值。例如，由于Linux操作系统自身并不能直接支持Prometheus，用户无法从操作系统层面上直接提供对Prometheus的支持，因此单独安装Node exporter，还有数据库或网站HTTP应用类等Exporter。</p><h2 id="exporter规范" tabindex="-1"><a class="header-anchor" href="#exporter规范"><span>Exporter规范</span></a></h2><p>所有的Exporter程序都需要按照Prometheus的规范，返回监控的样本数据。以Node Exporter为例，当访问http://192.168.11.61:9100/metrics地址时会返回以下内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.</span></span>
<span class="line"><span># TYPE go_gc_duration_seconds summary</span></span>
<span class="line"><span>go_gc_duration_seconds{quantile=&quot;0&quot;} 1.5294e-05</span></span>
<span class="line"><span>go_gc_duration_seconds{quantile=&quot;0.25&quot;} 3.2443e-05</span></span>
<span class="line"><span>go_gc_duration_seconds{quantile=&quot;0.5&quot;} 3.3932e-05</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HELP node_cpu_seconds_total Seconds the CPUs spent in each mode.</span></span>
<span class="line"><span># TYPE node_cpu_seconds_total counter</span></span>
<span class="line"><span>node_cpu_seconds_total{cpu=&quot;0&quot;,mode=&quot;idle&quot;} 254831.12</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以#开始的行通常都是注释内容。这些样本数据集合说明如下：</p><ul><li><p>以#HELP开始的行，表示metric的帮助与说明注释，可以包含当前监控指标名称和对应的说明信息。</p></li><li><p>以#TYPE开始的行，表示定义metric类型，可以包含当前监控指标名称和类型，类型有Counter、Gauge、Histogram、Summary和Untyped。</p></li><li><p>非#开头的行，就是监控样本数据</p></li></ul><h3 id="监控样本数据规范" tabindex="-1"><a class="header-anchor" href="#监控样本数据规范"><span>监控样本数据规范</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>metric_name [</span></span>
<span class="line"><span>  &quot;{&quot; label_name &quot;=&quot; \`&quot;\` label_value \`&quot;\` { &quot;,&quot; label_name &quot;=&quot; \`&quot;\` label_value \`&quot;\` } [ &quot;,&quot; ] &quot;}&quot;</span></span>
<span class="line"><span>] value [ timestamp ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中metric_name和label_name必须遵循PromQL的格式规范要求。value是一个float格式的数据，timestamp的类型为int64（从1970-01-01 00:00:00以来的毫秒数），timestamp为可选默认为当前时间。具有相同metric_name的样本必须按照一个组的形式排列，并且每一行必须是唯一的指标名称和标签键值对组合。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>go_memstats_mcache_sys_bytes{} 15600</span></span>
<span class="line"><span></span></span>
<span class="line"><span>go_memstats_mcache_sys_bytes{instance=&quot;localhost:9090&quot;, job=&quot;prometheus&quot;} timestamp VALUE</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),n=[p];function d(o,l){return s(),t("div",null,n)}const u=e(i,[["render",d],["__file","2.1.Exporter概述.html.vue"]]),x=JSON.parse('{"path":"/note/Prometheus/2.1.Exporter%E6%A6%82%E8%BF%B0.html","title":"2.1.Exporter概述","lang":"zh-CN","frontmatter":{"title":"2.1.Exporter概述","order":7,"icon":"lightbulb","description":"所有可以向Prometheus提供监控样本数据的程序都可以被称为一个Exporter。而Exporter的一个实例称为target，如下所示，Prometheus通过轮询的方式定期从这些target中获取样本数据: 注：安装好Exporter后会暴露一个http://ip:端口/metrics的HTTP服务，通过Prometheus添加配置- targ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/2.1.Exporter%E6%A6%82%E8%BF%B0.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"2.1.Exporter概述"}],["meta",{"property":"og:description","content":"所有可以向Prometheus提供监控样本数据的程序都可以被称为一个Exporter。而Exporter的一个实例称为target，如下所示，Prometheus通过轮询的方式定期从这些target中获取样本数据: 注：安装好Exporter后会暴露一个http://ip:端口/metrics的HTTP服务，通过Prometheus添加配置- targ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.1.Exporter概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"Exporter的来源","slug":"exporter的来源","link":"#exporter的来源","children":[{"level":3,"title":"社区提供的","slug":"社区提供的","link":"#社区提供的","children":[]},{"level":3,"title":"用户自定义的","slug":"用户自定义的","link":"#用户自定义的","children":[]}]},{"level":2,"title":"Exporter类型","slug":"exporter类型","link":"#exporter类型","children":[]},{"level":2,"title":"Exporter规范","slug":"exporter规范","link":"#exporter规范","children":[{"level":3,"title":"监控样本数据规范","slug":"监控样本数据规范","link":"#监控样本数据规范","children":[]}]}],"git":{},"readingTime":{"minutes":5.56,"words":1667},"filePathRelative":"note/Prometheus/2.1.Exporter概述.md","autoDesc":true}');export{u as comp,x as data};
