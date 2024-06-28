import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,d as i}from"./app-CAdWGPj0.js";const n={},l=i(`<h1 id="一、环境" tabindex="-1"><a class="header-anchor" href="#一、环境"><span>一、环境</span></a></h1><table id="fa41b022" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="uf0d60b0b" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u29cf40e3" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ue8cfb5dc" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uc0ca9a5b" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="u1a800e12" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">localhost</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ub9aff108" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.61</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uad8c3414" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u614a9ea8" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">docker安装的prometheus</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="u7387b920" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">test</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u42baa478" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.62</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u107374fe" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"></td></tr></tbody></table><h1 id="二、pushgateway" tabindex="-1"><a class="header-anchor" href="#二、pushgateway"><span>二、Pushgateway</span></a></h1><h2 id="_1、pushgateway-简介" tabindex="-1"><a class="header-anchor" href="#_1、pushgateway-简介"><span>1、Pushgateway 简介</span></a></h2><p><a href="https://github.com/prometheus/pushgateway" target="_blank" rel="noopener noreferrer">Pushgateway</a> 是 Prometheus 生态中一个重要工具，使用它的原因主要是：</p><ul><li><p>Prometheus 采用 pull 模式，可能由于不在一个子网或者防火墙原因，导致 Prometheus 无法直接拉取各个 target 数据。</p></li><li><p>在监控业务数据的时候，需要将不同数据汇总, 由 Prometheus 统一收集。</p></li><li><p>当exporter不能满足需要时，也可以通过自定义（python、shell、java）监控我们想要的数据。</p></li></ul><p>由于以上原因，不得不使用 pushgateway，但在使用之前，有必要了解一下它的一些弊端：</p><ul><li><p>将多个节点数据汇总到 pushgateway, 如果 pushgateway 挂了，受影响比多个 target 大。</p></li><li><p>Prometheus 拉取状态 <code>up</code> 只针对 pushgateway, 无法做到对每个节点有效。</p></li><li><p>Pushgateway 可以持久化推送给它的所有监控数据。</p></li></ul><p>因此，即使你的监控已经下线，prometheus 还会拉取到旧的监控数据，需要手动清理 pushgateway 不要的数据。</p><h2 id="_2、二进制安装" tabindex="-1"><a class="header-anchor" href="#_2、二进制安装"><span>2、二进制安装</span></a></h2><p>官网下载地址https://prometheus.io/download/</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>wget https://github.com/prometheus/pushgateway/releases/download/v1.5.1/pushgateway-1.5.1.linux-amd64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar xf pushgateway-1.5.1.linux-amd64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ls -l </span></span>
<span class="line"><span></span></span>
<span class="line"><span>mv pushgateway-1.5.1.linux-amd64 /opt/pushgateway</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ls -l /opt/pushgateway</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更改<code>pushgateway</code>文件夹权限：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>chown prometheus:prometheus -R /opt/pushgateway</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建 systemd 服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;/etc/systemd/system/pushgateway.service &lt;&lt; &quot;EOF&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Prometheus Push Gateway</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=simple</span></span>
<span class="line"><span>User=prometheus</span></span>
<span class="line"><span>Group=prometheus</span></span>
<span class="line"><span>ExecStart=/opt/pushgateway/pushgateway</span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>systemctl start pushgateway.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>加入到开机自启动</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl enable pushgateway.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl status pushgateway.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查日志</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>journalctl -u pushgateway.service -f</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3、docker安装" tabindex="-1"><a class="header-anchor" href="#_3、docker安装"><span>3、docker安装</span></a></h2><p>docker命令行运行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker run  -d -p 9091:9091 --restart=always --name pushgateway prom/pushgateway</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>docker-compose运行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;docker-compose.yaml &lt;&lt;EOF</span></span>
<span class="line"><span>version: &#39;3.3&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  pushgateway:</span></span>
<span class="line"><span>    image: prom/pushgateway</span></span>
<span class="line"><span>    container_name: pushgateway</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    expose:</span></span>
<span class="line"><span>      - 9091</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;9091:9091&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker-compose up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker ps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_4、prometheus配置" tabindex="-1"><a class="header-anchor" href="#_4、prometheus配置"><span>4、Prometheus配置</span></a></h2><p>去pull拉取pushgateway收集到的数据。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#进入到prometheus安装目录</span></span>
<span class="line"><span>cd /data/docker-prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过cat在prometheus.yml文件末尾添加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt; prometheus/prometheus.yml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>  - job_name: pushgateway</span></span>
<span class="line"><span>    honor_labels: true  #加上此配置，exporter节点上传数据中的一些标签将不会被pushgateway节点的相同标签覆盖</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>      - targets: [&#39;192.168.11.61:9091&#39;]</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          instance: pushgateway</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重载配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9090/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><p><a href="http://192.168.11.61:9090/targets?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/targets?search=</a></p><h2 id="_5、向pushgateway推送监控数据" tabindex="-1"><a class="header-anchor" href="#_5、向pushgateway推送监控数据"><span>5、向Pushgateway推送监控数据</span></a></h2><h3 id="使用curl" tabindex="-1"><a class="header-anchor" href="#使用curl"><span>使用curl</span></a></h3><p>正常情况我们会使用 Client SDK 推送数据到 pushgateway, 但是我们还可以curl调用 API 来管理, 例如：</p><ul><li>向 <code>{job=&quot;some_job&quot;}</code> 添加单条数据：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>echo &quot;some_metric 3.14&quot; | curl --data-binary @- http://192.168.11.61:9091/metrics/job/some_job</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>添加更多更复杂数据，通常数据会带上 instance（some_instance为instance名）, 表示来源位置：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &lt;&lt;EOF | curl --data-binary @- http://192.168.11.61:9091/metrics/job/some_job/instance/some_instance</span></span>
<span class="line"><span># TYPE some_metric counter</span></span>
<span class="line"><span>some_metric{label=&quot;val1&quot;} 42</span></span>
<span class="line"><span># TYPE another_metric gauge</span></span>
<span class="line"><span># HELP another_metric Just an example.</span></span>
<span class="line"><span>another_metric 2398.283</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除某个组下的某实例的所有数据：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> curl -X DELETE http://192.168.11.61:9091/metrics/job/some_job/instance/some_instance</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>删除某个组下的所有数据：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X DELETE http://192.168.11.61:9091/metrics/job/some_job</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><p><a href="http://192.168.11.61:9090/graph" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/graph</a></p><p><a href="http://192.168.11.61:9091/metrics" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9091/metrics</a></p><h3 id="使用python" tabindex="-1"><a class="header-anchor" href="#使用python"><span>使用python</span></a></h3><p><a href="https://github.com/prometheus/client_python#exporting-to-a-pushgateway" target="_blank" rel="noopener noreferrer">文档</a></p><p>安装prometheus_client模块</p><p>安装pip</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>apt install python3-pip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过pip安装prometheus_client</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>pip install prometheus_client</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>python代码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>from prometheus_client import CollectorRegistry, Gauge, push_to_gateway</span></span>
<span class="line"><span></span></span>
<span class="line"><span>registry = CollectorRegistry()</span></span>
<span class="line"><span>g = Gauge(&#39;job_last_success_unixtime&#39;, &#39;Last time a batch job successfully finished&#39;, registry=registry)</span></span>
<span class="line"><span>g.set_to_current_time()</span></span>
<span class="line"><span>push_to_gateway(&#39;localhost:9091&#39;, job=&#39;batchA&#39;, registry=registry)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、监控data数据目录下的文件数量-需求" tabindex="-1"><a class="header-anchor" href="#_6、监控data数据目录下的文件数量-需求"><span>6、监控data数据目录下的文件数量（需求）</span></a></h2><h3 id="shell脚本" tabindex="-1"><a class="header-anchor" href="#shell脚本"><span>shell脚本</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt;/opt/file_num.sh&lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>FILENUM=\`ls -l /data |sed 1d| wc -l\`</span></span>
<span class="line"><span>echo &quot;data_file_num \${FILENUM}&quot; | curl --data-binary @- http://192.168.11.61:9091/metrics/job/test_job/instance/test</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务"><span>定时任务</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>*/1 * * * * /bin/sh /opt/file_num.sh &gt;/dev/null 2&gt;&amp;1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="python脚本" tabindex="-1"><a class="header-anchor" href="#python脚本"><span>python脚本</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt;/opt/file_num.py&lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>from prometheus_client import CollectorRegistry, Gauge, push_to_gateway</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>path = &#39;/data&#39;               # 输入文件夹地址</span></span>
<span class="line"><span>files = os.listdir(path)   # 读入文件夹</span></span>
<span class="line"><span>num_png = len(files)         # 统计文件夹中的文件个数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>registry = CollectorRegistry()</span></span>
<span class="line"><span>g = Gauge(&#39;python_data_file_num&#39;, &#39;data file num&#39;, [&#39;instance&#39;], registry=registry)</span></span>
<span class="line"><span>g.labels(&#39;test&#39;).set(num_png)</span></span>
<span class="line"><span>push_to_gateway(&#39;192.168.11.61:9091&#39;, job=&#39;test_job&#39;, registry=registry)</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时任务-1" tabindex="-1"><a class="header-anchor" href="#定时任务-1"><span>定时任务</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>*/1 * * * * /usr/bin/python3 /opt/file_num.py &gt;/dev/null 2&gt;&amp;1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_7、配置告警规则" tabindex="-1"><a class="header-anchor" href="#_7、配置告警规则"><span>7、配置告警规则</span></a></h2><p>例如：当data目录下的文件数量超过5，报警出来</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt; prometheus/rules/pushgateway.yml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>groups:</span></span>
<span class="line"><span>- name: pushgateway</span></span>
<span class="line"><span>  rules:</span></span>
<span class="line"><span>  - alert: DataFileNum</span></span>
<span class="line"><span>    expr: data_file_num &gt; 5</span></span>
<span class="line"><span>    for: 0m</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: warning</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &#39;data数据目录文件数过多&#39;</span></span>
<span class="line"><span>      description: &quot;data数据目录文件数&gt;5,当前数量:{{ $value }}&quot;</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重载配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9090/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><p><a href="http://192.168.11.61:9090/alerts?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/alerts?search=</a></p><h2 id="_8、grafana添加图形" tabindex="-1"><a class="header-anchor" href="#_8、grafana添加图形"><span>8、grafana添加图形</span></a></h2><h2 id="_9、总结" tabindex="-1"><a class="header-anchor" href="#_9、总结"><span>9、总结</span></a></h2><p>当然上面只是个举例：</p><p>你也可以监控任何你想要监控的数据</p>`,85),t=[l];function p(d,r){return a(),e("div",null,t)}const u=s(n,[["render",p],["__file","2.16.pushgateway自定义监控.html.vue"]]),o=JSON.parse('{"path":"/note/Prometheus/2.16.pushgateway%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9B%91%E6%8E%A7.html","title":"2.16.pushgateway自定义监控","lang":"zh-CN","frontmatter":{"title":"2.16.pushgateway自定义监控","order":20,"icon":"lightbulb","description":"一、环境 二、Pushgateway 1、Pushgateway 简介 Pushgateway 是 Prometheus 生态中一个重要工具，使用它的原因主要是： Prometheus 采用 pull 模式，可能由于不在一个子网或者防火墙原因，导致 Prometheus 无法直接拉取各个 target 数据。 在监控业务数据的时候，需要将不同数据汇总,...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/Prometheus/2.16.pushgateway%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9B%91%E6%8E%A7.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"2.16.pushgateway自定义监控"}],["meta",{"property":"og:description","content":"一、环境 二、Pushgateway 1、Pushgateway 简介 Pushgateway 是 Prometheus 生态中一个重要工具，使用它的原因主要是： Prometheus 采用 pull 模式，可能由于不在一个子网或者防火墙原因，导致 Prometheus 无法直接拉取各个 target 数据。 在监控业务数据的时候，需要将不同数据汇总,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.16.pushgateway自定义监控\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、Pushgateway 简介","slug":"_1、pushgateway-简介","link":"#_1、pushgateway-简介","children":[]},{"level":2,"title":"2、二进制安装","slug":"_2、二进制安装","link":"#_2、二进制安装","children":[]},{"level":2,"title":"3、docker安装","slug":"_3、docker安装","link":"#_3、docker安装","children":[]},{"level":2,"title":"4、Prometheus配置","slug":"_4、prometheus配置","link":"#_4、prometheus配置","children":[]},{"level":2,"title":"5、向Pushgateway推送监控数据","slug":"_5、向pushgateway推送监控数据","link":"#_5、向pushgateway推送监控数据","children":[{"level":3,"title":"使用curl","slug":"使用curl","link":"#使用curl","children":[]},{"level":3,"title":"使用python","slug":"使用python","link":"#使用python","children":[]}]},{"level":2,"title":"6、监控data数据目录下的文件数量（需求）","slug":"_6、监控data数据目录下的文件数量-需求","link":"#_6、监控data数据目录下的文件数量-需求","children":[{"level":3,"title":"shell脚本","slug":"shell脚本","link":"#shell脚本","children":[]},{"level":3,"title":"定时任务","slug":"定时任务","link":"#定时任务","children":[]},{"level":3,"title":"定时任务","slug":"定时任务-1","link":"#定时任务-1","children":[]}]},{"level":2,"title":"7、配置告警规则","slug":"_7、配置告警规则","link":"#_7、配置告警规则","children":[]},{"level":2,"title":"8、grafana添加图形","slug":"_8、grafana添加图形","link":"#_8、grafana添加图形","children":[]},{"level":2,"title":"9、总结","slug":"_9、总结","link":"#_9、总结","children":[]}],"git":{},"readingTime":{"minutes":4.7,"words":1410},"filePathRelative":"note/Prometheus/2.16.pushgateway自定义监控.md","autoDesc":true}');export{u as comp,o as data};
