import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-cGHsJGw-.js";const i="/vuepress/assets/2023-10-28_204847_0345490.742043198689787-D6BDFZQm.png",l="/vuepress/assets/2023-10-28_204847_2158710.979388247050469-BGfAt9jG.png",t="/vuepress/assets/2023-10-28_204847_4881520.9866758235373247-Dh8xqH1P.png",p={},o=e('<h1 id="relabeling机制" tabindex="-1"><a class="header-anchor" href="#relabeling机制"><span>Relabeling机制</span></a></h1><p>前面讲了Prometheus的几种服务发现机制。通过服务发现的方式，可以在不重启Prometheus服务的情况下动态的发现需要监控的Target实例信息。</p><p>基于consul服务发现。 如何加lable标签？Prometheus能够按照某些规则（比如标签）从服务发现注册中心返回的Target实例中有选择性的采集某些Exporter实例的监控数据。</p><p>接下来，我们将学习如何通过Prometheus强大的Relabel机制来实现以上这些具体的目标。</p><h2 id="_1、relabeling机制" tabindex="-1"><a class="header-anchor" href="#_1、relabeling机制"><span>1、Relabeling机制</span></a></h2><h3 id="什么是relabeling机制" tabindex="-1"><a class="header-anchor" href="#什么是relabeling机制"><span>什么是Relabeling机制？</span></a></h3><p>在采集样本数据之前，对Target实例的标签(Metadata)进行重写的机制在Prometheus被称为Relabeling。Relabeling最基本的应用场景就是基于Target实例中包含的metadata标签，动态的添加或者覆盖标签。</p><p>在采集任务设置中通过relabel_configs来添加自定义的Relabeling过程。如下图：</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注：细心的同学可能发现了，在之前的课程中黑盒、域名的监控也配置过relabel_configs</p><p>因为要对Metadata标签进行重写，所以我们先来看下Metadata标签</p><h3 id="默认metadata标签" tabindex="-1"><a class="header-anchor" href="#默认metadata标签"><span>默认Metadata标签</span></a></h3><p>在Prometheus所有的Target实例中，都包含一些默认的Metadata标签信息。可以通过Prometheus UI的Targets页面中查看这些实例的Metadata标签的内容：</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>默认情况下，当Prometheus加载Target实例完成后，这些Target时候都会包含一些默认的标签：</p><ul><li><p><code>__address__</code>：当前Target实例的访问地址<code>&lt;host&gt;:&lt;port&gt;</code>，如果在重新标记期间未设置标签，则默认将__address__标签值赋值给instance。</p></li><li><p><code>__scheme__</code>：采集目标地址的协议，HTTP或者HTTPS</p></li><li><p><code>__metrics_path__</code>：采集目标服务访问地址的访问路径</p></li><li><p><code>__param_&lt;name&gt;</code>：采集任务目标服务的中包含的请求参数</p></li><li><p><code>job</code>：设置为job_name相应的抓取配置的值。</p></li><li><p><code>__scrape_interval__</code>：scrape抓取数据时间间隔（秒）</p></li><li><p><code>__scrape_timeout__</code>： scrape超时时间（秒）</p></li></ul><p>一般来说，Target以<code>__</code>作为前置的标签是在系统内部使用的，因此这些标签不会被写入到样本数据中。不过这里有一些例外，例如，我们会发现所有通过Prometheus采集的样本数据中都会包含一个名为instance的标签，该标签的内容对应到Target实例的<code>__address__</code>。 这里实际上是发生了一次标签的重写处理。</p><h2 id="_2、consul动态发现的metadata标签" tabindex="-1"><a class="header-anchor" href="#_2、consul动态发现的metadata标签"><span>2、Consul动态发现的metadata标签</span></a></h2><p>通过Consul动态发现的服务实例还会包含以下Metadata标签信息：</p><ul><li><p>__meta_consul_address：consul地址</p></li><li><p>__meta_consul_dc：consul中服务所在的数据中心</p></li><li><p>__meta_consul_metadata：服务的metadata</p></li><li><p>__meta_consul_health: 健康检查</p></li><li><p>__meta_consul_node：服务所在consul节点的信息</p></li><li><p>__meta_consul_service_address：服务访问地址</p></li><li><p>__meta_consul_service_id：服务ID</p></li><li><p>__meta_consul_service_port：服务端口</p></li><li><p>__meta_consul_service：服务名称</p></li><li><p>__meta_consul_tags：服务包含的标签信息</p></li></ul><p>如下图：</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3、relabel-configs配置" tabindex="-1"><a class="header-anchor" href="#_3、relabel-configs配置"><span>3、relabel_configs配置</span></a></h2><p><code>source_labels</code>：源标签，没有经过relabel处理之前的标签名字。</p><p><code>target_labels</code>：通过relabel处理之后的标签名字。</p><p><code>separator</code>：源标签的值的连接分隔符。默认是&quot;;&quot;</p><p><code>module</code>：取源标签值散列的模数</p><p><code>regex</code>：正则表达式，匹配源标签的值。默认是(.*)</p><p><code>replacement</code>：通过分组替换后标签（target_label）对应的值。默认是$1</p><p><code>action</code>：根据正则表达式匹配执行的动作。默认是replace</p><ul><li><p><code>replace</code>：替换标签值，根据regex正则匹配到原标签值，使用replacement来引用表达式匹配的分组</p></li><li><p><code>keep</code>：满足regex正则条件的实例进行采集，把source_labels中没有匹配到regex正则内容的target实例丢掉，即只采集匹配成功的实例</p></li><li><p><code>drop</code>：满足regex正则条件的实例不采集，把source_labels中没有匹配到regex正则内容的target实例丢掉，即只采集没有匹配成功的实例</p></li><li><p><code>hashmod</code>： 使用hashmod计算source_labels的hash值并进行对比，基于自定义的模数取模，以实现对目标进行分类、重新赋值等功能</p></li><li><p><code>labelmap</code>： 匹配regex所有标签名称，然后复制匹配标签的值进行分组，通过replacement分组引用($1,$2,...)替代</p></li><li><p><code>labeldrop</code>： 匹配regex所有标签名称，对匹配到的实例标签进行删除</p></li><li><p><code>labelkeep</code>： 匹配regex所有标签名称，对匹配到的实例标签进行保留</p></li></ul><p>relabel_configs的配置我们已经知道了是对源数据重写的配置，接下来我们就来看具体案例</p><h3 id="替换标签值" tabindex="-1"><a class="header-anchor" href="#替换标签值"><span>替换标签值</span></a></h3><p>可以通过 <code>replace</code> 这个操作来完成，如果没有指定 <code>action</code> 字段，则默认就是 <code>replace</code>。</p><p>注：源数据需要加<code>[]</code>以便区分。目标数据不需要加。</p><p>案例1</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_service_address]</span></span>
<span class="line"><span>        target_label: __param_target</span></span>
<span class="line"><span>      - source_labels: [__param_target]</span></span>
<span class="line"><span>        target_label: instance</span></span>
<span class="line"><span>      - target_label: __address__</span></span>
<span class="line"><span>        replacement: 192.168.11.62:9115</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>源数据：__meta_consul_service_address=&quot;192.168.11.62&quot;</span></span>
<span class="line"><span>会变成：target=&quot;192.168.11.62&quot;,instance=&quot;192.168.11.62&quot;,endpoint=&quot;192.168.11.62:9115/prod&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>案例2</p><p>从Node Exporter实例采集上来的样本数据如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_load1{instance=&quot;test服务器&quot;, job=&quot;node_exporter&quot;} 0.04</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们希望能有一个额外的标签dc，可以表示该样本所属的数据中心：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>node_load1{instance=&quot;test服务器&quot;, job=&quot;node_exporter&quot;,dc=&quot;dc1&quot;} 0.04</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>relabel_config配置：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>    - source_labels:  [&quot;__meta_consul_dc&quot;]</span></span>
<span class="line"><span>      target_label: &quot;dc&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>源数据：__meta_consul_dc=&quot;dc1&quot;</span></span>
<span class="line"><span>会变成：dc=&quot;dc1&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保留或丢弃对象" tabindex="-1"><a class="header-anchor" href="#保留或丢弃对象"><span>保留或丢弃对象</span></a></h3><p>通过<code>keep</code> 或 <code>drop</code> 这两个动作可以来完成</p><p>案例1</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    relabel_configs:    </span></span>
<span class="line"><span>      - source_labels: [__meta_consul_tags]</span></span>
<span class="line"><span>        regex: .*exporter.*</span></span>
<span class="line"><span>        action: keep</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span></span></span>
<span class="line"><span>源数据为：__meta_consul_tags=&quot;,exporter,&quot;  会保留。如果action: drop就相反</span></span>
<span class="line"><span>源数据为：__meta_consul_tags=&quot;,domain,&quot;    会丢弃，如果action: drop就相反</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标签集映射" tabindex="-1"><a class="header-anchor" href="#标签集映射"><span>标签集映射</span></a></h3><p>把源标签的值映射到一组新的标签中去，使用 <code>labelmap</code> 这个动作完成</p><p>案例1：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    relabel_configs:      </span></span>
<span class="line"><span>      - regex: __meta_consul_service_metadata_(.+)</span></span>
<span class="line"><span>        action: labelmap</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>源数据为：__meta_consul_service_metadata_job=&quot;test&quot; </span></span>
<span class="line"><span>会变成: job=&quot;test&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保留或删除标签" tabindex="-1"><a class="header-anchor" href="#保留或删除标签"><span>保留或删除标签</span></a></h3><p>使用 <code>labelkeep</code> 和 <code>labeldrop</code> 这两个操作</p><p>案例1</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>      - regex: job</span></span>
<span class="line"><span>        action: labeldrop</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span></span></span>
<span class="line"><span>数据：probe_success{instance=&quot;192.168.11.61:9090&quot;, job=&quot;consul_blackbox_tcp&quot;}   </span></span>
<span class="line"><span>变成：probe_success{instance=&quot;192.168.11.61:9090&quot;}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>action: labelkeep 刚好相反</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、consul案例" tabindex="-1"><a class="header-anchor" href="#_4、consul案例"><span>4、consul案例</span></a></h2><h3 id="consul服务发现prometheus配置" tabindex="-1"><a class="header-anchor" href="#consul服务发现prometheus配置"><span>Consul服务发现prometheus配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> - job_name: &#39;consul_exporter&#39;</span></span>
<span class="line"><span>    consul_sd_configs:</span></span>
<span class="line"><span>      - server: &#39;192.168.11.61:8500&#39;</span></span>
<span class="line"><span>        services: []</span></span>
<span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_tags]</span></span>
<span class="line"><span>        regex: .*exporter.*</span></span>
<span class="line"><span>        action: keep</span></span>
<span class="line"><span>      - regex: __meta_consul_service_metadata_(.+)</span></span>
<span class="line"><span>        action: labelmap</span></span>
<span class="line"><span>      - source_labels:  [&quot;__meta_consul_dc&quot;]</span></span>
<span class="line"><span>        target_label: &quot;dc&quot;</span></span>
<span class="line"><span>#  Spring Boot 2.x 应用数据采集配置</span></span>
<span class="line"><span>  - job_name: &#39;consul_springboot_demo&#39;</span></span>
<span class="line"><span>    metrics_path: &#39;/actuator/prometheus&#39;</span></span>
<span class="line"><span>    scrape_interval: 5s</span></span>
<span class="line"><span>    consul_sd_configs:</span></span>
<span class="line"><span>      - server: &#39;192.168.11.61:8500&#39;</span></span>
<span class="line"><span>        services: []</span></span>
<span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_tags]</span></span>
<span class="line"><span>        regex: .*springboot.*</span></span>
<span class="line"><span>        action: keep</span></span>
<span class="line"><span>      - regex: __meta_consul_service_metadata_(.+)</span></span>
<span class="line"><span>        action: labelmap</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>#http配置</span></span>
<span class="line"><span>  - job_name: &quot;consul-blackbox_http&quot;</span></span>
<span class="line"><span>    metrics_path: /probe</span></span>
<span class="line"><span>    params:</span></span>
<span class="line"><span>      module: [http_2xx]</span></span>
<span class="line"><span>    consul_sd_configs:</span></span>
<span class="line"><span>      - server: &#39;192.168.11.61:8500&#39;</span></span>
<span class="line"><span>        services: []</span></span>
<span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_tags]</span></span>
<span class="line"><span>        regex: .*blackbox_http.*</span></span>
<span class="line"><span>        action: keep</span></span>
<span class="line"><span>      - regex: job</span></span>
<span class="line"><span>        action: labeldrop</span></span>
<span class="line"><span>      - regex: __meta_consul_service_metadata_(.+)</span></span>
<span class="line"><span>        action: labelmap</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_service_address]</span></span>
<span class="line"><span>        target_label: __param_target</span></span>
<span class="line"><span>      - source_labels: [__param_target]</span></span>
<span class="line"><span>        target_label: instance</span></span>
<span class="line"><span>      - target_label: __address__</span></span>
<span class="line"><span>        replacement: 192.168.11.62:9115</span></span>
<span class="line"><span>#tcp检查配置</span></span>
<span class="line"><span>  - job_name: &quot;consul_blackbox_tcp&quot;</span></span>
<span class="line"><span>    metrics_path: /probe</span></span>
<span class="line"><span>    params:</span></span>
<span class="line"><span>      module: [tcp_connect]</span></span>
<span class="line"><span>    consul_sd_configs:</span></span>
<span class="line"><span>      - server: &#39;192.168.11.61:8500&#39;</span></span>
<span class="line"><span>        services: []</span></span>
<span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_tags]</span></span>
<span class="line"><span>        regex: .*blackbox_tcp.*</span></span>
<span class="line"><span>        action: keep</span></span>
<span class="line"><span>      - regex: __meta_consul_service_metadata_(.+)</span></span>
<span class="line"><span>        action: labelmap</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_service_address]</span></span>
<span class="line"><span>        target_label: __param_target</span></span>
<span class="line"><span>      - source_labels: [__param_target]</span></span>
<span class="line"><span>        target_label: instance</span></span>
<span class="line"><span>      - target_label: __address__</span></span>
<span class="line"><span>        replacement: 192.168.11.62:9115</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#icmp检查配置</span></span>
<span class="line"><span>  - job_name: &quot;consul_blackbox_icmp&quot;</span></span>
<span class="line"><span>    metrics_path: /probe</span></span>
<span class="line"><span>    params:</span></span>
<span class="line"><span>      module: [icmp]</span></span>
<span class="line"><span>    consul_sd_configs:</span></span>
<span class="line"><span>      - server: &#39;192.168.11.61:8500&#39;</span></span>
<span class="line"><span>        services: []</span></span>
<span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_tags]</span></span>
<span class="line"><span>        regex: .*blackbox_icmp.*</span></span>
<span class="line"><span>        action: keep</span></span>
<span class="line"><span>      - regex: __meta_consul_service_metadata_(.+)</span></span>
<span class="line"><span>        action: labelmap</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_service_address]</span></span>
<span class="line"><span>        target_label: __param_target</span></span>
<span class="line"><span>      - source_labels: [__param_target]</span></span>
<span class="line"><span>        target_label: instance</span></span>
<span class="line"><span>      - target_label: __address__</span></span>
<span class="line"><span>        replacement: 192.168.11.62:9115</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#域名检测</span></span>
<span class="line"><span>  - job_name: consul_domain_exporter</span></span>
<span class="line"><span>    scrape_interval: 10s</span></span>
<span class="line"><span>    metrics_path: /probe</span></span>
<span class="line"><span>    consul_sd_configs:</span></span>
<span class="line"><span>      - server: &#39;192.168.11.61:8500&#39;</span></span>
<span class="line"><span>        services: []</span></span>
<span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_tags]</span></span>
<span class="line"><span>        regex: .*domain.*</span></span>
<span class="line"><span>        action: keep</span></span>
<span class="line"><span>      - regex: __meta_consul_service_metadata_(.+)</span></span>
<span class="line"><span>        action: labelmap</span></span>
<span class="line"><span>      - source_labels: [__meta_consul_service_address]</span></span>
<span class="line"><span>        target_label: __param_target</span></span>
<span class="line"><span>      - target_label: __address__</span></span>
<span class="line"><span>        replacement: 192.168.11.62:9222</span></span>
<span class="line"><span>                                                                                                   135,25</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="curl调用consul-api命令" tabindex="-1"><a class="header-anchor" href="#curl调用consul-api命令"><span>curl调用consul api命令</span></a></h3><p>上节课通过curl调用consul api添加服务的命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#node_exporter</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;node1&quot;,&quot;name&quot;: &quot;node_exporter&quot;,&quot;address&quot;: &quot;node_exporter&quot;,&quot;port&quot;: 9100,&quot;tags&quot;: [&quot;exporter&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;node_exporter&quot;,&quot;instance&quot;: &quot;Prometheus服务</span></span>
<span class="line"><span>器&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.61:9100/metrics&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#nginx</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;nginx1&quot;,&quot;name&quot;: &quot;nginx_exporter&quot;,&quot;address&quot;: &quot;192.168.11.62&quot;,&quot;port&quot;: 9113,&quot;tags&quot;: [&quot;exporter&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;nginx_exporter&quot;,&quot;instance&quot;: &quot;test服务器&quot;,&quot;env&quot;:&quot;test&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9113/metrics&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#rabbitmq</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;rabbitmq1&quot;,&quot;name&quot;: &quot;rabbitmq_exporter&quot;,&quot;address&quot;: &quot;192.168.11.62&quot;,&quot;port&quot;: 9419,&quot;tags&quot;: [&quot;exporter&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;rabbitmq_exporter&quot;,&quot;instance&quot;: &quot;test服务器&quot;,&quot;env&quot;:&quot;test&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9419/metrics&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#redis</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;redis1&quot;,&quot;name&quot;: &quot;redis_exporter&quot;,&quot;address&quot;: &quot;192.168.11.62&quot;,&quot;port&quot;: 9121,&quot;tags&quot;: [&quot;exporter&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;redis_exporter&quot;,&quot;instance&quot;: &quot;test服务器&quot;,&quot;env&quot;:&quot;test&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9121/metrics&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#mongodb</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;mongodb1&quot;,&quot;name&quot;: &quot;mongodb_exporter&quot;,&quot;address&quot;: &quot;192.168.11.62&quot;,&quot;port&quot;: 9216,&quot;tags&quot;: [&quot;exporter&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;mongodb_exporter&quot;,&quot;instance&quot;: &quot;test服务器&quot;,&quot;env&quot;:&quot;test&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9216/metrics&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#mysql</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;mysql1&quot;,&quot;name&quot;: &quot;mysqld_exporter&quot;,&quot;address&quot;: &quot;192.168.11.62&quot;,&quot;port&quot;: 9104,&quot;tags&quot;: [&quot;exporter&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;mysqld_exporter&quot;,&quot;instance&quot;: &quot;test服务器&quot;,&quot;env&quot;:&quot;test&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9104/metrics&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#cadvisor</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;cadvisor1&quot;,&quot;name&quot;: &quot;cadvisor&quot;,&quot;address&quot;: &quot;cadvisor&quot;,&quot;port&quot;: 8080,&quot;tags&quot;: [&quot;exporter&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;cadvisor&quot;,&quot;instance&quot;: &quot;Prometheus服务器&quot;,&quot;env&quot;:&quot;test&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.61:8080/metrics&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;cadvisor2&quot;,&quot;name&quot;: &quot;cadvisor&quot;,&quot;address&quot;: &quot;192.168.11.62&quot;,&quot;port&quot;: 8080,&quot;tags&quot;: [&quot;exporter&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;cadvisor&quot;,&quot;instance&quot;: &quot;test服务器&quot;,&quot;env&quot;:&quot;test&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:8080/metrics&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#springboot</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;springboot1&quot;,&quot;name&quot;: &quot;springboot&quot;,&quot;address&quot;: &quot;192.168.11.62&quot;,&quot;port&quot;: 8081,&quot;tags&quot;: [&quot;springboot&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;springboot&quot;,&quot;instance&quot;: &quot;test服务器&quot;,&quot;env&quot;:&quot;test&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:8081/actuator/prometheus&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#process_exporter</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;process1&quot;,&quot;name&quot;: &quot;process_exporter&quot;,&quot;address&quot;: &quot;192.168.11.62&quot;,&quot;port&quot;: 9256,&quot;tags&quot;: [&quot;exporter&quot;],&quot;meta&quot;: {&quot;job&quot;: &quot;process_exporter&quot;,&quot;instance&quot;: &quot;test服务器&quot;,&quot;env&quot;:&quot;test&quot;},&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9256/metrics&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#http</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;http1&quot;,&quot;name&quot;: &quot;blackbox_http&quot;,&quot;address&quot;: &quot;https://www.jd.com&quot;,&quot;tags&quot;: [&quot;blackbox_http&quot;],&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9115&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#tcp</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;tcp1&quot;,&quot;name&quot;: &quot;blackbox_tcp&quot;,&quot;address&quot;: &quot;192.168.11.61:9090&quot;,&quot;tags&quot;: [&quot;blackbox_tcp&quot;],&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9115&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#icmp</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;icmp1&quot;,&quot;name&quot;: &quot;blackbox_icmp&quot;,&quot;address&quot;: &quot;192.168.11.62&quot;,&quot;tags&quot;: [&quot;blackbox_icmp&quot;],&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9115&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#domin</span></span>
<span class="line"><span>curl -X PUT -d &#39;{&quot;id&quot;: &quot;domain1&quot;,&quot;name&quot;: &quot;domain_exporter&quot;,&quot;address&quot;: &quot;baidu.com&quot;,&quot;tags&quot;: [&quot;domain&quot;],&quot;checks&quot;: [{&quot;http&quot;: &quot;http://192.168.11.62:9222&quot;, &quot;interval&quot;: &quot;5s&quot;}]}&#39;  http://localhost:8500/v1/agent/service/register</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64),u=[o];function c(r,d){return a(),n("div",null,u)}const b=s(p,[["render",c],["__file","3.3.Relabeling机制.html.vue"]]),m=JSON.parse('{"path":"/note/Prometheus/3.3.Relabeling%E6%9C%BA%E5%88%B6.html","title":"3.3.Relabeling机制","lang":"zh-CN","frontmatter":{"title":"3.3.Relabeling机制","order":23,"icon":"lightbulb","description":"Relabeling机制 前面讲了Prometheus的几种服务发现机制。通过服务发现的方式，可以在不重启Prometheus服务的情况下动态的发现需要监控的Target实例信息。 基于consul服务发现。 如何加lable标签？Prometheus能够按照某些规则（比如标签）从服务发现注册中心返回的Target实例中有选择性的采集某些Exporte...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/Prometheus/3.3.Relabeling%E6%9C%BA%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"3.3.Relabeling机制"}],["meta",{"property":"og:description","content":"Relabeling机制 前面讲了Prometheus的几种服务发现机制。通过服务发现的方式，可以在不重启Prometheus服务的情况下动态的发现需要监控的Target实例信息。 基于consul服务发现。 如何加lable标签？Prometheus能够按照某些规则（比如标签）从服务发现注册中心返回的Target实例中有选择性的采集某些Exporte..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.3.Relabeling机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、Relabeling机制","slug":"_1、relabeling机制","link":"#_1、relabeling机制","children":[{"level":3,"title":"什么是Relabeling机制？","slug":"什么是relabeling机制","link":"#什么是relabeling机制","children":[]},{"level":3,"title":"默认Metadata标签","slug":"默认metadata标签","link":"#默认metadata标签","children":[]}]},{"level":2,"title":"2、Consul动态发现的metadata标签","slug":"_2、consul动态发现的metadata标签","link":"#_2、consul动态发现的metadata标签","children":[]},{"level":2,"title":"3、relabel_configs配置","slug":"_3、relabel-configs配置","link":"#_3、relabel-configs配置","children":[{"level":3,"title":"替换标签值","slug":"替换标签值","link":"#替换标签值","children":[]},{"level":3,"title":"保留或丢弃对象","slug":"保留或丢弃对象","link":"#保留或丢弃对象","children":[]},{"level":3,"title":"标签集映射","slug":"标签集映射","link":"#标签集映射","children":[]},{"level":3,"title":"保留或删除标签","slug":"保留或删除标签","link":"#保留或删除标签","children":[]}]},{"level":2,"title":"4、consul案例","slug":"_4、consul案例","link":"#_4、consul案例","children":[{"level":3,"title":"Consul服务发现prometheus配置","slug":"consul服务发现prometheus配置","link":"#consul服务发现prometheus配置","children":[]},{"level":3,"title":"curl调用consul api命令","slug":"curl调用consul-api命令","link":"#curl调用consul-api命令","children":[]}]}],"git":{},"readingTime":{"minutes":7.37,"words":2210},"filePathRelative":"note/Prometheus/3.3.Relabeling机制.md","autoDesc":true}');export{b as comp,m as data};
