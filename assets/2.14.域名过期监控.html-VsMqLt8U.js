import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,e as n}from"./app-yH_6ilSD.js";const i="/bj/assets/2023-10-28_202409_0440940.18482324263013594-D5WDx50O.png",l="/bj/assets/2023-10-28_202409_1120720.20075333174602294-DA_Atayx.png",d="/bj/assets/2023-10-28_202232_3157980.3417943973584434-fzbfidHN.png",t={},r=n(`<table id="0a9f477f" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="u42905bdc" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uc550ad90" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u60b7e61d" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ucaaf7f60" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="uda02ed32" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">localhost</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ue5195766" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.61</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ud855410f" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u215bf265" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">docker安装的prometheus</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="u66a1dbbe" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">test</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u3ec8c623" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.62</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uf64e8db3" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u779a2598" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">domain_exporter版本1.20.0</span></p></td></tr></tbody></table><h2 id="_1、环境搭建" tabindex="-1"><a class="header-anchor" href="#_1、环境搭建"><span>1、环境搭建</span></a></h2><h3 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装"><span>docker安装</span></a></h3><p>略</p><h3 id="docker-compose安装" tabindex="-1"><a class="header-anchor" href="#docker-compose安装"><span>docker-compose安装</span></a></h3><p>略</p><h1 id="二、域名过期时间监控" tabindex="-1"><a class="header-anchor" href="#二、域名过期时间监控"><span>二、域名过期时间监控</span></a></h1><p>域名的监控通过<code>domain_exporter</code>来完成</p><ul><li>domain_exporter</li></ul><p><a href="https://github.com/caarlos0/domain_exporter/releases" target="_blank" rel="noopener noreferrer">https://github.com/caarlos0/domain_exporter/releases</a></p><h2 id="_1、二进制安装-二选一" tabindex="-1"><a class="header-anchor" href="#_1、二进制安装-二选一"><span>1、二进制安装（二选一）</span></a></h2><p><a href="https://prometheus.io/download/" target="_blank" rel="noopener noreferrer">https://prometheus.io/download/</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>wget https://github.com/caarlos0/domain_exporter/releases/download/v1.20.0/domain_exporter_1.20.0_linux_amd64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar zxvf domain_exporter_1.20.0_linux_amd64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir /opt/prometheus -p</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>mv domain_exporter_1.20.0_linux_amd64 /opt/prometheus/domain_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>useradd -M -s /usr/sbin/nologin prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="更改exporter文件夹权限" tabindex="-1"><a class="header-anchor" href="#更改exporter文件夹权限"><span>更改exporter文件夹权限</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>chown prometheus:prometheus -R /opt/prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="创建systemd" tabindex="-1"><a class="header-anchor" href="#创建systemd"><span>创建systemd</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &lt;&lt;&quot;EOF&quot; &gt;/etc/systemd/system/domain_exporter.service</span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=domain_exporter </span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=simple</span></span>
<span class="line"><span>User=prometheus</span></span>
<span class="line"><span>Group=prometheus</span></span>
<span class="line"><span>ExecStart=/opt/prometheus/domain_exporter/domain_exporter </span></span>
<span class="line"><span>Restart=on-failure</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl start domain_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加入到开机自启动" tabindex="-1"><a class="header-anchor" href="#加入到开机自启动"><span>加入到开机自启动</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl enable domain_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查" tabindex="-1"><a class="header-anchor" href="#检查"><span>检查</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl status domain_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>启动不了检查日志</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>journalctl -u domain_exporter  -f</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2、docker安装" tabindex="-1"><a class="header-anchor" href="#_2、docker安装"><span>2、docker安装</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker run -d --restart=always --name domain_exporter -p 9222:9222 caarlos0/domain_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3、prometheus设置" tabindex="-1"><a class="header-anchor" href="#_3、prometheus设置"><span>3、Prometheus设置</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cd /data/docker-prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用cat追加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt; prometheus/prometheus.yml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>  - job_name: domain</span></span>
<span class="line"><span>    #scrape_interval: 1h</span></span>
<span class="line"><span>    scrape_interval: 15s</span></span>
<span class="line"><span>    metrics_path: /probe</span></span>
<span class="line"><span>    relabel_configs:</span></span>
<span class="line"><span>      - source_labels: [__address__]</span></span>
<span class="line"><span>        target_label: __param_target</span></span>
<span class="line"><span>      - target_label: __address__</span></span>
<span class="line"><span>        replacement: 192.168.11.62:9222 # domain_exporter address</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>      - targets:</span></span>
<span class="line"><span>        - qq.com</span></span>
<span class="line"><span>        - baidu.cn</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重新加载配置" tabindex="-1"><a class="header-anchor" href="#重新加载配置"><span>重新加载配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9090/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查-1" tabindex="-1"><a class="header-anchor" href="#检查-1"><span>检查</span></a></h3><p><a href="http://192.168.11.61:9090/targets?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/targets?search=</a></p><p><a href="http://192.168.11.62:9222/" target="_blank" rel="noopener noreferrer">http://192.168.11.62:9222/</a></p><h2 id="_4、常用监控项目" tabindex="-1"><a class="header-anchor" href="#_4、常用监控项目"><span>4、常用监控项目</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>domain_expiry_days     域名到期时间</span></span>
<span class="line"><span>domain_probe_success   域名检测状态</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、触发器" tabindex="-1"><a class="header-anchor" href="#_5、触发器"><span>5、触发器</span></a></h2><p>Prometheus配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 报警(触发器)配置</span></span>
<span class="line"><span>rule_files:</span></span>
<span class="line"><span>  - &quot;alert.yml&quot;  </span></span>
<span class="line"><span>  - &quot;rules/*.yml&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加domain触发器-告警规则" tabindex="-1"><a class="header-anchor" href="#添加domain触发器-告警规则"><span>添加domain触发器（告警规则）</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt; prometheus/rules/domain.yml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>groups:</span></span>
<span class="line"><span>- name: domain</span></span>
<span class="line"><span>  rules:</span></span>
<span class="line"><span>  - alert: 域名检测失败</span></span>
<span class="line"><span>    expr: domain_probe_success == 0</span></span>
<span class="line"><span>    for: 2h</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: warning</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &#39;{{ $labels.instance }}&#39;</span></span>
<span class="line"><span>      description: &#39;{{ $labels.domain }}域名检测失败&#39;</span></span>
<span class="line"><span>  - alert: 域名过期</span></span>
<span class="line"><span>    expr: domain_expiry_days &lt; 30</span></span>
<span class="line"><span>    for: 2h</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: warning</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &#39;{{ $labels.instance }}&#39;</span></span>
<span class="line"><span>      description: &#39;{{ $labels.domain }}将在30天后过期&#39;</span></span>
<span class="line"><span>  - alert: 域名过期</span></span>
<span class="line"><span>    expr: domain_expiry_days &lt; 5</span></span>
<span class="line"><span>    for: 2h</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: page</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &#39;{{ $labels.instance }}&#39;</span></span>
<span class="line"><span>      description: &#39;{{ $labels.domain }}将在5天后过期&#39;</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重新加载配置-1" tabindex="-1"><a class="header-anchor" href="#重新加载配置-1"><span>重新加载配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9090/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查-2" tabindex="-1"><a class="header-anchor" href="#检查-2"><span>检查</span></a></h3><p><a href="http://192.168.11.61:9090/alerts?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/alerts?search=</a></p><h2 id="_6、doshboard" tabindex="-1"><a class="header-anchor" href="#_6、doshboard"><span>6、Doshboard</span></a></h2><p><a href="https://grafana.com/grafana/dashboards/14605" target="_blank" rel="noopener noreferrer">https://grafana.com/grafana/dashboards/14605</a></p><p>问题处理：</p><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>找到右边的Column Styles，在找到“域名”这列，把<code>instance</code>修改为<code>domain</code> 如下图</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="三、我的微信" tabindex="-1"><a class="header-anchor" href="#三、我的微信"><span>三、我的微信</span></a></h1><p>如果安装碰到问题，可以随时加我微信，谢谢</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',58),p=[r];function c(h,o){return a(),e("div",null,p)}const u=s(t,[["render",c],["__file","2.14.域名过期监控.html.vue"]]),g=JSON.parse('{"path":"/note/Prometheus/2.14.%E5%9F%9F%E5%90%8D%E8%BF%87%E6%9C%9F%E7%9B%91%E6%8E%A7.html","title":"2.14.域名过期监控","lang":"zh-CN","frontmatter":{"title":"2.14.域名过期监控","order":18,"icon":"lightbulb","description":"1、环境搭建 docker安装 略 docker-compose安装 略 二、域名过期时间监控 域名的监控通过domain_exporter来完成 domain_exporter https://github.com/caarlos0/domain_exporter/releases 1、二进制安装（二选一） https://prometheus.io...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/Prometheus/2.14.%E5%9F%9F%E5%90%8D%E8%BF%87%E6%9C%9F%E7%9B%91%E6%8E%A7.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"2.14.域名过期监控"}],["meta",{"property":"og:description","content":"1、环境搭建 docker安装 略 docker-compose安装 略 二、域名过期时间监控 域名的监控通过domain_exporter来完成 domain_exporter https://github.com/caarlos0/domain_exporter/releases 1、二进制安装（二选一） https://prometheus.io..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.14.域名过期监控\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、环境搭建","slug":"_1、环境搭建","link":"#_1、环境搭建","children":[{"level":3,"title":"docker安装","slug":"docker安装","link":"#docker安装","children":[]},{"level":3,"title":"docker-compose安装","slug":"docker-compose安装","link":"#docker-compose安装","children":[]}]},{"level":2,"title":"1、二进制安装（二选一）","slug":"_1、二进制安装-二选一","link":"#_1、二进制安装-二选一","children":[{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"更改exporter文件夹权限","slug":"更改exporter文件夹权限","link":"#更改exporter文件夹权限","children":[]},{"level":3,"title":"创建systemd","slug":"创建systemd","link":"#创建systemd","children":[]},{"level":3,"title":"启动","slug":"启动","link":"#启动","children":[]},{"level":3,"title":"加入到开机自启动","slug":"加入到开机自启动","link":"#加入到开机自启动","children":[]},{"level":3,"title":"检查","slug":"检查","link":"#检查","children":[]}]},{"level":2,"title":"2、docker安装","slug":"_2、docker安装","link":"#_2、docker安装","children":[]},{"level":2,"title":"3、Prometheus设置","slug":"_3、prometheus设置","link":"#_3、prometheus设置","children":[{"level":3,"title":"重新加载配置","slug":"重新加载配置","link":"#重新加载配置","children":[]},{"level":3,"title":"检查","slug":"检查-1","link":"#检查-1","children":[]}]},{"level":2,"title":"4、常用监控项目","slug":"_4、常用监控项目","link":"#_4、常用监控项目","children":[]},{"level":2,"title":"5、触发器","slug":"_5、触发器","link":"#_5、触发器","children":[{"level":3,"title":"添加domain触发器（告警规则）","slug":"添加domain触发器-告警规则","link":"#添加domain触发器-告警规则","children":[]},{"level":3,"title":"重新加载配置","slug":"重新加载配置-1","link":"#重新加载配置-1","children":[]},{"level":3,"title":"检查","slug":"检查-2","link":"#检查-2","children":[]}]},{"level":2,"title":"6、Doshboard","slug":"_6、doshboard","link":"#_6、doshboard","children":[]}],"git":{},"readingTime":{"minutes":2.94,"words":881},"filePathRelative":"note/Prometheus/2.14.域名过期监控.md","autoDesc":true}');export{u as comp,g as data};
